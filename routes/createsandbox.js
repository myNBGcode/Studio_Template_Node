var express = require('express');
var router = express.Router();
var request = require("request");



/* GET home page. */
router.get('/createsandbox', function(req, res, next) {
    var str='';
var options = { method: 'POST',
  url: 'https://apis.nbg.gr/sandbox/obpaccount/headers/v1.3/sandbox',
  headers: { accept: 'text/json',
   'content-type': 'text/json',
   'Client-Id': 'REPLACE_THIS_VALUE'},
  //Replace the line below to your own sandbox id and comment the line below it
  body: { sandbox_id: 'REPLACE_THIS_VALUE' },
  json: true };

request(options, function (error, response, body) {
  if (error) return console.error('Failed: %s', error.message);

  console.log('Success: ', body);
  res.send(body);
});

});
module.exports = router;

