fs = require 'fs'
path = require 'path'
res = fs.readdir process.argv[2], (err,list)->
  if err?
    console.log err
  else
    for file in list
      if path.extname(file) is ".#{process.argv[3]}"
        console.log file
