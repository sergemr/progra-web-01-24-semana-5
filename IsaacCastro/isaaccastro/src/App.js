import logo from './logo.svg';
import React, { useEffect, useState } from "react";
import './App.css';

function App() {
  let verificacon = 0
  const [usuario, setNombre] = useState("");
  const [correo, setCorreo] = useState("");
  //const [validacion, setverificacion] = useState(verificacon)

  return (
    <div className="App">
    <h1>Registro</h1>
      <header className="App-header">
        <p></p>
        <input type="text" onChange={(event) => {
          setNombre(event.target.value);
          //setverificacion(verificacon + 1);
        }}>
        <p></p>
        </input>
        <input type="text" onChange={(event) => {
          setCorreo(event.target.value);
          //setverificacion(verificacon + 1);
        }}></input>

        <a
          className="App-link"
          //href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
        </a>
      </header>
    </div>
  );
}

export default App;
