import { useState } from "react";
import type { Player } from "../models/player";

export default function GameBoard(player: Player) {
  const [gameBoard, setGameBoard] = useState<string[][] | null[][]>([
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ]);

  const [lastsymbol, setLastSymbol] = useState<string>(player.symbol);

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    symbol: string,
  ) {
    console.log("ale1", gameBoard);
    setGameBoard((prevGameBoard) => {
      if (prevGameBoard[rowIndex][colIndex] === null) {
        prevGameBoard[rowIndex][colIndex] = symbol;
      }

      console.log(prevGameBoard);

      return prevGameBoard;
    });
    setLastSymbol((prevSymbol) => (prevSymbol === "X" ? "O" : "X"));
    console.log("ale2", gameBoard);
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null}
                  onClick={() => {
                    handleSelectSquare(rowIndex, colIndex, lastsymbol);
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
}
