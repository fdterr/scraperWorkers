// const ProxyVerifier = require('proxy-verifier');
const {parentPort, workerData} = require('worker_threads');
const checkProxy = require('check-proxy').check;

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
    // testHost: 'http://localhost:8080/api/proxy/ping',
    testHost: '204.48.22.234/api/proxy/ping',
    localIP: '65.88.88.177',
    connectTimeout: 6,
    timeout: 10,
    websites: [
      {
        name: 'example',
        url: 'http://www.example.com/',
        regex: /example/gim // expected result - regex
      },
      // {
      //   name: 'yandex',
      //   url: 'http://www.yandex.ru/',
      //   regex: /yandex/gim // expected result - regex
      // },
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
      console.log('result', res);
      let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
      parentPort.postMessage({id: workerData.id, ...res, ipAddress});
    },
    function(err) {
      console.log('error', err);
      let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
      let returnValue = {
        id: workerData.id,
        error: err,
        ipAddress
      };
      parentPort.postMessage({
        id: workerData.id,
        err: err.toString(),
        ipAddress
      });
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
