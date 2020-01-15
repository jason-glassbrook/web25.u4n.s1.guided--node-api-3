const server = require ('./server.js')

const routers = {
  hubs : require ('./hubs/hubs-router'),
  // messages : require ('./messages/messages-router'),
}

server.use (express.json ())
server.use (logger)
server.use (echo)

server.use ('/api/hubs', routers.hubs)

server.listen (4000, () => {
  console.log ('\n* Server Running on http://localhost:4000 *\n')
})

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
}
