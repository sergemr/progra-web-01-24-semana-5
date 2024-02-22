import logo from './logo.svg';
import './App.css';
import { useState} from "react";
import Home from "../src/components/Home/Home"

function App() {

  const [nombre, setNombre] = useState("Dani");
  const [nombreVer, setNombreVer] = useState("");
  
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      
      <input type="text" onChange={(e)=>{setNombre(e.target.value)}}></input>
     
      <input type="text" onChange={(e)=>{setNombreVer(e.target.value)}}></input> 

      {nombre===nombreVer? (
        <h1> Los nombres son iguales</h1>
      ):(
        <h1> Los nombres son diferentes</h1>
      )}

      <button ></button>


    </div>
  );
}

export default App;
