import { createContext } from "react";
import type { PlayerGame } from "../models/player-game";

export interface PlayersCtx {
  players: PlayerGame[];
  onUpdatePlayers: (players: PlayerGame[]) => void;
  onAddPlayer: (player: PlayerGame) => void;
}

export const PlayersContext = createContext<PlayersCtx>({
  players: [],
  onUpdatePlayers: () => {},
  onAddPlayer: () => {},
});
