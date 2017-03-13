var express = require('express'),
  router = express.Router(),
  Promise = require('bluebird')
  adb = require('adbkit')
  var adbClient = adb.createClient()
  adbCli = require('adb-cli')
  apk = 'vendor/app.apk';

module.exports = function (app) {
  app.use('/', router);
};

router.get('/devices', function (req, res, next) {

  adbClient.listDevices()
    .then(function(devices) {
        console.log(devices)
        res.json(devices)
    })
  
});