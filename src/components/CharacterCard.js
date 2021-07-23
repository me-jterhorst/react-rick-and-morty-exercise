import "./CharacterCard.css";

export default function CharacterCard({ name, imageSrc }) {
  return (
    <li className="character-card">
      <img className="chracter-card__img" src={imageSrc} alt="character" />
      <h3 className="character-card__name">{name}</h3>
    </li>
  );
}
