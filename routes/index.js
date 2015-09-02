var express = require('express');
var user = require('../controllers/user');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/reg', user.reg)
router.get('/find',user.find)
router.get('/setPassword',user.setPassword)
module.exports = router;
