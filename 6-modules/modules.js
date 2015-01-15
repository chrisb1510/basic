var mymodule;

mymodule = require('./mymodule');

mymodule(process.argv[2], process.argv[3], function(err, list) {
  var file, _i, _len, _results;
  if (err != null) {
    return console.log(err);
  } else {
    _results = [];
    for (_i = 0, _len = list.length; _i < _len; _i++) {
      file = list[_i];
      _results.push(console.log(file));
    }
    return _results;
  }
});
