export default function AddPlayersPage() {
  return (
    <fieldset className="fieldset m-20  border-base-300 rounded-box w-xs border p-4">
      <label className="label">Nome</label>
      <input
        type="email"
        className="input input-sm"
        placeholder="inserisci nome"
      />

      <label className="label label-sm">Cognome</label>
      <input
        type="password"
        className="input input-sm"
        placeholder="inserisci cognome"
      />
      <label className="label">Età</label>
      <input
        type="email"
        className="input input-sm"
        placeholder="inserisci età"
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
      />

      <button className="btn btn-neutral mt-4">Salva</button>
    </fieldset>
  );
}
