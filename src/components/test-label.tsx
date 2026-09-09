import { useState, useEffect } from "react";

export default function TestLabel() {
  const [person, setPerson] = useState("Alice");
  const [bio, setBio] = useState<string>("");
  useEffect(() => {
    async function startFetching() {
      setBio("");
      const result = await fetchBio(person);
      if (!ignore) {
        setBio(result);
      }
    }

    let ignore = false;
    startFetching();
    return () => {
      ignore = true;
    };
  }, [person]);

  return (
    <>
      <select
        value={person}
        onChange={(e) => {
          setPerson(e.target.value);
        }}
      >
        <option value="Alice">Alice</option>
        <option value="Bob">Bob</option>
        <option value="Taylor">Taylor</option>
      </select>
      <hr />
      <p>
        <i>{bio ?? "Loading..."}</i>
      </p>
    </>
  );
}

export async function fetchBio(person: string) {
  await new Promise((resolve) => setTimeout(resolve, 5000));

  if (person === "Alice") {
    return "Questa è la biografia di Alice.";
  }
  if (person === "Bob") {
    return "Questa è la biografia di Bob.";
  }
  if (person === "Taylor") {
    return "Questa è la biografia di Taylor.";
  }

  return "Biografia non trovata.";
}
