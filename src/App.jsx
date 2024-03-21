import "./App.css";
import axios from "axios";
import { useEffect, useState } from "react";

function App() {
  const [characters, setCharacters] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [name, setName] = useState("");
  const [kind, setKind] = useState("");

  const apiCall = async () => {
    try {
      const response = await axios.get(
        "https://express-api-creation.vercel.app/"
      );
      setCharacters(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  const postCharacter = async (e) => {
    e.preventDefault();
    try {
      const newCharacter = await axios.post(
        "https://express-api-creation.vercel.app/",
        {
          name: name,
          kind: kind,
        }
      );
      console.log(newCharacter);
    } catch (err) {
      setError(err);
    } finally {
      apiCall();
      setName("");
      setKind("");
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  console.log(name, kind);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Uh oh - Something went wrong</p>;

  return (
    <>
      <h2>Characters in 'Alice in Wonderland'</h2>

      {characters.map((character) => {
        return (
          <>
            <div className="characterStyle" key={character.id}>
              <p>This is {character.name},</p>
              <p>They are a {character.kind}.</p>
            </div>
          </>
        );
      })}
      <div>
        <h4>Add the other characters:</h4>
        <form onSubmit={postCharacter}>
          <input
            type="text"
            placeholder="Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Kind"
            value={kind}
            onChange={(e) => setKind(e.target.value)}
          />
          <button type="submit">Add Character</button>
        </form>
      </div>
    </>
  );
}

export default App;
