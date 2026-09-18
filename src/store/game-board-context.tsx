import { createContext } from "react";
import type { BoardType } from "../models/game";
import initBoard from "../config";

export interface GameBoardCtx {
  gameBoard: BoardType;
  onUpdateGameBoard: (game: BoardType) => void;
}

export const GameBoardContext = createContext<GameBoardCtx>({
  gameBoard: initBoard(),
  onUpdateGameBoard: () => {},
});
