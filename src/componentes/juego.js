import "regenerator-runtime/runtime";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";

const Juego = (props) => {
  // if not signed in, return early with sign-in prompt
  return (
    <div className="d-flex bd-highlight example-parent">
      <div className="p-2 w-100 bd-highlight col-example">Aqui va el juego</div>
      <div className="p-2 w-100 bd-highlight col-example">
        <p>
          <a href={"mockPokemonData.video"}>juego video</a>
        </p>
      </div>
    </div>
  );
};

export default Juego;
