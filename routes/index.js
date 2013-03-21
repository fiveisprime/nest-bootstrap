var config = require('../config')
  , nest   = require('unofficial-nest-api');

exports.index = function(req, res) {
  nest.login(config.username, config.password, function(err, data) {
    if (err) {
      res.render('error', { error: err.message });
    } else {
      nest.get(function(data) {
        res.render('index', { nest: data });
      });
    }
  });
};
