import { useState } from "react";
import type { Player } from "../models/player";

export function Player(player: Player) {
  const [namePlayer, setNamePlayer] = useState<string>("");
  function OnClickEditName(namePlayer: string) {
    setNamePlayer(namePlayer);
  }
  return (
    <li>
      <span className="player-name"> {player.name}</span>
      <span className="player-symbol"> {player.symbol}</span>
      <button>Modifica nome giocatore</button>
    </li>
  );
}
