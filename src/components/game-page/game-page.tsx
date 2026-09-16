import { useState } from "react";
import initBoard, { configGame, initGame } from "../../config";
import { useFetch } from "../../hooks/use-fetch";
import type { Game, BoardType } from "../../models/game";
import { PlayerService } from "../../services-impl/player-service";
import { WINNING_COMBINATIONS } from "../../utils/winning-combinations";
import GameBoard from "../game-board";
import Modal from "../modal";
import { Player } from "../player/player";
import ResetGame from "../reset-board/reset-board";
import ResetGameConfirmation from "../reset-game-confirmation";

export function GamePage() {
  //const [resuts, setResults] = useState<GameResults[]>([]);

  const [game, setGame] = useState<Game>(initGame());

  const [gameBoard, setGameBoard] = useState<BoardType>(() => initBoard());
  const [isOpenModal, setIsOpenModal] = useState<boolean>(false);

  const [playersList, setPlayersList] = useState<{}>();
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState();
  //const playerConverter: PlayerConverter = new PlayerConverter();
  //const playerRepository: PlayerRepository = new PlayerRepository();

  const playerService: PlayerService = new PlayerService();
  //playerConverter,
  //playerRepository,

  const custom = useFetch(playerService.getPlayersData());
  console.log("custom ", custom);

  /*useEffect(() => {
    console.log("Fetch partita");

    async function getData() {
      try {
        const players: PlayerGame[] = await playerService.getPlayersData();
        console.log("playrs", players);

        setPlayersList(players);
      } catch (error) {}
    }
    getData();
  }, []);*/

  function handleSelectSquare(
    rowIndex: number,
    colIndex: number,
    //symbol: string,
  ) {
    const newGame = { ...game };
    const newGameBoard: BoardType = gameBoard.map((row) => [...row]);
    //console.log("gameboard", gameBoard);
    //console.log("new game board", newGameBoard);

    if (newGameBoard[rowIndex][colIndex] === null) {
      newGameBoard[rowIndex][colIndex] = newGame.turn.symbol;
      newGame.turn === configGame.player1
        ? (newGame.turn = configGame.player2)
        : (newGame.turn = configGame.player1);
      //console.log(". ssd", newGame);
      checkWinning(newGame, newGameBoard);
    }
    //console.log("click");
    setGameBoard(newGameBoard); //onUpdateGame richiama la funzione setState del padre
    setGame(newGame);
  }

  function checkWinning(game: Game, gameBoard: BoardType) {
    for (const combination of WINNING_COMBINATIONS) {
      const firtsSquareSymbol =
        gameBoard[combination[0].row][combination[0].column];
      const secondSquareSymbol =
        gameBoard[combination[1].row][combination[1].column];
      const thirdSquareSymbol =
        gameBoard[combination[2].row][combination[2].column];

      if (
        firtsSquareSymbol &&
        firtsSquareSymbol === secondSquareSymbol &&
        firtsSquareSymbol === thirdSquareSymbol
      ) {
        game.hasWinner = true;
        const winner =
          game.turn === configGame.player1
            ? configGame.player2
            : configGame.player1;
        game.gameResults.push({
          board: gameBoard,
          winner: winner,
        });
        //console.log("VITTORIA!", winner);
      }
    }
  }

  //console.log("game board", gameBoard);
  //console.log("game ", game);

  function resetGame(): void {
    setGameBoard(initBoard());
    setGame((oldGame) => ({
      ...oldGame,
      hasWinner: false,
      turn: configGame.player1,
    }));
    setIsOpenModal(false);
  }

  return (
    <>
      <div id="game-container">
        <ol id="players">
          <Player {...configGame.player1}></Player>
          <Player
            name={configGame.player2.name}
            symbol={configGame.player2.symbol}
            lastName={""}
            age={0}
          ></Player>
        </ol>

        {game.hasWinner && (
          <ol>
            <ResetGame onReset={() => setIsOpenModal(true)} />
          </ol>
        )}

        <GameBoard
          //onUpdateGame={setGame}
          onSelectSquare={handleSelectSquare}
          game={game}
          gameBoard={gameBoard}
        />
      </div>
      {/* <div>
        <TestLabel></TestLabel>
      </div> */}
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
