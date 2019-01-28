const getProxyType = require('check-proxy').ping;
const router = require('express').Router();
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
  console.log('ip', req.connection.remoteAddress);
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
    const checkProxy =  require('../scraper/app');
    const cP1 = clone(checkProxy);
    console.log('request body is', req.body, req.session);
    cP1(req.body.proxies, res);
  } catch (err) {
    next(err);
  }
});

router.get('/ping', ping);
router.post('/ping', ping);

function clone(obj) {
  if (null == obj || "object" != typeof obj) return obj;
  var copy = obj.constructor();
  for (var attr in obj) {
      if (obj.hasOwnProperty(attr)) copy[attr] = obj[attr];
  }
  return copy;
}