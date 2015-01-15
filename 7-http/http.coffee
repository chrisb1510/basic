http = require 'http'
req = http.get process.argv[2], (res)->
  res.setEncoding 'utf8'
  res.on 'data', (data)->
    console.log data
req.on 'error',(error)->
  console.log error.message
