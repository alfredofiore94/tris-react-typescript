export default function GameBoard() {
  const initialGameBoard: string[][] | null[][] = [
    [null, null, null],
    [null, null, null],
    [null, null, null],
  ];

  return (
    <ol id="game-board">
      {initialGameBoard.map((row, rowIndex) => (
        <li key={rowIndex}>
          <ol>
            {row.map((playerSymbol, colIndex) => (
              <li key={colIndex}>
                <button>{playerSymbol}</button>
              </li>
            ))}
          </ol>
        </li>
      ))}
    </ol>
  );
}
