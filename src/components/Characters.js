import "./Charactes.css";

export default function Characters() {
  return (
    <section className="characters">
      <form>
        <input type="text" name="characterName" id="characterName" />
        <selection className="characters__status">
          <option>All</option>
          <option>Unknown</option>
          <option>Alive</option>
          <option>Dead</option>
        </selection>
      </form>
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
