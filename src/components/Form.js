import "./Form.css";

export default function Form() {
  return (
    <form className="character-form">
      <input type="text" name="characterName" id="characterName" />
      <select className="characters__status">
        <option>All</option>
        <option>Unknown</option>
        <option>Alive</option>
        <option>Dead</option>
      </select>
    </form>
  );
}
