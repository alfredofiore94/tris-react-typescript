import type { PlayerGame } from "./player-game";

export type BoardType = (string | null)[][];
interface GameBase {
  turn: PlayerGame;
  hasWinner: boolean;
}
export interface GameResult {
  winner: PlayerGame;
  board: BoardType;
}
export interface Game extends GameBase {
  gameResults: GameResult[];
}
