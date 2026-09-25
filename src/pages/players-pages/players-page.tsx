import { useNavigate } from "react-router";
import { PlayersContext } from "../../store/players-context";
import { useContext, useEffect } from "react";
import { useQuery, useQueryClient } from "@tanstack/react-query";
import { fetchEvent } from "../../utils/http";
import type { PlayerGame } from "../../models/player-game";
import { PlayerService } from "../../services-impl/player-service";

export default function PlayersPage() {
  const navigate = useNavigate();
  const playerService: PlayerService = new PlayerService();
  const { isPending, isFetched, data, isError, error } = useQuery<PlayerGame[]>(
    {
      queryKey: ["players"], //chiave con la quale salviamo i dati nella cache
      queryFn: () => playerService.getPlayersData(), //fetchEvent(GET_USERS_URL),

      staleTime: 5000, //il tempo trascorso il quale i dati vengono considerati obsoleti.
      gcTime: 10000, //garbage collectore , cioè dopo quanto tempo la memoria deve essere svuotata
    },
  );
  function navigateHandler(path: string) {
    navigate(path);
  }

  const { players, onUpdatePlayers } = useContext(PlayersContext);

  useEffect(() => {
    console.log("use eff players");

    if (isFetched && data) {
      onUpdatePlayers(data);
      console.log("update player", data);
    }
  }, [isFetched]);

  return (
    <>
      {isError && (
        <div role="alert" className="alert alert-error alert-soft">
          <span>
            Errore {error.message} durante il caricamento dei dati dei
            giocatori!
          </span>
        </div>
      )}
      <button
        className="btn  mt-4"
        onClick={() => navigateHandler("new-player")}
      >
        Nuovo giocatore
      </button>
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
            {players && players.length > 0 ? (
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
                  {isPending ? (
                    <label className="no-result">
                      Caricamento giocatori in corso ...
                    </label>
                  ) : (
                    <label className="no-result">
                      Nessun risultato disponibile
                    </label>
                  )}
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </>
  );
}
