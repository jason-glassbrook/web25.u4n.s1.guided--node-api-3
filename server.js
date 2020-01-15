const express = require ('express')

const server = express ()

const routers = {
  hubs : require ('./hubs/hubs-router'),
  // messages : require ('./messages/messages-router'),
}

server.use (express.json ())
server.use (logger)
server.use (echo)

server.use ('/api/hubs', routers.hubs)

/***************************************
  funs
***************************************/

function logger (ri, ro, next) {
  const { method, originalUrl } = ri
  console.log (`request: ${method} ${originalUrl}`)

  next ()
}

function echo (ri, ro, next) {
  const { body } = ri
  console.log (`request body:`)
  console.log (body)

  next ()
}

/**************************************/

module.exports = server
