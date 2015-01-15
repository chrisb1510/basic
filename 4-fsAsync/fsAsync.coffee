fs = require 'fs'
data = fs.readFile process.argv[2], 'utf8',(err,data)->
  if err?
    console.log err
  else
    res = data.split '\n'
    console.log res.length-1
