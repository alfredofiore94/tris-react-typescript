import { useState, type ChangeEvent } from "react";
import type { PlayerGame } from "../../models/player-game";
import "./player.css";

export function Player(player: PlayerGame) {
  const [initialNamePlayer, setInitialNamePlayer] = useState<string>(
    player.name + " " + player.lastName,
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
            {/* <button
              onClick={() => {
                setIsEditingName(true);
              }}
            >
              Modifica nome giocatore
            </button> */}

            {/* <button className="select-name">Seleziona giocatore</button> */}
            <label className="select w-45">
              <select>
                <option disabled selected value="">
                  {player.name + " " + player.lastName}
                </option>
                <option>X</option>
                <option>O</option>
              </select>
            </label>
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
