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
