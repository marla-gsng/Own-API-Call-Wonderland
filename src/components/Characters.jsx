import { useParams } from "react-router-dom";

const Character = () => {
  const { id } = useParams();
  console.log(id);

  axios.get(
    `https://express-api-creation-backend.vercel.app/api/wonderland/${id}`
  );
  return (
    <>
      <h1>Character {id}</h1>
    </>
  );
};
