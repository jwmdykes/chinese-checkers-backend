const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server);
const { port, host } = require('./config');

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected!');
});

server.listen(port, host, () => {
  console.log(`listening at: http://${host}:${port}`);
});
