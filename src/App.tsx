import { useState } from "react";
import heroImg from "./assets/hero.png";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import "./App.css";
import { Player } from "./components/player";

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Giocatore 1" symbol="X"></Player>
          <Player name="Giocatore 2" symbol="O"></Player>
        </ol>
        game board
      </div>
    </main>
  );
}

export default App;
