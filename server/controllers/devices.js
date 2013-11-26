// Generated by CoffeeScript 1.6.3
var Device, fs, request;

request = require("request-json");

fs = require('fs');

Device = require('../models/device');

module.exports = {
  devices: function(req, res, next) {
    return Device.all(function(err, devices) {
      if (err) {
        return next(err);
      } else {
        return res.send({
          rows: devices
        });
      }
    });
  }
};
