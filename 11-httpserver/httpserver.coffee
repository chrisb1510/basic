http = require 'http'
fs = require 'fs'
port = process.argv[2]
file = process.argv[3]

server = http.createServer (request,response)->
  f = fs.createReadStream file
  f.pipe response
.listen(port)
