import type { BoardType, Game } from "./models/game";

export const configGame = {
  player1: {
    name: "Giocatore 1",
    lastName: "",
    age: 0,
    symbol: "X",
  },
  player2: { name: "Giocatore 2", symbol: "O", lastName: "", age: 0 },
  board: [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ],
  turn: undefined,
  hasWinner: false,
};

export default function initBoard(): BoardType {
  console.log("INIT BOARD");

  return [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];
}
export function initGame(): Game {
  return {
    turn: configGame.player1,
    hasWinner: false,
    gameResults: [],
  };
}
