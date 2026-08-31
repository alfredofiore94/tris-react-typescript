import { useState, type ChangeEvent } from "react";
import type { PlayerGame } from "../models/player-game";

export function Player(player: PlayerGame) {
  const [initialNamePlayer, setInitialNamePlayer] = useState<string>(
    player.name,
  );

  const [editedNamePlayer, setEditedNamePlayer] =
    useState<string>(initialNamePlayer);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  function editName(event: ChangeEvent<HTMLInputElement>) {
    console.log(event.target.value);
    setEditedNamePlayer(event.target.value);
  }

  return (
    <li>
      <span className="player">
        {!isEditingName ? (
          <>
            <span className="player-name"> {initialNamePlayer}</span>
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
            <input
              type="text"
              value={editedNamePlayer}
              onChange={(e) => editName(e)}
            />
            <button
              onClick={() => {
                setIsEditingName(false);
                setInitialNamePlayer(editedNamePlayer);
              }}
            >
              ✅
            </button>
            <button
              onClick={() => {
                setIsEditingName(false);
                setEditedNamePlayer(initialNamePlayer);
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
