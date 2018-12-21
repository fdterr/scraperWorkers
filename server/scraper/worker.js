const ProxyVerifier = require('proxy-verifier');
const {parentPort, workerData} = require('worker_threads');
const checkProxy = require('check-proxy').check;

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

const createProxy = ipAddress => {
  let split = ipAddress.split(':');
  let newProxy = {
    proxyIP: split[0],
    proxyPort: split[1]
  };
  return newProxy;
};

const verifyProxy = proxy => {
  checkProxy({
    ...proxy,
    testHost: 'http://localhost:8080/api/proxy/ping',
    localIP: '65.88.88.177',
    connectTimeout: 6,
    timeout: 10,
    websites: [
      {
        name: 'example',
        url: 'http://www.example.com/',
        regex: /example/gim // expected result - regex
      },
      {
        name: 'yandex',
        url: 'http://www.yandex.ru/',
        regex: /yandex/gim // expected result - regex
      },
      {
        name: 'google',
        url: 'http://www.google.com/',
        regex: function(html) {
          // expected result - custom function
          return html && html.indexOf('google') != -1;
        }
      },
      {
        name: 'amazon',
        url: 'http://www.amazon.com/',
        regex: 'Amazon' // expected result - look for this string in the output
      }
    ]
  }).then(
    function(res) {
      // console.log('good response', res);
      // console.log('-----');
      let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
      parentPort.postMessage({id: workerData.id, ...res, ipAddress});
    },
    function(err) {
      // console.log('error!', err);
      // console.log('-----');
      let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
      parentPort.postMessage({id: workerData.id, ...err, ipAddress});
    }
  );
};

const listen = () => {
  parentPort.on('message', msg => {
    let newProxy = createProxy(msg);
    verifyProxy(newProxy);
    // checkIP(msg);
  });
};

listen();
let {ipAddress} = workerData;
if (ipAddress) {
  let newProxy = createProxy(ipAddress);
  verifyProxy(newProxy);
  // checkProxy(ipAddress);
}
