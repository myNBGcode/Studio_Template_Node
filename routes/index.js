var express = require('express');
var router = express.Router();
var request = require("request");

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });
router.get('/',function(req,res){
     res.sendFile( __dirname+ '/front.html');
});


module.exports = router;
