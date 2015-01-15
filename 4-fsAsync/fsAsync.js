var data, fs;

fs = require('fs');

data = fs.readFile(process.argv[2], 'utf8', function(err, data) {
  var res;
  if (err != null) {
    return console.log(err);
  } else {
    res = data.split('\n');
    return console.log(res.length - 1);
  }
});
