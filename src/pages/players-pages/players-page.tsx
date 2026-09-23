import { useNavigate } from "react-router";
import { PlayersContext } from "../../store/players-context";
import { useContext } from "react";

export default function PlayersPage() {
  const navigate = useNavigate();

  function navigateHandler(path: string) {
    navigate(path);
  }

  const { players } = useContext(PlayersContext);

  return (
    <>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100 m-15">
        <table className="table ">
          <thead>
            <tr className="text-center">
              <th scope="col">ID</th>
              <th scope="col">Nome</th>
              <th scope="col">Cognome</th>
              <th scope="col">Età</th>
              <th scope="col">Email</th>
              <th scope="col">Simbolo</th>
            </tr>
          </thead>
          <tbody>
            {players.length > 0 ? (
              players.map((res, index) => (
                <tr key={index} className="text-center">
                  <th scope="row">{index}</th>
                  <td>{res.name}</td>
                  <td>{res.lastName}</td>
                  <td>{res.age}</td>
                  <td>{res.email}</td>
                  <td>{res.symbol}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={4} className="text-center">
                  <label className="no-result">
                    Nessun risultato disponibile
                  </label>
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>

      <button
        className="btn  mt-4"
        onClick={() => navigateHandler("new-player")}
      >
        Nuovo giocatore
      </button>
    </>
  );
}
