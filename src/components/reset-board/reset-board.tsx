import { useState } from "react";
import Modal from "../modal";
import ResetGameConfirmation from "../reset-game-confirmation";
import "./reset-board.css";
interface GameBoardProps {
  onReset: () => void;
}
export default function ResetGame({ onReset }: GameBoardProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  return (
    <>
      <li>
        <span className="reset-game">
          <button
            className="reset-button"
            onClick={() => {
              setIsOpenModal(true);
              //onReset;
            }}
          >
            Resetta Gioco
          </button>
        </span>
      </li>
      <Modal isOpen={isOpenModal}>
        {
          <ResetGameConfirmation
            onConfirm={onReset}
            onCancel={() => {
              setIsOpenModal(false);
            }}
          />
        }
      </Modal>
    </>
  );
}
