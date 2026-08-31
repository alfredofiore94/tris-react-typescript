import { useState } from "react";
import type { Game } from "../models/game";
import type { PlayerGame } from "../models/player-game";
import { configGame } from "../config";

interface GameBoardProps {
  initialPlayer: PlayerGame;
  onUpdateResults: () => void;
}
const GameBoard: React.FC<GameBoardProps> = ({
  initialPlayer,
  onUpdateResults,
}) => {
  //   const [gameBoard, setGameBoard] = useState<string[][] | null[][]>([
  //     [null, null, null],
  //     [null, null, null],
  //     [null, null, null],
  //   ]);

  //   const [lastsymbol, setLastSymbol] = useState<string>(player.symbol);

  /*Utilizziamo un solo useState per far si che non vi sia un doppio caricamento 
  del componente */
  const [game, setGame] = useState<Game>({
    board: configGame.board,
    lastSymbol: initialPlayer.symbol,
  });

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    symbol: string,
  ) {
    //console.log("ale1", gameBoard);
    // setGameBoard((prevGameBoard) => {
    //   if (prevGameBoard[rowIndex][colIndex] === null) {
    //     prevGameBoard[rowIndex][colIndex] = symbol;
    //   }

    //   console.log(prevGameBoard);

    //   return prevGameBoard;
    // });
    // setLastSymbol((prevSymbol) => (prevSylasmbol === "X" ? "O" : "X"));
    setGame((prevGame) => {
      if (prevGame.board[rowIndex][colIndex] === null) {
        prevGame.board[rowIndex][colIndex] = symbol;
        prevGame.lastSymbol === "X"
          ? (prevGame.lastSymbol = "O")
          : (prevGame.lastSymbol = "X");
        console.log(". ssd", prevGame);
      }
      return { ...prevGame };
    });
    onUpdateResults();
  }

  return (
    <ol id="game-board">
      {game.board.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  //   disabled={playerSymbol !== null}
                  onClick={() => {
                    handleSelectSquare(rowIndex, colIndex, game.lastSymbol!);
                  }}
                >
                  {playerSymbol}
                </button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
};

export default GameBoard;
