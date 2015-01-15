###
"/api/parsetime"
{
"hour": 14,
"minute": 23,
"second": 15
}

"/api/unixtime"
{ "unixtime": 1376136615474 }
###
http = require 'http'
url = require 'url'
port = process.argv[2]

server = http.createServer (request,response)->
  if request.method is 'GET'
    data = url.parse(request.url,true)
    if data.pathname is "/api/parsetime"
      date = new Date(data.query.iso)
      response.writeHead 200, { 'Content-Type': 'application/json' }
      response.write JSON.stringify({"hour":date.getHours(),"minute":date.getMinutes(),"second":date.getSeconds()})
      response.end()
    else if data.pathname is "/api/unixtime"

      response.writeHead 200, { 'Content-Type': 'application/json' }
      response.write JSON.stringify({"unixtime":Math.round(new Date(data.query.iso).getTime())})
      response.end()
.listen port