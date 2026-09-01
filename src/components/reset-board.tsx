import { useState } from "react";
import { configGame } from "../config";
import type { Game } from "../models/game";
import type { PlayerGame } from "../models/player-game";

interface GameBoardProps {
  onReset: () => void;
}

export default function ResetGame({ onReset }: GameBoardProps) {
  const [initialPlayer, setInitialPlayer] = useState<PlayerGame>();

  return (
    <>
      <li>
        <span>
          <button className="reset-button" onClick={onReset}>
            Resetta Gioco
          </button>
        </span>
      </li>
    </>
  );
}
