var express = require('express'),
  router = express.Router(),
  Promise = require('bluebird')
  adb = require('adbkit')
  client = adb.createClient()
  apk = 'vendor/app.apk';

module.exports = function (app) {
  app.use('/', router);
};

router.get('/', function (req, res, next) {
  var articles = [new Article(), new Article()];
    res.render('index', {
      title: 'Teste deploy',
      articles: articles
    });

  client.listDevices()
    .then(function(devices) {
      return Promise.map(devices, function(device) {
        console.log(devices)
        return client.install(device.id, apk)
      })
    })
    .then(function() {
    })
    .catch(function(err) {
    })

});