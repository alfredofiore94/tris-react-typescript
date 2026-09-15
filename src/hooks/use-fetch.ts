import { useCallback, useEffect, useState } from "react";
import type { PlayerGame } from "../models/player-game";
import { PlayerConverter } from "../converters/player-converter";
import { PlayerRepository } from "../repository/player-repository";
import { PlayerService } from "../services-impl/player-service";

export function useFetch(fetchFn: Promise<any>) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [fetchedData, setFetchedData] = useState({});

  useEffect(() => {
    console.log("Fetch partita");

    async function getData() {
      try {
        setIsFetching(true);
        //const players: PlayerGame[] = await playerService.getPlayersData();
        const fetch = await fetchFn;
        console.log("fetch data", fetch);

        setFetchedData(fetch);
        setIsFetching(false);
      } catch (error) {
        //setError(error);
        console.log("ERRORE!", error);
      }
    }
    getData();
  }, []);
  return { isFetching, error, fetchedData };
}
