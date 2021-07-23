import "./Charactes.css";
import Form from "../components/Form";
import CharacterCard from "../components/CharacterCard";
import { Link } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Characters() {
  const [allCharacters, setAllCharacters] = useState([]);
  const [page, setPage] = useState(1);

  useEffect(() => {
    if (allCharacters.length === 0 || page >= 1) {
      const url = `https://rickandmortyapi.com/api/character/?page=${
        page >= 1 ? page : 1
      }`;

      fetch(url)
        .then((response) => response.json())
        .then((data) => setAllCharacters(data.results));
    }
  }, [allCharacters, page]);

  function loadMore(event) {
    setPage(page + 1);
  }
  function goBack(event) {
    let counter = page;
    counter = counter - 1;
    if (counter < 1) {
      counter = 1;
    } else {
      counter = counter;
    }
    setPage(counter);
  }

  return (
    <section className="characters">
      <Form />
      <ul className="character-list">
        {allCharacters.map((character) => {
          return (
            <Link
              key={character.id}
              to={`/characters/singleCharacter/${character.id}`}
            >
              <CharacterCard name={character.name} imageSrc={character.image} />
            </Link>
          );
        })}
      </ul>
      <button onClick={goBack}>Go to previous page</button>
      <button onClick={loadMore}>Go to next page</button>
    </section>
  );
}
