import type { PlayerGame } from "../models/player-game";

export interface IPlayerService {
  getPlayersData: () => Promise<PlayerGame[]>;
}
