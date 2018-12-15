const ProxyVerifier = require('proxy-verifier');
const {parentPort, workerData} = require('worker_threads');
// const util = require('util');

const checkIP = ipAddress => {
  return new Promise((resolve, reject) => {
    let split = ipAddress.split(':');
    let proxy = {
      ipAddress: split[0],
      port: split[1],
      protocols: ['http', 'https', 'socks4', 'socks5']
    };

    ProxyVerifier.testAll(proxy, (error, result) => {
      if (error) {
        // console.log('there would have been an error');
        resolve(false);
      } else if (result.anonymityLevel != null) {
        // console.log('result: good', ipAddress);
        // ONLY INSTANCE OF GOOD RESULT
        resolve(result);
      } else {
        // console.log('there would have been an error');
        resolve(false);
      }
    });
  });
};

let {list} = workerData;
(async () => {
  parentPort.postMessage(`thread ${workerData.id} started`);
  if (list) {
    for (let i = 0; i < list.length; i++) {
      // console.log(`${workerData.id} checking ${list[i]}`);
      let result = await checkIP(list[i]);
      console.log(
        `thread ${workerData.id} checked ${list[i]}, ${list.length -
          i -
          1} remaining`
      );
      // console.log(result);
      if (result) {
        parentPort.postMessage({ip: list[i], result});
      }
      // })();
    }
  } else {
    console.log(`no IPs allocated to thread ${workerData.id}`);
  }
  parentPort.postMessage(`thread ${workerData.id} done`);
})();
