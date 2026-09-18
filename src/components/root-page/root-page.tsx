import { Outlet } from "react-router";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { GameContext } from "../../store/game-context";
import type { BoardType, Game } from "../../models/game";
import { useState } from "react";
import initBoard, { initGame } from "../../config";
import { GameBoardContext } from "../../store/game-board-context";
import ResetGame from "../reset-board/reset-board";

function RootPage() {
  const [game, setGame] = useState<Game>(initGame());
  const [gameBoard, setGameBoard] = useState<BoardType>(() => initBoard());
  return (
    <GameContext value={{ game: game, onUpdateGame: setGame }}>
      <GameBoardContext
        value={{ gameBoard: gameBoard, onUpdateGameBoard: setGameBoard }}
      >
        <NavigationBar />
        <main>
          <Outlet />
        </main>
      </GameBoardContext>
    </GameContext>
  );
}
export default RootPage;
