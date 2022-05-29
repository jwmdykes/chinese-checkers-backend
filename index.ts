const express = require('express');
import * as Express from 'express';
const cors = require('cors');
const crypto = require('crypto');
const {
  port,
  host,
  allowedPort,
  allowedHost,
  isDevelopment,
  key_file,
  cert_file,
} = require('./config');
import { Socket } from 'socket.io';
import * as gameSettings from './gameSettings';
import * as gameLogic from './gameLogic';
console.log('This is running as development: ', isDevelopment);

// keep a list of the running games on this server
const running_games: Map<string, gameLogic.GameObject> = new Map();

const allowedCors = {
  origin: `http${isDevelopment ? '' : 's'}://${allowedHost}${
    isDevelopment ? ':' + allowedPort : ''
  }`,
  methods: ['GET', 'POST'],
};

console.log(
  'allowing cors from : ' +
    `http${isDevelopment ? '' : 's'}://${allowedHost}${
      isDevelopment ? ':' + allowedPort : ''
    }`
);

const app = express();
app.use(cors(allowedCors));

let server: any;
// use https if there are cert and key files in the environment variables
if (key_file && cert_file) {
  const fs = require('fs');
  const https = require('https');
  const privateKey = fs.readFileSync(key_file);
  const certificate = fs.readFileSync(cert_file);
  const credentials = { key: privateKey, cert: certificate };
  server = https.createServer(credentials, app);
} else {
  const http = require('http');
  server = http.createServer(app);
}

const { Server } = require('socket.io');

let io: Socket;
io = new Server(server, {
  cors: allowedCors,
});

app.get('/', (req: Express.Request, res: Express.Response) => {
  res.send('Hello World!');
});

app.get(
  '/create/chinese-checkers',
  (req: Express.Request, res: Express.Response) => {
    const gameID = crypto.randomBytes(32).toString('hex');
    const numTargetPlayers = 2;
    const targetPlayers = gameSettings.AllPlayers.slice(0, numTargetPlayers);
    console.log('got random id for game: ', gameID);
    const newGame: gameLogic.GameObject = {
      gameID: gameID,
      gameType: 'chinese-checkers',
      host: `${host}:${port}`,
      players: [],
      numTargetPlayers: numTargetPlayers,
      targetPlayers: targetPlayers,
      rows: gameSettings.StartingRows[numTargetPlayers],
      turn: gameSettings.AllPlayers[0].id,
      availableSeats: Array(numTargetPlayers).fill(true),
    };
    running_games.set(newGame.gameID, newGame);
    res.send(Array.from(running_games.values()));
  }
);

app.get(
  '/list-games/chinese-checkers',
  (req: Express.Request, res: Express.Response) => {
    // console.log('getting running games: ', Array.from(running_games.values()));
    res.send(Array.from(running_games.values()));
  }
);

io.on('connection', (socket) => {
  console.log('a user connected!');
  let user: { gameID: string; player: gameLogic.Player | null } = {
    gameID: '',
    player: null,
  };

  socket.on('disconnect', () => {
    console.log('user disconnected');
    const currentGame = running_games.get(user.gameID);
    if (currentGame) {
      const newPlayers = currentGame.players.filter(
        (value: gameLogic.Player) => {
          return user.player && value.id !== user.player.id;
        }
      );
      if (newPlayers.length === 0) {
        running_games.delete(user.gameID);
      } else {
        console.log('player id: ', user.player!.id);
        currentGame.availableSeats[user.player!.id - 1] = true;
        console.log('new available seats: ', currentGame.availableSeats);
        console.log('new players: ', newPlayers);
        running_games.set(user.gameID, {
          gameID: currentGame.gameID,
          gameType: currentGame.gameType,
          host: currentGame.host,
          players: newPlayers,
          rows: currentGame.rows,
          targetPlayers: currentGame.targetPlayers,
          numTargetPlayers: currentGame.numTargetPlayers,
          turn: currentGame.turn,
          availableSeats: currentGame.availableSeats,
        });
      }
    }
  });

  socket.on('join', (gameID: string) => {
    // console.log('joining game: ', gameID);
    const game = running_games.get(gameID);
    if (game) {
      for (let i = 0; i < game.numTargetPlayers; i++) {
        if (game.availableSeats[i]) {
          game.availableSeats[i] = false;
          const player = gameSettings.AllPlayers[i];
          const secret = crypto.randomBytes(32).toString('hex'); // player secret, so other people can't move on this player's behalf

          game.players.push(player);
          user.gameID = game.gameID;
          user.player = player;

          const response = {
            player: player,
            secret: secret,
            game: game,
          };
          // console.log('found game, sending response', response);
          socket.emit('join', response);
          break;
        }
      }
    } else {
      // console.log("couldn't find game: ", gameID);
      socket.emit(null);
    }
  });

  socket.on('move', (res: { gameID: string; move: gameLogic.MoveObject }) => {
    // console.log('user tried to play move', res.move);
    // TODO verify moves on server
    // if (gameLogic.validMove()) {
    // }
    if (running_games.has(res.gameID)) {
      const currentGame = running_games.get(res.gameID);
      if (currentGame) {
        const newBoard = gameLogic.updateRows(
          currentGame.rows,
          res.move.source,
          res.move.dest,
          res.move.player
        );
        running_games.set(res.gameID, {
          gameID: currentGame.gameID,
          gameType: currentGame.gameType,
          host: currentGame.host,
          players: currentGame.players,
          rows: newBoard,
          targetPlayers: currentGame.targetPlayers,
          numTargetPlayers: currentGame.numTargetPlayers,
          turn: gameLogic.changeTurn(
            currentGame.targetPlayers,
            currentGame.turn
          ),
          availableSeats: currentGame.availableSeats,
        });
        socket.broadcast.emit('move', {
          gameID: res.gameID,
          move: res.move,
        });
      }
    }
  });
});

server.listen(port, host, () => {
  console.log(
    `listening at: http${key_file && cert_file ? 's' : ''}://${host}:${port}`
  );
});

export {};
