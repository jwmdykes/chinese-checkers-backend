const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { port, host } = require('./config');
const isDevelopment = process.env.NODE_ENV === 'development';
console.log('This is running as development: ', isDevelopment);

// keep a list of the running games on this server
running_games = [];

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

let io;
if (isDevelopment) {
  io = new Server(server, {
    cors: allowedCors,
  });
} else {
  io = new Server(server);
}

app.get('/', (req, res) => {
  res.send('Hello World!');
});

app.get('/create/chinese-checkers', (req, res) => {
  const gameID = crypto.randomBytes(32).toString('hex');
  console.log('got random id for game: ', gameID);
  res.send({
    gameID: gameID,
    gameType: 'chinese-checkers',
    host: `${host}:${port}`,
  });
});

io.on('connection', (socket) => {
  console.log('a user connected!');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
});

io.on('join', (gameID, socket) => {
  console.log('got request to join game: ', gameID);
});

server.listen(port, host, () => {
  console.log(`listening at: http://${host}:${port}`);
});
