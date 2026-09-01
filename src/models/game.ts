import type { PlayerGame } from "./player-game";

type BoardType = string[][] | null[][];
interface GameBase {
  board: BoardType;
}
export interface GameResult extends GameBase {
  winner: PlayerGame;
}
export interface Game extends GameBase {
  turn?: string;
  hasWinner: boolean;
  gameResults: GameResult[];
}
