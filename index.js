const server = require ('./server.js')

const routers = {
  hubs : require ('./hubs/hubs-router'),
  // messages : require ('./messages/messages-router'),
}

server.use ('/api/hubs', routers.hubs)

server.listen (4000, () => {
  console.log ('\n* Server Running on http://localhost:4000 *\n')
})


server.listen(4000, () => {
  console.log('\n* Server Running on http://localhost:4000 *\n');
});
