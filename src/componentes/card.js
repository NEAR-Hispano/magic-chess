import React from "react";
export const mockPokemonData = {
  name: "Charizard",
  sprites: {
    front_default:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png",
    front_shiny:
      "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/shiny/6.png"
  },
  video: "https://www.youtube.com/watch?v=evvO5Gcl-mo"
};
function PokeData() {
  return (
    <div className="pokemon-details">
      <div>
        <h1>
          <p>Name</p> {mockPokemonData.name}
          
        </h1>
        <div>
        <button onClick={"Comprar"}>Comprar</button>
        <p/>
          <img
            src={mockPokemonData.sprites.front_default}
            title={mockPokemonData.name}
            alt={mockPokemonData.name}
          />
          <p/>
          
          <button onClick={"Comprar"}>Comprar</button>
          <p/>
          <img
            src={mockPokemonData.sprites.front_shiny}
            title={mockPokemonData.name}
            alt={mockPokemonData.name}
          />
          <p/>
          <p/>
        </div>
      </div>
    </div>
  );
}

export default PokeData;
