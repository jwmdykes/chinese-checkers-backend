import {
  rowDiagonals,
  leftDiagonals,
  rightDiagonals,
  winningPositions,
} from './gameSettings';

export interface Player {
  id: number;
  color: string;
  secret?: string;
}

export interface Square {
  color: number;
  selected: boolean;
}

export interface GameObject {
  gameID: string;
  gameType: string;
  players: Player[];
  availableSeats: boolean[];
  targetPlayers: Player[];
  numTargetPlayers: number;
  rows: Array<Array<Number>>;
  turn: number;
}

export interface MoveObject {
  player: Player;
  source: { x: number; y: number };
  dest: { x: number; y: number };
}

export const fillBoard0s = (
  rows: Array<Array<Number>>,
  rowLengths: Array<Number>
): void => {
  for (let i = 0; i < 17; i++) {
    rows[i] = Array(rowLengths[i]).fill(0);
  }
};

export const rowLengths = [
  1, 2, 3, 4, 13, 12, 11, 10, 9, 10, 11, 12, 13, 4, 3, 2, 1,
];

export const changeTurn = (players: Player[], turn: number): number => {
  console.log('running change turn');
  const newTurn = turn >= players[players.length - 1]!.id ? 1 : turn + 1;
  return newTurn;
};

const getRelevantDiagonal = (
  square: [number, number],
  diagonals: [number, number][][]
): [[number, number][], number] => {
  let myDiagonal: [number, number][] = [];
  let myIndex: number = 0;

  for (let diagonal of diagonals) {
    let i = 0;
    for (let digSquare of diagonal) {
      if (digSquare[0] === square[0] && digSquare[1] === square[1]) {
        myDiagonal = diagonal;
        myIndex = i;
      }
      i++;
    }
  }

  return [myDiagonal, myIndex];
};

const getDiagonalMoveableSquaresAdjacent = (
  rows: Array<Array<Number>>,
  square: [number, number],
  diagonals: [number, number][][]
): [number, number][] => {
  let res: [number, number][] = [];

  let [myDiagonal, myIndex] = getRelevantDiagonal(square, diagonals);

  if (myIndex > 0) {
    let toLandIndex = myDiagonal[myIndex - 1];
    const toLandValue = rows[toLandIndex[1]][toLandIndex[0]];
    if (toLandValue === 0) {
      res.push(toLandIndex);
    }
  }

  if (myIndex < myDiagonal.length - 1) {
    let toLandIndex = myDiagonal[myIndex + 1];
    const toLandValue = rows[toLandIndex[1]][toLandIndex[0]];
    if (toLandValue === 0) {
      res.push(toLandIndex);
    }
  }

  return res;
};

const getDiagonalMoveableSquares = (
  rows: Array<Array<Number>>,
  square: [number, number],
  diagonals: [number, number][][],
  searchedSquares: Map<[number, number], boolean>
): [number, number][] => {
  let res: [number, number][] = [];

  let [myDiagonal, myIndex] = getRelevantDiagonal(square, diagonals);

  if (myIndex > 1) {
    let toJumpIndex = myDiagonal[myIndex - 1];
    let toLandIndex = myDiagonal[myIndex - 2];
    if (!searchedSquares.has(toLandIndex)) {
      let toJumpValue = rows[toJumpIndex[1]][toJumpIndex[0]];
      let toLandValue = rows[toLandIndex[1]][toLandIndex[0]];
      if (toLandValue === 0 && toJumpValue !== 0) {
        res.push(toLandIndex);
        searchedSquares.set(toLandIndex, true);
      }
    }
  }

  if (myIndex < myDiagonal.length - 2) {
    let toJumpIndex = myDiagonal[myIndex + 1];
    let toLandIndex = myDiagonal[myIndex + 2];
    if (!searchedSquares.has(toLandIndex)) {
      let toJumpValue = rows[toJumpIndex[1]][toJumpIndex[0]];
      let toLandValue = rows[toLandIndex[1]][toLandIndex[0]];
      if (toLandValue === 0 && toJumpValue !== 0) {
        res.push(toLandIndex);
        searchedSquares.set(toLandIndex, true);
      }
    }
  }

  return res;
};

export const getMoveableSquares = (
  rows: Array<Array<Number>>,
  square: [number, number]
): [number, number][] => {
  let res: [number, number][] = [];
  let searchedSquares = new Map<[number, number], boolean>();
  searchedSquares.set(square, true);
  let searchQueue = [square];

  // recursively find all possible moves
  while (searchQueue.length > 0) {
    const squareToSearch = searchQueue.pop()!;
    // find possible moves on left diagonals, right diagonals, and rows independantly
    let FoundSquares = getDiagonalMoveableSquares(
      rows,
      squareToSearch,
      leftDiagonals,
      searchedSquares
    );
    FoundSquares = FoundSquares.concat(
      getDiagonalMoveableSquares(
        rows,
        squareToSearch,
        rightDiagonals,
        searchedSquares
      )
    );
    FoundSquares = FoundSquares.concat(
      getDiagonalMoveableSquares(
        rows,
        squareToSearch,
        rowDiagonals,
        searchedSquares
      )
    );
    searchQueue = searchQueue.concat(FoundSquares);
    res = res.concat(FoundSquares);
  }

  // get remaining, adjacent squares. Note that these aren't dont recursively
  res = res.concat(
    getDiagonalMoveableSquaresAdjacent(rows, square, leftDiagonals)
  );
  res = res.concat(
    getDiagonalMoveableSquaresAdjacent(rows, square, rightDiagonals)
  );
  res = res.concat(
    getDiagonalMoveableSquaresAdjacent(rows, square, rowDiagonals)
  );

  return res;
};

export const getWinner = (
  rows: Array<Array<Number>>,
  players: Player[]
): null | Player => {
  for (let player of players) {
    let playerWon = true;
    const goal = winningPositions.get(player.id);
    // console.log(goal);
    for (let square of goal!) {
      if (rows[square[1]][square[0]] !== player.id) {
        playerWon = false;
        break;
      }
    }

    if (playerWon) {
      return player;
    }
  }
  return null;
};

export const updateRows = (
  rows: Array<Array<Number>>,
  source: { x: number; y: number },
  dest: { x: number; y: number },
  player: Player
) => {
  let newRows = JSON.parse(JSON.stringify(rows));
  newRows[source.y][source.x] = 0;
  newRows[dest.y][dest.x] = player.id;
  return newRows;
};

export const getFirstAvailableGame = (data: any) => {
  for (let game of data) {
    if (game.players.length < game.numTargetPlayers) {
      return game.gameID;
    }
  }
  return '';
};
