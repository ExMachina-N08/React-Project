import { useState } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import Pokedex from "./components/Pokemon.jsx";
function App() {
  const [pokemons, setPokemons] = useState(Pokedex);
  const handleSearch = (value) => {
    const pokemonFilter = Pokedex.filter((item) => {
      return item.name.toLowerCase() === value.trim();
    });
    setPokemons(pokemonFilter);
    value !== "" ? setPokemons(pokemonFilter) : setPokemons(Pokedex);
    console.log("filter", pokemonFilter);
  };
  // initial values

  return (
    <>
      <div className="container d-flex flex-column">
        <div className="m-3 px-2">
          <input
            type="text"
            placeholder="Search Pokemon..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className=" d-flex flex-row  g-5">
          {pokemons.map((item, index) => {
            return (
              <Card
                key={item.id}
                images={item.image}
                names={item.name}
                types={item.type.map((he) => {
                  const colors = {
                    Electric: "yellow",
                    Grass: "green",
                    Fire: "orange",
                    Water: "blue",
                    Poison: "purple",
                  };
                  return (
                    <a
                      href="#"
                      className="btn rounded-pill  flex-row"
                      style={{ marginRight: 3, backgroundColor: colors[he] }}
                    >
                      {he}
                    </a>
                  );
                })}
                pokemons={pokemons}
                setPokemons={setPokemons}
                index={index}
              />
            );
          })}
        </div>
      </div>
    </>
  );
}

export default App;
