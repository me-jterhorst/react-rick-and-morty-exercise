import "./Charactes.css";
import Form from "./Form";

export default function Characters() {
  return (
    <section className="characters">
      <Form />
      <ul className="character-list">
        <li className="character-card">
          <img src="#" alt="character" />
          <h3>Name</h3>
        </li>
      </ul>

      <button>More</button>
    </section>
  );
}
