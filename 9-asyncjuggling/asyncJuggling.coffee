http = require 'http'
bl = require 'bl'

urls = [process.argv[2],process.argv[3],process.argv[4]]

responses = []
completeCount=0



httpGet = (i)->
  http.get( urls[i], (res)->
    res.pipe( bl (err,data)->
      if err?
        console.error err
      else
        responses[i] = data.toString()
        completeCount++
        if completeCount is 3
          finish()

    )
  )

finish = ()->
  for response in responses
    console.log response

for url,i in urls
  httpGet i