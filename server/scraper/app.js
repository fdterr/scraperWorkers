const puppeteer = require('puppeteer');
const {Worker} = require('worker_threads');
const {Proxy} = require('../db/models');

let page = '';

const scrape = async () => {
  const browser = await puppeteer.launch(
    // {args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignoreHTTPSErrors'],}
    {ignoreHTTPSErrors: true}
  );
  page = await browser.newPage();
  page.on('console', consoleObj => {
    console.log(consoleObj.text());
  });

  let threads = 10;
  let spysOneProxies = await spysOne();
  let chunkArrays = chunkArray(spysOneProxies, spysOneProxies.length / threads);
  console.log('This is the main thread');
  for (let i = 0; i < threads; i++) {
    let w = new Worker(__dirname + '/worker.js', {
      workerData: {
        id: i,
        list: chunkArrays[i]
      }
    });
    w.on('message', async msg => {
      if (msg.ip) {
        let result = msg.result;
        let tests = result.protocols;

        let host = msg.ip.split(':')[0];
        let port = msg.ip.split(':')[1];

        let level = result.anonymityLevel;
        let http = tests.http.ok;
        let https = tests.https.ok;
        let socks5 = tests.socks5.ok;
        let socks4 = tests.socks4.ok;

        let tunnel = result.tunnel.ok;

        let newProxy = {
          host,
          port,
          level,
          http,
          https,
          socks5,
          socks4,
          tunnel
        };
        // console.log(msg);
        // console.log('new proxy is', newProxy);
        // if (newProxy.host === null) {
        //   console.log('new proxy is', newProxy);
        // }
        try {
          await Proxy.create(newProxy);
          console.log('created');
        } catch (err) {
          console.error(err);
          // console.log('there was an error on IP:', msg);
        }
      } else {
        console.log(msg);
      }
    });
  }

  browser.close();
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
    console.log('returning', ipAddresses);
    return ipAddresses;
  } catch (err) {
    console.error(err);
  }
};

function chunkArray(myArray, chunk_size) {
  var results = [];

  while (myArray.length) {
    results.push(myArray.splice(0, chunk_size));
  }

  return results;
}

scrape();
