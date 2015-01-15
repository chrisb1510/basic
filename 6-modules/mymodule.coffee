fs = require 'fs'
path = require 'path'

list = (dirname,extension,callback)->
  fs.readdir dirname,(err,list)->
    if err?
      callback err
    else
      data = []
      for file in list
        if path.extname(file) is ".#{extension}"
          data.push file
      callback null,data

  return
module.exports = list
