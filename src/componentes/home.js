import "regenerator-runtime/runtime";
import { Tab } from "bootstrap";
import { Table, Container, Button } from "react-bootstrap";
import { login, logout } from "./../utils";

import getConfig from "./../config";
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
const { networkId } = getConfig(process.env.NODE_ENV || "development");
const Home = (props) => {
  // if not signed in, return early with sign-in prompt

  return (
    <div className="d-flex bd-highlight example-parent">
      <div className="p-2 w-100 bd-highlight col-example">
        <p>Es necesario conectarse para comenzar a jugar </p>
        <button onClick={login}>Conectarse</button>
      </div>
      <div className="p-2 w-100 bd-highlight col-example">
        <p>
          Magic chess es un juego basado en el ajedrez clasico con una variedad
          de modos de juego que busca ser divertido para todos y fomentar el
          juego clasico de ajedrez
        </p>
      </div>
    </div>
  );
};

export default Home;
