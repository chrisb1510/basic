var http, req;

http = require('http');

req = http.get(process.argv[2], function(res) {
  res.setEncoding('utf8');
  return res.on('data', function(data) {
    return console.log(data);
  });
});

req.on('error', function(error) {
  return console.log(error.message);
});
