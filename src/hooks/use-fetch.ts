import { useCallback, useEffect, useState } from "react";

export function useFetch<T>(fetchFn: () => Promise<T>) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [fetchedData, setFetchedData] = useState<T>();

  const getData = useCallback(async () => {
    try {
      setIsFetching(true);
      //const players: PlayerGame[] = await playerService.getPlayersData();
      const response = await fetchFn();

      setFetchedData(response);
      setIsFetching(false);
    } catch (error) {
      //setError(error);
      console.log("ERRORE!", error);
    }
  }, []);

  return { isFetching, error, fetchedData, getData };
}
