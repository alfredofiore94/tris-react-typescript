import { useState } from "react";
import type { Player } from "../models/player";

export default function GameBoard(player: Player) {
  const initialGameBoard: string[][] | null[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  const [gameBoard, setGameBoard] = useState<string[][] | null[][]>(
    initialGameBoard,
  );

  const [lastsymbol, setLastSymbol] = useState<string>(player.symbol);

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    symbol: string,
  ) {
    setGameBoard((prevGameBoard) => {
      prevGameBoard[rowIndex][colIndex] = symbol;
      setLastSymbol((prevSymbol) => {
        return lastsymbol === "X" ? (prevSymbol = "O") : (prevSymbol = "X");
      });
      console.log(prevGameBoard);

      return prevGameBoard;
    });
  }

  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
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
