http = require 'http'
map = require 'through2-map'
port = process.argv[2]

server = http.createServer (request,response)->
  if request.method is 'POST'
    request.pipe map (chunk)->
      chunk.toString().toUpperCase()
    .pipe response

.listen port