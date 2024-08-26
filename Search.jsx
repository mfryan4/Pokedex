import React, {useState, useEffect} from "react";

const Search = () =>{
  const fetchPokemon = async () => {
    fetch(`https://pokedex.mimo.dev/api/pokemon/${input}`)
    .then(response => response.json())
    .then(data => setPokemon(data))
  };
  const [input, setInput] = useState("");
  const [pokemon, setPokemon] = useState({ 
    name: "pikachu", 
    height: 4, 
    weight: 60, 
    sprites: {front_default: "https://raw.githubusercontent.com/getmimo/things-api/main/files/pokedex/sprites/master/sprites/pokemon/25.png"}}
    );

  return(
    <div className="search">
      <h2>Search for a Pokemon</h2>
      <div className="searchInbox">
       <input 
       type="text" 
       value={input} 
       placeholder="Find Pokemon"
       onChange={(e) => setInput(e.target.value)}
       />
      </div>
      {pokemon && (
      <div id="pokemon-card">
      <h2>{pokemon.name}</h2>
      <img src = {pokemon.sprites.front_default} alt={pokemon.name} />
      <p>Height: {pokemon.height}</p>
      <p>Weight: {pokemon.weight}</p>
      </div>
      )}
      <button onClick={fetchPokemon}>Search</button>
    </div>  
  );
}

export default Search;