var config = require('../config')
  , nest   = require('unofficial-nest-api');

exports.index = function(req, res) {
  nest.login(config.username, config.password, function(data) {
    if (!data) {
      res.render('error', { error: 'Login failed' });
    }
    nest.get(function(info) {
      res.render('index', { nest: info });
    });
  });
};
