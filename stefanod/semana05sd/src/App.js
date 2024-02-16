import './App.css'
import { useState } from "react";
function App() {
  const [nombre, setNombre] = useState("Stefano");
  const [nombreVerificado, setnombreVericado] = useState("")
  return (
    <div className="App">
      <h1>hola mundo</h1>
      <input
        type="text"
        onChange={(e) => {
          setNombre(e.target.value)
        }}

      ></input>
      <input
        type="text"
        onChange={(e) => {
          setnombreVericado(e.target.value)
        }}
      ></input>

      {nombre === nombreVerificado ? (
        <h1>Son iguales</h1>

      ) : (
        <h1>Son diferentes</h1>
      )}
    </div>
  );
}

export default App;
