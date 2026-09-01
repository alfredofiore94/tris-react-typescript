import "./App.css";
import { Player } from "./components/player";
import GameBoard from "./components/game-board";
import { useState } from "react";
import type { Game } from "./models/game";
import { configGame } from "./config";

function App() {
  //const [resuts, setResults] = useState<GameResults[]>([]);

  const [game, setGame] = useState<Game>({
    board: configGame.board,
    lastSymbol: configGame.player1.symbol,
    hasWinner: false,
    gameResults: [],
  });
  console.log("stato del gioco", game);
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
