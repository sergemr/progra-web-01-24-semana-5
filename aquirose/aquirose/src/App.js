import logo from './logo.svg';
import './App.css';
import {useState} from "react"

function App() {
  const [nombre, setNombre]= useState("Adrian");
  const [nombreAverificar, setNombreAverificar]= useState("");
  return (
    <div>
      <h1>Hola mundo</h1>
      <input onChange={(e) =>{
        setNombre(e.target.value);
        }}
        type="text"
      ></input>
      <input onChange={(e) =>{
        setNombreAverificar(e.target.value);
        }}
        type="text"
      ></input>

      {nombre == nombreAverificar?(
      <h1>Los nombres son iguales</h1>
      ):(
        <h1>Los nombres son diferentes</h1>
      )}
    </div>
  );
}

export default App;
