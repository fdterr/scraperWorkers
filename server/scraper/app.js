const puppeteer = require('puppeteer');
const {Worker} = require('worker_threads');

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
    w.on('message', msg => {
      console.log('message is', msg);
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
