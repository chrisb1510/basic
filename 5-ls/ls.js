var fs, path, res;

fs = require('fs');

path = require('path');

res = fs.readdir(process.argv[2], function(err, list) {
  var file, _i, _len, _results;
  if (err != null) {
    return console.log(err);
  } else {
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      file = list[_i];
      if (path.extname(file) === ("." + process.argv[3])) {
        _results.push(console.log(file));
      } else {
        _results.push(void 0);
      }
    }
    return _results;
  }
});
