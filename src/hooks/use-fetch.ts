import { useEffect, useState } from "react";

export function useFetch<T>(fetchFn: () => Promise<any>) {
  const [isFetching, setIsFetching] = useState<boolean>(false);
  const [error, setError] = useState("");
  const [fetchedData, setFetchedData] = useState<T>();

  useEffect(() => {
    let ignore = false;
    async function getData() {
      try {
        setIsFetching(true);
        //const players: PlayerGame[] = await playerService.getPlayersData();
        const fetch = await fetchFn();

        setFetchedData(fetch);
        setIsFetching(false);
      } catch (error) {
        //setError(error);
        console.log("ERRORE!", error);
      }
    }
    getData();

    return () => {
      ignore = true;
    };
  }, []);
  return { isFetching, error, fetchedData };
}
