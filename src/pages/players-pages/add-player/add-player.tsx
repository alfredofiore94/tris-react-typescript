import { useState, type ChangeEvent } from "react";
import type { PlayerGame } from "../../../models/player-game";

export default function AddPlayersPage() {
  const [enterValues, setEnterValues] = useState<PlayerGame>({
    name: "",
    lastName: "",
    age: 0,
    email: "",
    symbol: "",
  });

  function handleInputChange(
    identifier: string,
    event: ChangeEvent<HTMLInputElement>,
  ) {
    setEnterValues((prev) => ({
      ...prev,
      [identifier]: event.target.value,
    }));
  }
  return (
    <form>
      <fieldset className="fieldset m-20  border-base-300 rounded-box w-xs border p-4">
        <label className="label">Nome</label>
        <input
          type="email"
          className="input input-sm"
          placeholder="inserisci nome"
          onChange={(event) => handleInputChange("name", event)}
          value={enterValues.name}
        />

        <label className="label label-sm">Cognome</label>
        <input
          type="password"
          className="input input-sm"
          placeholder="inserisci cognome"
          onChange={(event) => handleInputChange("lastname", event)}
          value={enterValues.lastName}
        />
        <label className="label">Età</label>
        <input
          type="email"
          className="input input-sm"
          placeholder="inserisci età"
          onChange={(event) => handleInputChange("age", event)}
          value={enterValues.age}
        />

        <label className="label">Simbolo gioco</label>
        <label className="select">
          <select>
            <option>X</option>
            <option>O</option>
          </select>
        </label>
        <label className="label">Email</label>
        <input
          type="email"
          className="input input-sm"
          placeholder="inserisci Email"
          onChange={(event) => handleInputChange("email", event)}
          value={enterValues.email}
        />

        <button className="btn btn-neutral mt-4">Salva</button>
      </fieldset>
    </form>
  );
}
