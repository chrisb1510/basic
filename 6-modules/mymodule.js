var fs, list, path;

fs = require('fs');

path = require('path');

list = function(dirname, extension, callback) {
  fs.readdir(dirname, function(err, list) {
    var data, file, _i, _len;
    if (err != null) {
      return callback(err);
    } else {
      data = [];
      for (_i = 0, _len = list.length; _i < _len; _i++) {
        file = list[_i];
        if (path.extname(file) === ("." + extension)) {
          data.push(file);
        }
      }
      return callback(null, data);
    }
  });
};

module.exports = list;
