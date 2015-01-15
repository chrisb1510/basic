net = require 'net'

port = process.argv[2]
#"YYYY-MM-DD hh:mm"
zeroFill = (i)->
  if i < 10
    "0#{i}"
  else
     i


server = net.createServer (socket)->
  date = new Date()
  socket.end "#{zeroFill date.getFullYear()}-#{zeroFill date.getMonth()+1}-#{zeroFill date.getDate()} #{zeroFill date.getHours()}:#{zeroFill date.getMinutes()}\n"
.listen(port)
