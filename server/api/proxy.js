const getProxyType = require('check-proxy').ping;
const router = require('express').Router();
const {check, checkOne} = require('../scraper/app');
var _ = require('lodash');
module.exports = router;

let ipaddress = process.env.OPENSHIFT_NODEJS_IP;
const port = process.env.OPENSHIFT_NODEJS_PORT || 8080;

if (typeof ipaddress === 'undefined') {
  //  Log errors on OpenShift but continue w/ 127.0.0.1 - this
  //  allows us to run/test the app locally.
  console.warn('No OPENSHIFT_NODEJS_IP var, using 127.0.0.1');
  ipaddress = '127.0.0.1';
}

const ping = (req, res) => {
  try {
    console.log('headers', req.headers);
    console.log('remoteAddress', req.connection.remoteAddress);
  } catch (err) {
    console.log(err);
  }
  // console.log('ip', ip);
  let headers = _(req.headers).reduce(function(result, el) {
    return result + el;
  });
  console.log('headers', headers);
  console.log('query', req.query);
  console.log('cookies', req.cookies);
  res.json(getProxyType(req.headers, req.query, req.body, req.cookies));
};

router.post('/check', async (req, res, next) => {
  try {
    const result = await check(req.body.proxies);
    res.json(result);
  } catch (err) {
    next(err);
  }
});

router.post('/checkone', (req, res, next) => {
  try {
    console.log('request body is', req.body);
    checkOne(req.body.proxy, res, req.session);
    // res.json(await proxyResults);
  } catch (err) {
    next(err);
  }
});

router.get('/ping', ping);
router.post('/ping', ping);
