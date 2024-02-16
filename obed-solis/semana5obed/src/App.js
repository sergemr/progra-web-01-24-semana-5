import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [nombre, setNombre] = useState("Enrique");
  const [nombreVerificar, setNombreVerificar] = useState("");
  return (
    <div className="App">
      <h1>Hola Mundo</h1>
      <input 
      type= "text"
       onChange={(e) => {
        setNombre(e.target.value)
       }}
      ></input>
      <br></br>
      <br></br>
      <input 
      onChange={(e) => {
        setNombreVerificar(e.target.value)
       }}
       type= "text"
       ></input>

       {nombre === nombreVerificar ?(
        <h1>Los nombres son inguales</h1>
       ):(
        <h1>Los nombres son diferentes</h1>
       )
       }
    </div>
  );
}

export default App;
