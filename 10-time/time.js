// Generated by CoffeeScript 1.8.0
(function() {
  var net, port, server, zeroFill;

  net = require('net');

  port = process.argv[2];

  zeroFill = function(i) {
    if (i < 10) {
      return "0" + i;
    } else {
      return i;
    }
  };

  server = net.createServer(function(socket) {
    var date;
    date = new Date();
    return socket.end("" + (zeroFill(date.getFullYear())) + "-" + (zeroFill(date.getMonth() + 1)) + "-" + (zeroFill(date.getDate())) + " " + (zeroFill(date.getHours())) + ":" + (zeroFill(date.getMinutes())) + "\n");
  }).listen(port);

}).call(this);

//# sourceMappingURL=time.js.map