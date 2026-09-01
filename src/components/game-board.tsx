import { useState } from "react";
import type { PlayerGame } from "../models/player-game";
import { configGame } from "../config";
import { WINNING_COMBINATIONS } from "../utils/winning-combinations";
import type { Game, GameResult } from "../models/game";
interface GameBoardProps {
  initialPlayer: PlayerGame;
  game: Game;
  onUpdateGame: (game: Game) => void;
}
const GameBoard: React.FC<GameBoardProps> = ({
  //initialPlayer,
  game,
  onUpdateGame,
}) => {
  //   const [gameBoard, setGameBoard] = useState<string[][] | null[][]>([
  //     [null, null, null],
  //     [null, null, null],
  //     [null, null, null],
  //   ]);

  //   const [lastsymbol, setLastSymbol] = useState<string>(player.symbol);

  /*Utilizziamo un solo useState per far si che non vi sia un doppio caricamento 
  del componente */

  /*if (game.hasWinner) {
    const winner =
      configGame.player1.symbol === game.lastSymbol
        ? configGame.player1
        : configGame.player2;
    const gameResult: GameResults = { board: game.board, winner: winner };
    onUpdateResults(game);
  }*/

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    symbol: string,
  ) {
    const newGame = { ...game };
    if (newGame.board[rowIndex][colIndex] === null) {
      newGame.board[rowIndex][colIndex] = symbol;
      newGame.lastSymbol === "X"
        ? (newGame.lastSymbol = "O")
        : (newGame.lastSymbol = "X");
      console.log(". ssd", newGame);
    }
    for (const combination of WINNING_COMBINATIONS) {
      const firtsSquareSymbol =
        newGame.board[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        newGame.board[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        newGame.board[combination[2].row][combination[2].column];

      if (
        firtsSquareSymbol &&
        firtsSquareSymbol === secondSquareSymbol &&
        firtsSquareSymbol === thirdSquareSymbol
      ) {
        newGame.hasWinner = true;
        const winner =
          configGame.player1.symbol === newGame.lastSymbol
            ? configGame.player1
            : configGame.player2;
        newGame.gameResults.push({
          board: newGame.board,
          winner: winner,
        });
        console.log("VITTORIA!");
      }
    }

    onUpdateGame(newGame); //onUpdateGame richiama la funzione setState del padre
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
