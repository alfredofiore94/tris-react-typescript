interface ResetGameProps {
  onConfirm: () => void;
  onCancel: () => void;
}
export default function ResetGameConfirmation({
  onConfirm,
  onCancel,
}: ResetGameProps) {
  return (
    <div id="reset-confirmation">
      <h2>Si vuole resettare il gioco?</h2>
      <div>
        <button onClick={onCancel} className="button-text">
          No
        </button>
        <button onClick={onConfirm} className="button">
          Yes
        </button>
      </div>
    </div>
  );
}
