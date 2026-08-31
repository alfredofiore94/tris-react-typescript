import type { PlayerGame } from "./player-game";

type BoardType = string[][] | null[][];
interface GameBase {
  board: BoardType;
}
export interface GameResults extends GameBase {
  winner: PlayerGame;
}
export interface Game extends GameBase {
  lastSymbol?: string;
}
