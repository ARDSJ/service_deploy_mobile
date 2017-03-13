var express = require('express'),
  router = express.Router(),
  Promise = require('bluebird')
  adb = require('adbkit')
  client = adb.createClient([{
    port:5037,
    host:"localhost"
  }])
  apk = 'vendor/app.apk'
  Article = require('../models/article');

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Generator-Express MVC',
      articles: articles
    });

  client.listDevices()
    .then(function(devices) {
      return Promise.map(devices, function(device) {
        return client.install(device.id, apk)
      })
    })
    .then(function() {
      console.log('Installed %s on all connected devices', apk)
    })
    .catch(function(err) {
      console.error('Something went wrong:', err.stack)
    })




});