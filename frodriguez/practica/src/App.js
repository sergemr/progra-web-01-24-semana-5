import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [nombre, setNombre]= useState("Fiorella");
const [nombreVerificar, setNombreVerificar]= useState("");


  return (
    <div className="App">
      
      <h1>hola mundo</h1>
      <input
       type="text"
       onChange={(e)=> {
        setNombre(e.target.value);
       }}

       ></input>
      <input 
      type="text"
      onChange={(e)=> {
        setNombreVerificar(e.target.value);
      }}
      ></input>

      {nombre === nombreVerificar ? (
        <h1>Los nombres son iguales</h1>
      ) : (
        <h1>Los nombres son diferentes</h1>
       )}
    </div>
  );
}

export default App;
