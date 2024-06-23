import { useState, useEffect } from "react";
import "./App.css";
import Card from "./components/Card.jsx";
import axios from "axios";
import axiosClient from "./axios/AxiosInstance.js";
import InfiniteScroll from "react-infinite-scroller";
import Pokedex from "./components/Pokemon.jsx";
function App() {
  const [pokemons, setPokemons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [next, setNext] = useState(
    "https://pokeapi.co/api/v2/pokemon/?offset=20&limit=20"
  );

  useEffect(() => {
    axiosClient
      .get("/pokemon/")
      .then((respond) => {
        fetchPokemonDetail(respond.data.results);
        setNext(respond.data.next);
      })
      .catch((err) => console.log("error", err));

    const fetchPokemonDetail = async (pokemonsArray) => {
      const promise = pokemonsArray.map((pokemon) =>
        axiosClient.get(pokemon.url.replace("https://pokeapi.co/api/v2", ""))
      );
      try {
        const responses = await Promise.all(promise);
        const detailData = responses.map((res) => res.data);
        console.log("poke detail fetched", detailData);
        setPokemons(detailData);
        setLoading(false);
      } catch (error) {
        console.log("Error fetching details:", error);
        setLoading(false);
      }
    };
    console.log("pokeomon", pokemons);
  }, []);

  //api call

  //search function
  const handleSearch = (value) => {
    const pokemonFilter = pokemons.filter((item) => {
      return item.name.toLowerCase() === value.trim();
    });
    setPokemons(pokemonFilter);
    value !== "" ? setPokemons(pokemonFilter) : setPokemons(pokemons);
    console.log("filter", pokemonFilter);
  };

  // initial values
  return (
    <>
      <div className="container d-flex flex-column justify-content-lg-center">
        <div className="m-3 px-2">
          <input
            type="text"
            placeholder="Search Pokemon..."
            onChange={(e) => handleSearch(e.target.value)}
          />
          <button onClick={handleSearch}>Search</button>
        </div>
        <div className=" row g-3">
          {pokemons.map((item, index) => {
            return (
              <Card
                key={index}
                images={item.sprites.front_default}
                names={item.name}
                types={item.types.map((he) => {
                  const colors = {
                    electric: "yellow",
                    grass: "green",
                    fire: "orange",
                    water: "blue",
                    poison: "purple",
                    normal: "salmon",
                    flying: "lightsteelblue",
                    bug: "sandybrown",
                  };
                  return (
                    <a
                      href="#"
                      className="btn rounded-pill flex-row text-light"
                      style={{
                        marginRight: 3,
                        backgroundColor: colors[he.type.name],
                      }}
                    >
                      {he.type.name}
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
