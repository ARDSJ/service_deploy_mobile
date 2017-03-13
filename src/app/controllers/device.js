var express = require('express'),
router = express.Router(),
Promise = require('bluebird')
adb = require('adbkit')
adbClient = adb.createClient()
adbCli = require('adb-cli');

module.exports = (app) => {
  app.use('/', router);
};

router.get('/devices', (req, res, next) => {

  adbClient.listDevices()
    .then((devices) => {
        console.log(devices)
        res.json(devices)
    })
  
});