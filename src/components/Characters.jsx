import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";

const Characters = () => {
  const { id } = useParams();
  console.log(kind);

  const [character, setCharacter] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const apiCall = async () => {
    try {
      const response = await axios.get(`http://localhost:5173/${id}`);
      setCharacter(response.data);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    apiCall();
  }, []);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Uh oh - Something went wrong</p>;
  console.log(character);

  return (
    <>
      <h1>Character {id}</h1>

      <p>{character.name}</p>
      <p>{character.kind}</p>
    </>
  );
};

export default Characters;
