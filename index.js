const express = require('express');
const cors = require('cors');
const { port, host } = require('./config');
const isDevelopment = process.env.NODE_ENV === 'development';
console.log('This is running as development: ', isDevelopment);

const app = express();
let allowedCors = {};
if (isDevelopment) {
  app.use(cors());
  allowedCors = {
    cors: {
      origin: `http://${host}:${3000}`,
      methods: ['GET', 'POST'],
    },
  };
}

const http = require('http');
const server = http.createServer(app);
const { Server } = require('socket.io');
const io = new Server(server, {
  cors: allowedCors,
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

io.on('connection', (socket) => {
  console.log('a user connected!');
});

server.listen(port, host, () => {
  console.log(`listening at: http://${host}:${port}`);
});
