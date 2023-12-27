import "../style/card.css";
import { useEffect, useState } from "react";

function getData(url) {
  return fetch(url, {
    mode: "cors",
  })
    .then((response) => response.json())
    .catch((err) => err);
}

function Card({ data, onClick }) {
  const [sprites, setSprites] = useState(null);

  useEffect(() => {
    async function getPokemonSprites() {
      const pokemon = await getData(
        `https://pokeapi.co/api/v2/pokemon/${data}`
      );
      setSprites(pokemon.sprites.front_default);
    }
    getPokemonSprites();
    return () => setSprites(null);
  }, [data]);

  return (
    <div className="card">
      <button type="button" onClick={() => onClick(data)} aria-label={{ data }}>
        <img src={sprites} alt="" />
      </button>
      <h2>{data}</h2>
    </div>
  );
}

export default Card;
