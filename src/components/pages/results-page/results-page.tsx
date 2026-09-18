import { useContext } from "react";
import "./results-page.css";
import { GameContext } from "../../../store/game-context";
export default function ResultsPage() {
  const { game } = useContext(GameContext);
  console.log("risultati", game);

  return (
    <>
      <div className="table-container">
        <table className="table table-striped">
          <thead>
            <tr>
              <th scope="col">#</th>
              <th scope="col">Nome</th>
              <th scope="col">Cognome</th>
              <th scope="col">Simbolo</th>
            </tr>
          </thead>
          <tbody>
            {game.gameResults.length > 0 ? (
              game.gameResults.map((res, index) => (
                <tr>
                  <th scope="row">{index}</th>
                  <td>{res.winner.name}</td>
                  <td>{res.winner.lastName}</td>
                  <td>{res.winner.symbol}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4}>
                  <label className="no-result">
                    Nessun risultato disponibile
                  </label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
