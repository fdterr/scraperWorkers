const puppeteer = require('puppeteer');
const {Worker} = require('worker_threads');
const {Proxy} = require('../db/models');

let page = '';

const newProxy = msg => {
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

  let newP = {
    host,
    port,
    level,
    http,
    https,
    socks5,
    socks4,
    tunnel
  };

  return newP;
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

const scrape = async () => {
  const browser = await puppeteer.launch(
    // {args: ['--no-sandbox', '--disable-setuid-sandbox', '--ignoreHTTPSErrors'],}
    {ignoreHTTPSErrors: true}
  );
  page = await browser.newPage();
  page.on('console', consoleObj => {
    console.log(consoleObj.text());
  });

  let spysOneProxies = await spysOne();
  let threads = spysOneProxies.length;
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
        let newP = newProxy(msg);
        try {
          await Proxy.create(newP);
          console.log('created');
        } catch (err) {
          console.error(err);
        }
      } else {
        console.log(msg);
      }
    });
  }

  browser.close();
};

scrape();