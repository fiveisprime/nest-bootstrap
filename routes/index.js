var config = require('../config')
  , nest   = require('unofficial-nest-api');

exports.index = function(req, res) {
  nest.login(config.username, config.password, function(err, data) {
    if (err) {
      res.render('error', { error: err.message });
    } else {
      nest.get(function(data) {
        res.render('index', { nest: {} });
      });
    }
  });
};

exports.setTemp = function(req, res) {
  nest.login(config.username, config.password, function(err, data) {
    if (err) {
      res.render('error', { error: err.message });
    } else {
      var target = req.param('target');
      if (target) {
        nest.setTemperature(nest.ftoc(target));
      }

      res.render('index', { nest: data });
    }
  });
};
