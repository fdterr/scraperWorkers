const ProxyVerifier = require('proxy-verifier');
const {parentPort, workerData} = require('worker_threads');

const checkIP = ipAddress => {
  let split = ipAddress.split(':');
  let proxy = {
    ipAddress: split[0],
    port: split[1],
    protocols: ['http', 'https', 'socks4', 'socks5']
  };

  ProxyVerifier.testAll(proxy, (error, result) => {
    if (error) {
      parentPort.postMessage({
        ip: false,
        ...result,
        ...error,
        original: ipAddress,
        id: workerData.id
      });
    } else if (result.anonymityLevel != null) {
      // ONLY INSTANCE OF GOOD RESULT
      parentPort.postMessage({
        ip: ipAddress,
        result,
        original: ipAddress,
        id: workerData.id
      });
    } else {
      parentPort.postMessage({
        ip: false,
        ...result,
        ...error,
        original: ipAddress,
        id: workerData.id
      });
    }
  });
};

const listen = () => {
  parentPort.on('message', msg => {
    checkIP(msg);
  });
};

listen();
let {ipAddress} = workerData;
if (ipAddress) {
  checkIP(ipAddress);
}
