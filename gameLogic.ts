export interface Player {
  id: number;
  color: string;
}

export interface Square {
  color: number;
  selected: boolean;
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

export const leftDiagonals: [number, number][][] = [
  [[0, 4]],
  [
    [1, 4],
    [0, 5],
  ],
  [
    [2, 4],
    [1, 5],
    [0, 6],
  ],
  [
    [3, 4],
    [2, 5],
    [1, 6],
    [0, 7],
  ],
  [
    [0, 0],
    [0, 1],
    [0, 2],
    [0, 3],
    [4, 4],
    [3, 5],
    [2, 6],
    [1, 7],
    [0, 8],
    [0, 9],
    [0, 10],
    [0, 11],
    [0, 12],
  ],
  [
    [1, 1],
    [1, 2],
    [1, 3],
    [5, 4],
    [4, 5],
    [3, 6],
    [2, 7],
    [1, 8],
    [1, 9],
    [1, 10],
    [1, 11],
    [1, 12],
  ],
  [
    [2, 2],
    [2, 3],
    [6, 4],
    [5, 5],
    [4, 6],
    [3, 7],
    [2, 8],
    [2, 9],
    [2, 10],
    [2, 11],
    [2, 12],
  ],
  [
    [3, 3],
    [7, 4],
    [6, 5],
    [5, 6],
    [4, 7],
    [3, 8],
    [3, 9],
    [3, 10],
    [3, 11],
    [3, 12],
  ],
  [
    [8, 4],
    [7, 5],
    [6, 6],
    [5, 7],
    [4, 8],
    [4, 9],
    [4, 10],
    [4, 11],
    [4, 12],
  ],
  [
    [9, 4],
    [8, 5],
    [7, 6],
    [6, 7],
    [5, 8],
    [5, 9],
    [5, 10],
    [5, 11],
    [5, 12],
    [0, 13],
  ],

  [
    [10, 4],
    [9, 5],
    [8, 6],
    [7, 7],
    [6, 8],
    [6, 9],
    [6, 10],
    [6, 11],
    [6, 12],
    [1, 13],
    [0, 14],
  ],
  [
    [11, 4],
    [10, 5],
    [9, 6],
    [8, 7],
    [7, 8],
    [7, 9],
    [7, 10],
    [7, 11],
    [7, 12],
    [2, 13],
    [1, 14],
    [0, 15],
  ],
  [
    [12, 4],
    [11, 5],
    [10, 6],
    [9, 7],
    [8, 8],
    [8, 9],
    [8, 10],
    [8, 11],
    [8, 12],
    [3, 13],
    [2, 14],
    [1, 15],
    [0, 16],
  ],
  [
    [9, 9],
    [9, 10],
    [9, 11],
    [9, 12],
  ],
  [
    [10, 10],
    [10, 11],
    [10, 12],
  ],
  [
    [11, 11],
    [11, 12],
  ],
  [[12, 12]],
];

const rightDiagonals: [number, number][][] = [
  [[12, 4]],
  [
    [11, 4],
    [11, 5],
  ],
  [
    [10, 4],
    [10, 5],
    [10, 6],
  ],
  [
    [9, 4],
    [9, 5],
    [9, 6],
    [9, 7],
  ],
  [
    [0, 0],
    [1, 1],
    [2, 2],
    [3, 3],
    [8, 4],
    [8, 5],
    [8, 6],
    [8, 7],
    [8, 8],
    [9, 9],
    [10, 10],
    [11, 11],
    [12, 12],
  ],
  [
    [0, 1],
    [1, 2],
    [2, 3],
    [7, 4],
    [7, 5],
    [7, 6],
    [7, 7],
    [7, 8],
    [8, 9],
    [9, 10],
    [10, 11],
    [11, 12],
  ],
  [
    [0, 2],
    [1, 3],
    [6, 4],
    [6, 5],
    [6, 6],
    [6, 7],
    [6, 8],
    [7, 9],
    [8, 10],
    [9, 11],
    [10, 12],
  ],
  [
    [0, 3],
    [5, 4],
    [5, 5],
    [5, 6],
    [5, 7],
    [5, 8],
    [6, 9],
    [7, 10],
    [8, 11],
    [9, 12],
  ],
  [
    [4, 4],
    [4, 5],
    [4, 6],
    [4, 7],
    [4, 8],
    [5, 9],
    [6, 10],
    [7, 11],
    [8, 12],
  ],
  [
    [3, 4],
    [3, 5],
    [3, 6],
    [3, 7],
    [3, 8],
    [4, 9],
    [5, 10],
    [6, 11],
    [7, 12],
    [3, 13],
    [3, 14],
    [3, 15],
    [3, 16],
  ],
  [
    [2, 4],
    [2, 5],
    [2, 6],
    [2, 7],
    [2, 8],
    [3, 9],
    [4, 10],
    [5, 11],
    [6, 12],
    [2, 13],
    [2, 14],
    [2, 15],
    [2, 16],
  ],
  [
    [1, 4],
    [1, 5],
    [1, 6],
    [1, 7],
    [1, 8],
    [2, 9],
    [3, 10],
    [4, 11],
    [5, 12],
    [1, 13],
    [1, 14],
    [1, 15],
    [1, 16],
  ],
  [
    [0, 4],
    [0, 5],
    [0, 6],
    [0, 7],
    [0, 8],
    [1, 9],
    [2, 10],
    [3, 11],
    [4, 12],
    [0, 13],
    [0, 14],
    [0, 15],
    [0, 16],
  ],
  [
    [0, 9],
    [1, 10],
    [2, 11],
    [3, 12],
  ],
  [
    [0, 10],
    [1, 11],
    [2, 12],
  ],
  [
    [0, 11],
    [1, 12],
  ],
  [[0, 12]],
];

const rowDiagonals: [number, number][][] = [
  [[0, 0]],
  [
    [0, 1],
    [1, 1],
  ],
  [
    [0, 2],
    [1, 2],
    [2, 2],
  ],
  [
    [0, 3],
    [1, 3],
    [2, 3],
    [3, 3],
  ],
  [
    [0, 4],
    [1, 4],
    [2, 4],
    [3, 4],
    [4, 4],
    [5, 4],
    [6, 4],
    [7, 4],
    [8, 4],
    [9, 4],
    [10, 4],
    [11, 4],
    [12, 4],
  ],
  [
    [0, 5],
    [1, 5],
    [2, 5],
    [3, 5],
    [4, 5],
    [5, 5],
    [6, 5],
    [7, 5],
    [8, 5],
    [9, 5],
    [10, 5],
    [11, 5],
  ],
  [
    [0, 6],
    [1, 6],
    [2, 6],
    [3, 6],
    [4, 6],
    [5, 6],
    [6, 6],
    [7, 6],
    [8, 6],
    [9, 6],
    [10, 6],
  ],
  [
    [0, 7],
    [1, 7],
    [2, 7],
    [3, 7],
    [4, 7],
    [5, 7],
    [6, 7],
    [7, 7],
    [8, 7],
    [9, 7],
  ],
  [
    [0, 8],
    [1, 8],
    [2, 8],
    [3, 8],
    [4, 8],
    [5, 8],
    [6, 8],
    [7, 8],
    [8, 8],
  ],
  [
    [0, 9],
    [1, 9],
    [2, 9],
    [3, 9],
    [4, 9],
    [5, 9],
    [6, 9],
    [7, 9],
    [8, 9],
    [9, 9],
  ],
  [
    [0, 10],
    [1, 10],
    [2, 10],
    [3, 10],
    [4, 10],
    [5, 10],
    [6, 10],
    [7, 10],
    [8, 10],
    [9, 10],
    [10, 10],
  ],
  [
    [0, 11],
    [1, 11],
    [2, 11],
    [3, 11],
    [4, 11],
    [5, 11],
    [6, 11],
    [7, 11],
    [8, 11],
    [9, 11],
    [10, 11],
    [11, 11],
  ],
  [
    [0, 12],
    [1, 12],
    [2, 12],
    [3, 12],
    [4, 12],
    [5, 12],
    [6, 12],
    [7, 12],
    [8, 12],
    [9, 12],
    [10, 12],
    [11, 12],
    [12, 12],
  ],
  [
    [0, 13],
    [1, 13],
    [2, 13],
    [3, 13],
  ],
  [
    [0, 14],
    [1, 14],
    [2, 14],
  ],
  [
    [0, 15],
    [1, 15],
  ],
  [[0, 16]],
];

export const changeTurn = (players: Player[], turn: number): number => {
  const newTurn = turn >= players!.at(-1)!.id ? 1 : turn + 1;
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

const winningPositions: Map<number, [number, number][]> = new Map([
  [
    1,
    [
      [0, 0],
      [0, 1],
      [1, 1],
      [0, 2],
      [1, 2],
      [2, 2],
      [0, 3],
      [1, 3],
      [2, 3],
      [3, 3],
    ],
  ],
  [
    2,
    [
      [0, 16],
      [0, 15],
      [1, 15],
      [0, 14],
      [1, 14],
      [2, 14],
      [0, 13],
      [1, 13],
      [2, 13],
      [3, 13],
    ],
  ],
]);

export const getWinner = (
  rows: Array<Array<Number>>,
  players: Player[]
): null | Player => {
  for (let player of players) {
    let playerWon = true;
    const goal = winningPositions.get(player.id);
    console.log(goal);
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
