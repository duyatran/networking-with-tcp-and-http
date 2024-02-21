const net = require('net')

const config = {
  host: 'localhost', // the IP address
  port: 54321
}

const client = net.createConnection(config);
client.setEncoding('utf-8');

client.write('hey hey hey');

client.on('data', (messageFromServer) => {
  console.log(`from server: ${messageFromServer}`);
})

// take in user input
process.stdin.on('data', (data) => {
  // console.log(`hello from stdin: ${data}`);
  client.write(data);
});