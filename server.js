const express = require ('express')

const server = express ()

const routers = {
  hubs : require ('./hubs/hubs-router'),
  // messages : require ('./messages/messages-router'),
}

server.use (express.json ())
server.use (logger)
// server.use (gatekeeper)
server.use (echo)

server.use ('/api/hubs', routers.hubs)

/***************************************
  funs
***************************************/

function logger (ri, ro, next) {
  const { method, originalUrl } = ri
  console.log (`${method} ${originalUrl}`)

  next ()
}

function echo (ri, ro, next) {
  const { body } = ri
  console.log (`- body:`)
  console.log (body)

  next ()
}

function gatekeeper (ri, ro, next) {
  const { password } = ri.headers
  console.log (`- headers.password:`)
  console.log (password)

  if (password === 'mellon') {
    next ()
  }
  else {
    ro
      .status (401)
      .json ({
        error : 'you shall not pass!'
      })
  }
}

/**************************************/

module.exports = server
