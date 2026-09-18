import { useContext, useState } from "react";
import { GameBoardContext } from "../../store/game-board-context";
import Modal from "../modal";
import ResetGameConfirmation from "../reset-game-confirmation";
import "./reset-board.css";
import initBoard from "../../config";
/*interface GameBoardProps {
  onReset: () => void;
}*/
export default function ResetGame(/*{ onReset }: GameBoardProps*/) {
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const { gameBoard, onUpdateGameBoard } = useContext(GameBoardContext);

  function resetGame(): void {
    onUpdateGameBoard(initBoard());
    /*onUpdateGame({
        ...game,
        hasWinner: false,
        turn: configGame.player1,
      });*/
    setIsOpenModal(false);
  }

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
