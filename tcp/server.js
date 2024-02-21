const net = require('net');
const port = 54321

// create the tcp server
const server = net.createServer();

// event-based programming
// if a client connects, print hello
server.on('connection', (conn) => {
  conn.setEncoding('utf-8');

  console.log('a new client connected');
  conn.write('hello there');

  conn.on('data', (messageFromClient) => {
    console.log(`from client: ${messageFromClient}`);
  })
})

// start the server
server.listen(port, () => {
  console.log(`the server is listening on port ${port}`);
})
