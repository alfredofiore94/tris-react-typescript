import { createContext } from "react";
import type { Game } from "../models/game";
import { initGame } from "../config";

export interface GameCtx {
  game: Game;
  onUpdateGame: (game: Game) => void;
}

export const GameContext = createContext<GameCtx>({
  game: initGame(),
  onUpdateGame: () => {},
});
