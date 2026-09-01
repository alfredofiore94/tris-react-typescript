import "./App.css";
import { Player } from "./components/player";
import GameBoard from "./components/game-board";
import { useState } from "react";
import type { Game } from "./models/game";
import { configGame } from "./config";
import ResetGame from "./components/reset-board";

const initialState = {
  board: configGame.board.map((row) => {
    return [...row];
  }),
  turn: configGame.player1.symbol,
  hasWinner: false,
  gameResults: [],
};

function App() {
  //const [resuts, setResults] = useState<GameResults[]>([]);

  const [game, setGame] = useState<Game>(initialState);
  //console.log("stato del gioco", game);
  //console.log("stato della board", game.board);

  /*
  function updateResults(gameUpdated: Game) {
    //console.log("partita finita", gameResult);

    /*setResults((lastResults) => {
      //lastResults.concat(gameResult);
      console.log("array risultati", lastResults);

      return { ...lastResults };
    });*/

  //console.log("risultati", game.gameResults);
  //setGame(gameUpdated);
  //  }
  console.log("configGame", configGame);
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player {...configGame.player1}></Player>
          <Player
            name={configGame.player2.name}
            symbol={configGame.player2.symbol}
          ></Player>
        </ol>

        {game.hasWinner && (
          <ol>
            <ResetGame
              onReset={() => {
                setGame((prevGame) => ({
                  ...prevGame,
                  board: configGame.board,
                  lastSymbol: configGame.player1.symbol,
                  hasWinner: false,
                }));
              }}
            />
          </ol>
        )}

        <GameBoard
          initialPlayer={configGame.player1}
          onUpdateGame={setGame}
          game={game}
        />
      </div>
    </main>
  );
}

export default App;
