
import './App.css';
import {useState} from "react";

function App() {
const [nombre, setNombre] = useState("Johan")
const [nombreVerificar, setNombreVerificar] = useState("")

  return (
    <div className="App">
      <header className="App-header">
       <h1>Hola mundo</h1>
       <input type="text" onChange={(e) => {
        setNombre(e.target.value)
       }}></input>
       <input type="text" onChange={(e) => {
        setNombreVerificar(e.target.value)
       }} ></input>
       {nombre === nombreVerificar ?(
        <h1>Los nombres son iguales</h1>
       ) : (
        <h1>Los nombres son diferentes</h1>
       )}
      </header>
    </div>
  );
}

export default App;
