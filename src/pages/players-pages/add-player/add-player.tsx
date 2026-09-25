import { useContext, useState, type ChangeEvent } from "react";
import type { PlayerGame } from "../../../models/player-game";
import "./add-player.css";
import { useNavigate } from "react-router";
import { PlayersContext } from "../../../store/players-context";
export default function AddPlayersPage() {
  const [enterValues, setEnterValues] = useState<PlayerGame>({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    symbol: "",
  });

  const navigate = useNavigate();
  const { onAddPlayer } = useContext(PlayersContext);

  function handleInputChange(
    identifier: string,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setEnterValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }

  function handleSubmitPlayers(event: React.SubmitEvent<HTMLFormElement>) {
    //evita il comportamento di default del browser
    event.preventDefault();
    onAddPlayer(enterValues);
    /*

    if (validationError) {
      // 3a. Se ci sono errori, aggiorna lo stato per mostrarli
      setError(validationError);
    } else {
      // 3b. Se è valido, pulisce gli errori e procede con l'invio
      setError(null);
      alert('Form inviato con successo: ' + text);
    }
*/
    navigate("/players");
  }
  return (
    <form onSubmit={(event) => handleSubmitPlayers(event)}>
      <fieldset className="form-user fieldset m-20  border-base-300 rounded-box w-xs border p-4">
        <label className="label">Nome</label>
        <input
          className="input input-sm"
          placeholder="inserisci nome"
          onChange={(event) => handleInputChange("name", event)}
          value={enterValues.name}
          required
        />

        <label className="label label-sm">Cognome</label>
        <input
          className="input input-sm"
          placeholder="inserisci cognome"
          onChange={(event) => handleInputChange("lastName", event)}
          value={enterValues.lastName}
          required
        />
        <label className="label">Età</label>
        <input
          type="number"
          className="input input-sm"
          placeholder="inserisci età"
          onChange={(event) => handleInputChange("age", event)}
          value={enterValues.age}
          required
        />

        {/* <label className="label">Simbolo gioco</label>
        <label className="select">
          <select>
            <option disabled selected value="">
              Seleziona simbolo:
            </option>
            <option>X</option>
            <option>O</option>
          </select>
        </label> */}
        <label className="label">Email</label>
        <input
          type="email"
          className="input input-sm"
          placeholder="inserisci Email"
          onChange={(event) => handleInputChange("email", event)}
          value={enterValues.email}
          required
        />

        <button className="btn btn-neutral mt-4">Salva</button>
      </fieldset>
    </form>
  );
}
