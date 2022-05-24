import 'regenerator-runtime/runtime'
import React from 'react'
import { login, logout } from './utils'
import './global.css'
import { Container, Navbar, Nav } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import getConfig from './config'
const { networkId } = getConfig(process.env.NODE_ENV || 'development')

export default function App() {

  // if not signed in, return early with sign-in prompt
  
    return (
      <div className='App'>
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand href="#home">Magic Chess</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#features">Jugar</Nav.Link>
      <Nav.Link href="#pricing">Comprar</Nav.Link>
      <Nav.Link href="#deets">Clasificacion</Nav.Link>
    </Nav>
    <Nav>
      <Nav.Link eventKey={2} href="#memes">
        <p style={{ textAlign: 'center', marginTop: '1.5em', background: '#181818' }}>
          <button onClick={login}>Sign in</button>
        </p>
      </Nav.Link>
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
<div>
<div style={{position: 'absolute', width: '25.5em', height: '15em', left: '40em', top: '15em', background: '#63DAD3'}} >
        <p >
        Es necesario conectarse para comenzar a jugar 
        </p>
        <div>
        <p style={{ textAlign: 'center', marginTop: '1.5em', background: '#000000' }}>
          <button onClick={login}>Conectarse</button>
        </p>
        </div>
</div>



<div></div>

</div>
<div style={{textAlign: 'center', position: 'absolute', width: '25.5em', height: '18em', button: '35em', left: '10em', top: '15em', background: '#FFF'}}>
      <h2>Magic chess es un juego basado en el ajedrez clasico con una variedad de modos de juego que busca ser divertido para todos y fomentar el juego clasico de ajedrez</h2>
</div>
</div>

    )
}
