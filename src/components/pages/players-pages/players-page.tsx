import { useNavigate } from "react-router";

export default function PlayersPage() {
  const navigate = useNavigate();

  function navigateHandler(path: string) {
    navigate(path);
  }

  return (
    <button className="btn  mt-4" onClick={() => navigateHandler("new-player")}>
      Nuovo giocatore
    </button>
  );
}
