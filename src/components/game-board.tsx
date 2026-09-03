import { useState } from "react";
import type { PlayerGame } from "../models/player-game";
import { configGame } from "../config";
import { WINNING_COMBINATIONS } from "../utils/winning-combinations";
import type { BoardType, Game, GameResult } from "../models/game";
interface GameBoardProps {
  //initialPlayer: PlayerGame;
  gameBoard: BoardType;
  game: Game;
  onSelectSquare: (rowIndex: number, colIndex: number) => void;
}
const GameBoard: React.FC<GameBoardProps> = ({
  //initialPlayer,
  gameBoard,
  game,
  onSelectSquare,
}) => {
  return (
    <ol id="game-board">
      {gameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button
                  disabled={playerSymbol !== null || game.hasWinner}
                  onClick={() => {
                    onSelectSquare(rowIndex, colIndex);
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
