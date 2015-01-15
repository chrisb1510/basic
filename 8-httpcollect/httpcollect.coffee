http = require 'http'
bl = require 'bl'
opt = process.argv[2]

res = http.get opt, (res)->
  res.pipe( bl (err,data)->
    if err?
      console.log err
    else
      console.log data.length
      console.log data.toString()
  )