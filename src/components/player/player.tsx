import { useEffect, useState, type ChangeEvent } from "react";
import type { PlayerGame } from "../../models/player-game";
import "./player.css";
import { PlayerConverter } from "../../converters/player-converter";
import { PlayerRepository } from "../../repository/player-repository";
import type { ResponseModel } from "../../dto/response-model";
import type { PlayerDTO } from "../../dto/player-dto";
export function Player(player: PlayerGame) {
  const [initialNamePlayer, setInitialNamePlayer] = useState<string>(
    player.name,
  );

  const [editedNamePlayer, setEditedNamePlayer] =
    useState<string>(initialNamePlayer);
  const [isEditingName, setIsEditingName] = useState<boolean>(false);

  const [playersList, setPlayersList] = useState<PlayerGame[]>();

  const playerConverter: PlayerConverter = new PlayerConverter();
  const playerRepository: PlayerRepository = new PlayerRepository();
  useEffect(() => {
    console.log("Fetch partita");

    /*fetch("https://dummyjson.com/users")
      .then((response) => {
        console.log("JSON response", response);

        return response.json();
      })
      .then((resData) => {
        const users = resData.users;
        const players: PlayerGame[] = playerConverter.toEntities(users);
        setPlayersList(resData);
        console.log("players", players);
      });*/
    playerRepository
      .getEntitiesAsync()
      .then((responseModel: ResponseModel<PlayerDTO[]>) => {
        if (responseModel.metadata?.result) {
          const players: PlayerGame[] = playerConverter.toEntities(
            responseModel.payload!,
          );
          setPlayersList(players);
          console.log("players", players);
          console.log("players list", playersList);
        }
      });
  }, []);

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
            </button>

            <button className="select-name">Seleziona nome</button>
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
