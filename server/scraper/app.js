// const puppeteer = require('puppeteer');
const {Proxy} = require('../db/models');
const checkProxy = require('check-proxy').check;
const util = require('util');

let page = '';

const check = async (proxies, res, session) => {
  try {
    let length = proxies.length;
    response = res;
    console.log(`length is ${length}`);

    const scopeScan = proxies;

    const results = scopeScan.map(proxy => {
      let newProxy = createProxy(proxy);
      console.log('testing proxy', newProxy);
      const scanResult = verifyProxy(newProxy);
      // console.log('scan result is', scanResult);
      return scanResult;
    });

    let promiseResult = [];
    await Promise.all(results);
    for (let i = 0; i < results.length; i++) {
      promiseResult.push(await results[i]);
      console.log('received result for ', promiseResult[i]);
    }
    // console.log('results are', promiseResult);
    // res.send(promiseResult);
    return promiseResult;
  } catch (err) {
    console.log(err);
  }
};

const checkOne = async (proxy, res) => {
  let newProxy = createProxy(proxy);
  try {
    const scanResult = await verifyProxy(newProxy);
    // const result = await scanResult;
    console.log('scan result for', proxy, ' is ', scanResult);
    res.json({proxy: newProxy, result: scanResult});
  } catch (err) {
    // console.log(
    //   'caught error is',
    //   util.inspect(err, {showHidden: false, depth: null})
    // );
    console.log('error for ', proxy, ' is ', err);
    res.json({proxy: newProxy, error: err});
  }
};

const createProxy = ipAddress => {
  // console.log('ipaddress is', ipAddress);
  let split = ipAddress.split(':');
  let newProxy = {
    proxyIP: split[0],
    proxyPort: split[1]
  };
  return newProxy;
};

const verifyProxy = async proxy => {
  try {
    // console.log('verifying', proxy);
    const resultPromise = checkProxy({
      ...proxy,
      // testHost: 'http://localhost:8080/api/proxy/ping',
      testHost: '142.93.77.206/api/proxy/ping',
      // localIP: '204.48.22.234',
      localIP: '108.54.113.21',
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
    });
    // const result = await resultPromise;
    // console.log('result ', proxy;
    // return JSON.stringify({result, proxy});
    // return {result, proxy};
    return resultPromise;
  } catch (err) {
    throw new Error('Proxy Invalid');
  }
};

const spysOne = async () => {
  try {
    await page.goto('http://spys.one/free-proxy-list/US/');
    let ipAddresses = await page.$eval('body', element => {
      const regex = /[0-9]+(?:\.[0-9]+){3}:[0-9]+/g;
      let iT = element.innerText;
      let match = iT.match(regex);
      return match;
    });
    await page.close();
    return ipAddresses;
  } catch (err) {
    console.error(err);
  }
};

const scrape = async () => {
  // launch browser
  const browser = await puppeteer.launch(
    // {args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignoreHTTPSErrors'],}
    {ignoreHTTPSErrors: true, headless: true}
  );
  page = await browser.newPage();
  // page.on('console', consoleObj => {
  //   console.log(consoleObj.text());
  // });

  // grab spysOne proxies
  let arr = await spysOne();
  await browser.close();

  // copy to global array
  for (let i = 0; i < arr.length; i++) {
    spysOneProxies.push(arr[i]);
  }

  let threads = Math.min(spysOneProxies.length, 100);
  let length = spysOneProxies.length;

  console.log(`length is ${length}`);

  for (let i = 0; i < threads; i++) {
    let ipAddress = spysOneProxies.shift();
    let newWorker = createWorker(i, ipAddress);
    workers.push(newWorker);
    workerCount++;
  }
};

const verifyProxyBind = proxy => {
  return new Promise((resolve, reject) => {
    checkProxy({
      ...proxy,
      testHost: 'http://localhost:8080/api/proxy/ping',
      // testHost: '204.48.22.234/api/proxy/ping',
      localIP: '204.48.22.234',
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
        let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
        resolve({id: workerData.id, ...res, ipAddress});
      }.bind({resolve: resolve, reject: reject}),
      function(err) {
        let ipAddress = proxy.proxyIP + ':' + proxy.proxyPort;
        resolve({
          // id: workerData.id,
          err: err.toString(),
          ipAddress
        });
      }.bind({resolve: resolve, reject: reject})
    );
  });
};

function chunkArray(myArray, chunk_size) {
  // splits myArray into a chunk_size # of arrays (if chunk_size == 100, will return 100 small arrays)
  let results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

// const proxyHelper = async proxy => {
//   try {
//     let helper;
//     await verifyProxy(proxy).then(async result => {
//       helper = result;
//     });
//     console.log('helper is', helper);
//     return await helper;
//   } catch (err) {
//     console.log(err);
//   }
// };

// module.exports = check;
module.exports = {check, checkOne};
