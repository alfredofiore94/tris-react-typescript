import "./App.css";
import { Player } from "./components/player";
import GameBoard from "./components/game-board";
import { useState } from "react";
import type { Game, GameResults } from "./models/game";
import type { PlayerGame } from "./models/player-game";
import { configGame } from "./config";

function App() {
  const [resuts, setResults] = useState<GameResults[]>([]);

  function updateResults() {
    setResults;
  }

  const giocatore1: PlayerGame = {
    name: "Giocatore 1",
    symbol: "X",
  };

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
          onUpdateResults={updateResults}
        />
      </div>
    </main>
  );
}

export default App;
