// Generated by CoffeeScript 1.10.0
var Client, Device, ds, fs, ref;

Client = require("request-json").JsonClient;

fs = require('fs');

Device = require('../models/device');

ds = new Client("http://localhost:9101/");

if ((ref = process.env.NODE_ENV) === 'test' || ref === 'production') {
  ds.setBasicAuth(process.env.NAME, process.env.TOKEN);
}

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
  },
  remove: function(req, res, next) {
    var id;
    id = req.params.deviceid;
    return Device.find(id, function(err, device) {
      if (err != null) {
        return next(err);
      } else {
        return ds.del("access/" + id + "/", function(err, response, body) {
          if (err) {
            log.error(err);
          }
          return device.destroy(function(err) {
            err = err || body.error;
            if (err != null) {
              return next(err);
            } else {
              return res.status(200).send({
                success: true
              });
            }
          });
        });
      }
    });
  }
};
