var express = require('express');
var router = express.Router();
var subscriberRoutes = require('./subscriber/router');
var userRoutes = require('./user/router');

router.use('/subscribers', subscriberRoutes);
router.use('/users', userRoutes);

router.get('/home', function(req, res) {
  res.redirect('/subscribers');
});

router.get('/about', function(req, res) {
  res.send('Learn about us')
})

module.exports = router
