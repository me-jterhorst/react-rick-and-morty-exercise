import "./Charactes.css";
import Form from "./Form";
import CharacterCard from "./CharacterCard";
import { Link } from "react-router-dom";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="character-list">
        <Link to="/characters/singleCharacter">
          <CharacterCard />
        </Link>
      </ul>
      <button>More</button>
    </section>
  );
}
