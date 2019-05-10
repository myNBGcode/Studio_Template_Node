var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/deletesandbox', function(req, res, next) {
    var str='';
var options = { method: 'DELETE',
  url: 'https://apis.nbg.gr/sandbox/obpaccount/headers/v1.3/sandbox/REPLACE_THIS_VALUE',
  headers: { accept: 'text/json',
  'content-type': 'text/json',
  'Client-Id': 'REPLACE_THIS_VALUE'}, };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});
});
module.exports = router;

