import "./SingleCharacter.css";
import { useParams } from "react-router-dom";

export default function SingleCharacter() {
  const { id } = useParams();
  return (
    <section className="singleCharacter">
      <h2> Character Name </h2>
      <img src="#" alt="SingleCharacter" />
      <p>{`Status: ${id}`} </p>
      <p>Gender: </p>
      <p>Species: </p>
      <p>Type: </p>
    </section>
  );
}
