import { Outlet } from "react-router";
import { NavigationBar } from "../../components/navigation-bar/navigation-bar";
import { GameContext } from "../../store/game-context";
import type { BoardType, Game } from "../../models/game";
import { useCallback, useEffect, useState } from "react";
import initBoard, { initGame } from "../../config";
import { GameBoardContext } from "../../store/game-board-context";
import type { PlayerGame } from "../../models/player-game";
import { PlayerService } from "../../services-impl/player-service";
import { useFetch } from "../../hooks/use-fetch";
import { PlayersContext } from "../../store/players-context";

function RootPage() {
  const [game, setGame] = useState<Game>(initGame());
  const [gameBoard, setGameBoard] = useState<BoardType>(() => initBoard());
  const [players, setPlayers] = useState<PlayerGame[]>([]);

  //const [isFetching, setIsFetching] = useState<boolean>(false);
  // const [error, setError] = useState<string>();
  //const [fetchedData, setFetchedData] = useState<PlayerGame[]>([]);

  const playerService: PlayerService = new PlayerService();

  /*const {
    error,
    isFetching,
    fetchedData: players,
    getData,
  } = useFetch(playerService.getPlayersData);
  console.log("players", players);*/

  // useEffect(() => {
  //   let ignore = false;
  //   async function getData() {
  //     try {
  //       setIsFetching(true);
  //       const fetch = await playerService.getPlayersData();

  //       setPlayers(fetch);
  //       console.log("fetch data", fetch);

  //       setIsFetching(false);
  //     } catch (error) {
  //       setError("Errore");
  //       console.log("ERRORE!", error);
  //     }
  //   }
  //   getData();

  //   return () => {
  //     ignore = true;
  //   };
  // }, []);

  /* useEffect(() => {
    getData();
    console.log("players", players);
  }, []);*/

  function handleUpdateGame(newGame: Game) {
    setGame(newGame);
  }

  function handleUpdateGameBoard(newGameBoard: BoardType) {
    setGameBoard(newGameBoard);
  }

  function handleUpdatePlayers(newListPlayers: PlayerGame[]) {
    setPlayers(newListPlayers);
  }
  function handleAddPlayer(newPlayer: PlayerGame) {
    //const newplayers: PlayerGame[] = { ...players };
    //newplayers.push(newPlayer);
    setPlayers((oldPlayers) => {
      const newPlayers = { ...oldPlayers };
      newPlayers.push(newPlayer);
      return newPlayers;
    });
  }

  //if (isFetching) return <p>Caricamento giocatori in corso...</p>;

  return (
    <>
      <NavigationBar />
      {/* {error && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>Errore durante il caricamento dei dati dei giocatori!</span>
        </div>
      )} */}
      <main>
        <GameContext value={{ game: game, onUpdateGame: handleUpdateGame }}>
          <GameBoardContext
            value={{
              gameBoard: gameBoard,
              onUpdateGameBoard: handleUpdateGameBoard,
            }}
          >
            <PlayersContext
              value={{
                players: players!,
                onUpdatePlayers: handleUpdatePlayers,
                onAddPlayer: handleAddPlayer,
              }}
            >
              <Outlet />
            </PlayersContext>
          </GameBoardContext>
        </GameContext>
      </main>
    </>
  );
}
export default RootPage;
