import "./Charactes.css";
import Form from "../components/Form";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);
  const [status, setStatus] = useState("all");

  useEffect(() => {
    if (allCharacters.length === 0 || page >= 1) {
      const url = `https://rickandmortyapi.com/api/character/?page=${
        page >= 1 ? page : 1
      }`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => setAllCharacters(data.results));
    }
  }, [allCharacters, status, page]);

  function loadMore(event) {
    setPage(page + 1);
  }
  function goBack(event) {
    let counter = page;
    counter = counter - 1;
    if (counter < 1) {
      counter = 1;
    }
    setPage(counter);
  }
  function handleSelection(event) {
    const selectionValue = event.target.value.toLowerCase();
    setStatus(selectionValue);
  }
  return (
    <section className="characters">
      <Form onChange={handleSelection} />
      <ul className="character-list">
        {allCharacters
          .filter((character) => {
            if (status === "all") {
              return character;
            }
            return character.status.toLowerCase() === status;
          })
          .map((character) => {
            return (
              <Link
                key={character.id}
                to={`/characters/singleCharacter/${character.id}`}
                className={
                  character.status === "Alive"
                    ? "alive"
                    : character.status === "Dead"
                    ? "dead"
                    : "unknown"
                }
              >
                <CharacterCard
                  name={character.name}
                  imageSrc={character.image}
                />
              </Link>
            );
          })}
      </ul>
      <div className="button__wrapper">
        <button className="prevBtn" onClick={goBack}>
          Go to previous page
        </button>
        <button className="nextBtn" onClick={loadMore}>
          Go to next page
        </button>
      </div>
    </section>
  );
}
