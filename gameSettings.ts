import * as gameLogic from './gameLogic';

export const Player1: gameLogic.Player = {
  id: 1,
  color: 'green',
};

export const Player2: gameLogic.Player = {
  id: 2,
  color: 'pink',
};

export const Player3: gameLogic.Player = {
  id: 3,
  color: 'blue',
};

export const Player4: gameLogic.Player = {
  id: 4,
  color: 'red',
};

export const Player5: gameLogic.Player = {
  id: 5,
  color: 'purple',
};

export const Player6: gameLogic.Player = {
  id: 6,
  color: 'yellow',
};

export const AllPlayers = [
  Player1,
  Player2,
  Player3,
  Player4,
  Player5,
  Player6,
];

export interface Color {
  type: string;
  hue: number;
  saturation: number;
  brightness: number;
}

export type ColorMap = { [key: string]: Color };

export const colors: ColorMap = {
  empty: { type: 'hsl', hue: 22, saturation: 75, brightness: 9 },
  hover: { type: 'hsl', hue: 22, saturation: 75, brightness: 40 },
  blue: { type: 'hsl', hue: 251, saturation: 75, brightness: 49 },
  red: { type: 'hsl', hue: 0, saturation: 90, brightness: 48 },
  green: { type: 'hsl', hue: 127, saturation: 88, brightness: 46 },
  pink: { type: 'hsl', hue: 316, saturation: 97, brightness: 65 },
  purple: { type: 'hsl', hue: 279, saturation: 100, brightness: 42 },
  yellow: { type: 'hsl', hue: 60, saturation: 91, brightness: 50 },
  teal: { type: 'hsl', hue: 177, saturation: 91, brightness: 50 },
};

export const colorString = (color: Color): string => {
  if (color.type === 'hsl') {
    return (
      'hsl(' +
      color.hue +
      ',' +
      color.saturation +
      '%,' +
      color.brightness +
      '%)'
    );
  } else {
    throw 'colors other than hsl not yet supported';
  }
};

export const StartingSelected: Array<Array<boolean>> = [
  [false],
  [false, false],
  [false, false, false],
  [false, false, false, false],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [false, false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false],
  [false, false, false, false, false, false, false, false, false, false, false],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
    false,
  ],
  [false, false, false, false],
  [false, false, false],
  [false, false],
  [false],
];

export const AlmostGameOverRow = [
  [1],
  [1, 1],
  [1, 1, 1],
  [0, 1, 1, 1],
  [0, 0, 0, 0, 1, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
  [2, 2, 2, 2],
  [0, 2, 2],
  [0, 2],
  [2],
];

export const StartingRows: Array<Array<Number>>[] = [
  [
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0],
    [0, 0],
    [0],
  ],
  [
    [0],
    [0, 0],
    [0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],

  [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],
  [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],
  [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],
  [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],
  [
    [2],
    [2, 2],
    [2, 2, 2],
    [2, 2, 2, 2],
    [4, 4, 4, 4, 0, 0, 0, 0, 0, 5, 5, 5, 5],
    [4, 4, 4, 0, 0, 0, 0, 0, 0, 5, 5, 5],
    [4, 4, 0, 0, 0, 0, 0, 0, 0, 5, 5],
    [4, 0, 0, 0, 0, 0, 0, 0, 0, 5],
    [0, 0, 0, 0, 0, 0, 0, 0, 0],
    [6, 0, 0, 0, 0, 0, 0, 0, 0, 3],
    [6, 6, 0, 0, 0, 0, 0, 0, 0, 3, 3],
    [6, 6, 6, 0, 0, 0, 0, 0, 0, 3, 3, 3],
    [6, 6, 6, 6, 0, 0, 0, 0, 0, 3, 3, 3, 3],
    [1, 1, 1, 1],
    [1, 1, 1],
    [1, 1],
    [1],
  ],
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

export const rightDiagonals: [number, number][][] = [
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

export const rowDiagonals: [number, number][][] = [
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

export const winningPositions: Map<number, [number, number][]> = new Map([
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
