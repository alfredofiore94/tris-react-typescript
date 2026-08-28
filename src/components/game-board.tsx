import { useState } from "react";
import type { Player } from "../models/player";

export default function GameBoard(player: Player) {
  //   const [gameBoard, setGameBoard] = useState<string[][] | null[][]>([
  //     [null, null, null],
  //     [null, null, null],
  //     [null, null, null],
  //   ]);

  //   const [lastsymbol, setLastSymbol] = useState<string>(player.symbol);

  /*Utilizziamo un solo useState per far si che non vi sia un doppio caricamento 
  del componente */
  const [game, setGame] = useState<{
    board: string[][] | null[][];
    lastsymbol: string;
  }>({
    board: [
      [null, null, null],
      [null, null, null],
      [null, null, null],
    ],
    lastsymbol: player.symbol,
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
        prevGame.lastsymbol === "X" ? "O" : "X";
      }
      return { ...prevGame };
    });
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
                    handleSelectSquare(rowIndex, colIndex, game.lastsymbol);
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
