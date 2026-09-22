import { Outlet } from "react-router";
import { NavigationBar } from "../navigation-bar/navigation-bar";
import { GameContext } from "../../store/game-context";
import type { BoardType, Game } from "../../models/game";
import { useState } from "react";
import initBoard, { initGame } from "../../config";
import { GameBoardContext } from "../../store/game-board-context";
import ResetGame from "../../pages/reset-board/reset-board";

function RootPage() {
  const [game, setGame] = useState<Game>(initGame());
  const [gameBoard, setGameBoard] = useState<BoardType>(() => initBoard());

  function handleUpdateGame(newGame: Game) {
    setGame(newGame);
  }

  function handleUpdateGameBoard(newGameBoard: BoardType) {
    setGameBoard(newGameBoard);
  }
  return (
    <>
      <NavigationBar />
      <main>
        <GameContext value={{ game: game, onUpdateGame: handleUpdateGame }}>
          <GameBoardContext
            value={{
              gameBoard: gameBoard,
              onUpdateGameBoard: handleUpdateGameBoard,
            }}
          >
            <Outlet />
          </GameBoardContext>
        </GameContext>
      </main>
    </>
  );
}
export default RootPage;
