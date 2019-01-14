var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/deletesandbox', function(req, res, next) {
    var str='';
var options = { method: 'DELETE',
  url: 'https://apis.nbg.gr/public/sandbox/obp.account.sandbox/v1.1/sandbox/REPLACE_THIS_VALUE1',
  headers: { accept: 'text/json',
  'content-type': 'text/json',
  request_id: 'REPLACE_THIS_VALUE',
  provider:'NBG',
  provider_id:'NBG.gr',
  provider_username:'REPLACE_THIS_VALUE',
  application_id:'REPLACE_THIS_VALUE',
  //sandbox_id:'REPLACE_THIS_VALUE',
  'x-ibm-client-id': 'REPLACE_THIS_VALUE'}, };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});
});
module.exports = router;

