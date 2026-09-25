//tutto cio che si occupa di fare la fetch in un file separato
export async function fetchEvent(url: string) {
  const response = await fetch(url);
  console.log("fetch event", response);

  if (!response.ok) {
    const error = new Error("Errore durante la fetching");
    error.stack = response.statusText;
    throw error;
  }

  return (await response.json()).users;
}
