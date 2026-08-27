import { useState } from "react";
import type { Player } from "../models/player";

export function Player(player: Player) {
  const [namePlayer, setNamePlayer] = useState<string>(player.name);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  function EditName(nameEdit: string) {
    setNamePlayer(nameEdit);
  }
  return (
    <li>
      <span className="player">
        {!isEditingName ? (
          <>
            <span className="player-name"> {namePlayer}</span>
            <span className="player-symbol"> {player.symbol}</span>
            <button
              onClick={() => {
                setIsEditingName(true);
              }}
            >
              Modifica nome giocatore
            </button>{" "}
          </>
        ) : (
          <>
            <input type="text" required value={player.name} />
            <button
              onClick={() => {
                setIsEditingName(false);
              }}
            >
              ✅
            </button>
            <button
              onClick={() => {
                setIsEditingName(false);
              }}
            >
              ❌
            </button>
          </>
        )}
      </span>
    </li>
  );
}
