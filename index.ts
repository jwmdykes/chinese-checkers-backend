const express = require('express');
import * as Express from 'express';
const cors = require('cors');
const crypto = require('crypto');
const { port, isDevelopment } = require('./config');
import { Socket } from 'socket.io';
import * as gameSettings from './gameSettings';
import * as gameLogic from './gameLogic';
console.log('This is running as development:', isDevelopment);
let moveCounter = 0;

// keep a list of the running games on this server
const running_games: Map<string, gameLogic.GameObject> = new Map();

const allowedCors = {
  origin: '*',
  methods: ['GET', 'POST'],
};

console.log(`allowing cors from: ${allowedCors.origin}`);

const app = express();
app.use(cors(allowedCors));

const http = require('http');
const server = http.createServer(app);

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
    console.log(
      `number of games: ${Array.from(running_games.values()).length}`
    );
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
        console.log('removing player from game');
        console.log('player id: ', user.player!.id);
        currentGame.availableSeats[user.player!.id - 1] = true;
        console.log('new available seats: ', currentGame.availableSeats);
        console.log('new players: ', newPlayers);
        running_games.set(user.gameID, {
          gameID: currentGame.gameID,
          gameType: currentGame.gameType,
          players: newPlayers,
          rows: currentGame.rows,
          targetPlayers: currentGame.targetPlayers,
          numTargetPlayers: currentGame.numTargetPlayers,
          turn: currentGame.turn,
          availableSeats: currentGame.availableSeats,
        });
      }
    }
    socket.broadcast.emit('playerLeft', running_games.get(user.gameID));
    socket.removeAllListeners();
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
          socket.join(gameID);
          io.to(gameID).emit('newPlayer', game);
          break;
        }
      }
    } else {
      console.log("couldn't find game: ", gameID);
      socket.emit(null);
    }
  });

  socket.on(
    'move',
    (res: { gameID: string; move: gameLogic.MoveObject; turn: number }) => {
      // console.log('user tried to play move', res.move);
      // TODO verify moves on server
      // if (gameLogic.validMove()) {
      // }
      console.log('doing move!', moveCounter);
      moveCounter++;
      if (
        running_games.has(res.gameID) &&
        running_games.get(res.gameID)?.turn === res.turn
      ) {
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
          io.to(res.gameID).emit('move', {
            gameID: res.gameID,
            move: res.move,
          });
        }
      }
    }
  );
});

server.listen(port, '0.0.0.0', () => {
  console.log(`listening at: http://0.0.0.0:${port}`);
});

export {};
