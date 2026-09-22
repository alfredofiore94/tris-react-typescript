import { useContext, useEffect, useState } from "react";
import { GameBoardContext } from "../../store/game-board-context";
import Modal from "../modal";
import ResetGameConfirmation from "../reset-game-confirmation";
import "./reset-board.css";
import initBoard, { configGame } from "../../config";
import { GameContext } from "../../store/game-context";
interface ResetProps {
  isResetVisible: boolean;
}
export default function ResetGame({ isResetVisible }: ResetProps) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { onUpdateGameBoard } = useContext(GameBoardContext);
  const { game, onUpdateGame } = useContext(GameContext);
  function resetGame(): void {
    onUpdateGameBoard(initBoard());
    onUpdateGame({
      ...game,
      hasWinner: false,
      turn: configGame.player1,
    });
    setIsOpenModal(false);
  }
  useEffect(() => {
    if (isResetVisible) {
      setIsOpenModal(true);
    }
  }, [isResetVisible]);
  return (
    <>
      <Modal isOpen={isOpenModal}>
        {
          <ResetGameConfirmation
            onConfirm={() => resetGame()}
            onCancel={() => {
              setIsOpenModal(false);
            }}
          />
        }
      </Modal>
    </>
  );
}
