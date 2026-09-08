import "./reset-board.css";
interface GameBoardProps {
  onReset: () => void;
}
export default function ResetGame({ onReset }: GameBoardProps) {
  return (
    <>
      <li>
        <span className="reset-game">
          <button className="reset-button" onClick={onReset}>
            Resetta Gioco
          </button>
        </span>
      </li>
    </>
  );
}
