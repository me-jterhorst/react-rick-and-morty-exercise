import "./CharacterCard.css";
import image from "../images/logo.png";

export default function CharacterCard() {
  return (
    <li className="character-card">
      <img className="chracter-card__img" src={image} alt="character" />
      <h3 className="character-card__name">Name</h3>
    </li>
  );
}
