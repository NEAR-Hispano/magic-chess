import "regenerator-runtime/runtime";
import React from "react";
import Home from "./components/home";
import PokeCard from "./components/compras";
import Clasificacion from "./components/clasificacion";
import Juego from "./components/juego";
import { login, logout } from "./utils";
import "./global.css";
import "./styles.css";
import { Container, Navbar, Nav } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import getConfig from "./config";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Routes
} from "react-router-dom";
const { networkId } = getConfig(process.env.NODE_ENV || "development");

export default function App() {
  // if not signed in, return early with sign-in prompt

  return (
    <div className="App">
      <Router>
        <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
            <Navbar.Brand href="/Home">Magic Chess</Navbar.Brand>
            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
            <Navbar.Collapse id="responsive-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/juego">Jugar</Nav.Link>
                <Nav.Link href="/compras">Comprar</Nav.Link>
                <Nav.Link href="/clasificacion">Clasificacion</Nav.Link>
              </Nav>
              <Nav>
                <Nav.Link eventKey={2} href="#memes">
                  <p>
                    <button onClick={login}>Sign in</button>
                  </p>
                </Nav.Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
        <Routes>
          <Route exact path="/Home" element={<Home />}></Route>
          <Route exact path="/compras" element={<PokeCard />}></Route>
          <Route
            exact
            path="/clasificacion"
            element={<Clasificacion />}
          ></Route>
          <Route exact path="/juego" element={<Juego />}></Route>
        </Routes>
      </Router>

      <div
        class="row2"
        style={{
          flexDirection: "row",
          width: "50%",
          background: "#F0F",
          display: "flex"
        }}
      ></div>
    </div>
  );
}
