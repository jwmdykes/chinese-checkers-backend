const express = require('express');
const cors = require('cors');
const crypto = require('crypto');
const { port, host } = require('./config');
const isDevelopment = process.env.NODE_ENV === 'development';
import * as gameSettings from './gameSettings';
console.log('This is running as development: ', isDevelopment);

interface GameObject {
  gameID: string;
  gameType: string;
  host: string;
  players: number;
  targetPlayers: number;
  rows: Array<Array<Number>>;
}

interface Move {
  start: [number, number];
  end: [number, number];
}

// keep a list of the running games on this server
const running_games: GameObject[] = [];

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
  const targetPlayers = 2;
  console.log('got random id for game: ', gameID);
  const newGame: GameObject = {
    gameID: gameID,
    gameType: 'chinese-checkers',
    host: `${host}:${port}`,
    players: 0,
    targetPlayers: targetPlayers,
    rows: gameSettings.StartingRows[targetPlayers],
  };
  running_games.push(newGame);
  res.send(newGame);
});

app.get('/list-games/chinese-checkers', (req, res) => {
  res.send(running_games);
});

io.on('connection', (socket) => {
  console.log('a user connected!');
  socket.on('disconnect', () => {
    console.log('user disconnected');
  });
  socket.on('make move', (move: Move) => {
    console.log('user tried to play move', move);
  });
});

server.listen(port, host, () => {
  console.log(`listening at: http://${host}:${port}`);
});

export {};
