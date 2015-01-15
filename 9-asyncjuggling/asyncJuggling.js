// Generated by CoffeeScript 1.8.0
(function() {
  var bl, completeCount, finish, http, httpGet, i, responses, url, urls, _i, _len;

  http = require('http');

  bl = require('bl');

  urls = [process.argv[2], process.argv[3], process.argv[4]];

  responses = [];

  completeCount = 0;

  httpGet = function(i) {
    return http.get(urls[i], function(res) {
      return res.pipe(bl(function(err, data) {
        if (err != null) {
          return console.error(err);
        } else {
          responses[i] = data.toString();
          completeCount++;
          if (completeCount === 3) {
            return finish();
          }
        }
      }));
    });
  };

  finish = function() {
    var response, _i, _len, _results;
    _results = [];
    for (_i = 0, _len = responses.length; _i < _len; _i++) {
      response = responses[_i];
      _results.push(console.log(response));
    }
    return _results;
  };

  for (i = _i = 0, _len = urls.length; _i < _len; i = ++_i) {
    url = urls[i];
    httpGet(i);
  }

}).call(this);

//# sourceMappingURL=asyncJuggling.js.map
