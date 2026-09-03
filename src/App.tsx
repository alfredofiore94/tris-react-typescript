import "./App.css";
import { Player } from "./components/player";
import GameBoard from "./components/game-board";
import { useState } from "react";
import type { BoardType, Game } from "./models/game";
import ResetGame from "./components/reset-board";
import initBoard, { configGame, initGame } from "./config";
import { WINNING_COMBINATIONS } from "./utils/winning-combinations";

/*
const initialState = {
  board: configGame.board.map((row) => {
    return [...row];
  }),
  turn: configGame.player1.symbol,
  hasWinner: false,
  gameResults: [],
};*/

function App() {
  //const [resuts, setResults] = useState<GameResults[]>([]);

  const [game, setGame] = useState<Game>(initGame());

  const [gameBoard, setGameBoard] = useState<BoardType>(() => initBoard());

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    symbol: string,
  ) {
    const newGame = { ...game };
    const newGameBoard: BoardType = [...gameBoard.map((row) => [...row])];
    console.log("gameboard", gameBoard);
    console.log("new game board", newGameBoard);

    if (newGameBoard[rowIndex][colIndex] === null) {
      newGameBoard[rowIndex][colIndex] = symbol;
      newGame.turn === configGame.player1
        ? (newGame.turn = configGame.player2)
        : (newGame.turn = configGame.player1);
      //console.log(". ssd", newGame);
      checkWinning(newGame, newGameBoard);
    }
    console.log("click");
    setGameBoard(newGameBoard); //onUpdateGame richiama la funzione setState del padre
    setGame(newGame);
  }

  function checkWinning(game: Game, gameBoard: BoardType) {
    for (const combination of WINNING_COMBINATIONS) {
      const firtsSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firtsSquareSymbol &&
        firtsSquareSymbol === secondSquareSymbol &&
        firtsSquareSymbol === thirdSquareSymbol
      ) {
        game.hasWinner = true;
        const winner =
          game.turn === configGame.player1
            ? configGame.player2
            : configGame.player1;
        game.gameResults.push({
          board: gameBoard,
          winner: winner,
        });
        //console.log("VITTORIA!", winner);
      }
    }
  }

  console.log("game board", gameBoard);
  console.log("game ", game);

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
                setGameBoard(initBoard());
                setGame((oldGame) => ({
                  ...oldGame,
                  hasWinner: false,
                  turn: configGame.player1,
                }));
              }}
            />
          </ol>
        )}

        <GameBoard
          //onUpdateGame={setGame}
          onSelectSquare={handleSelectSquare}
          game={game}
          gameBoard={gameBoard}
        />
      </div>
    </main>
  );
}

export default App;
