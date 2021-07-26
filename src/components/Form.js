import "./Form.css";

export default function Form({ onChange }) {
  return (
    <form className="character-form">
      <input type="text" name="characterName" id="characterName" />
      <select onChange={onChange} className="characters__status">
        <option>All</option>
        <option>Unknown</option>
        <option>Alive</option>
        <option>Dead</option>
      </select>
    </form>
  );
}
