// Generated by CoffeeScript 1.10.0
var Adapter, client, request;

request = require("request-json");

client = request.createClient("http://localhost:9101/");

module.exports = Adapter = (function() {
  function Adapter() {}

  Adapter.prototype.updateKeys = function(pwd, callback) {
    var name, ref, token;
    if ((ref = process.env.NODE_ENV) === 'production' || ref === 'test') {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.put("accounts/password/", {
      password: pwd
    }, function(err, res, body) {
      return callback(err);
    });
  };

  Adapter.prototype.initializeKeys = function(pwd, callback) {
    var name, ref, token;
    if ((ref = process.env.NODE_ENV) === 'production' || ref === 'test') {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.post("accounts/password/", {
      password: pwd
    }, function(err, res, body) {
      return callback(err);
    });
  };

  Adapter.prototype.updateUser = function(user, data, callback) {
    var name, ref, token;
    if ((ref = process.env.NODE_ENV) === 'production' || ref === 'test') {
      name = process.env.NAME;
      token = process.env.TOKEN;
      client.setBasicAuth(name, token);
    }
    return client.put("user/merge/" + user.id, data, function(err, res, body) {
      return callback(err);
    });
  };

  return Adapter;

})();
