import logo from './logo.svg';
import './App.css';
import { useState } from "react";

function App() {
const [nombre, setnombre] = useState("RANDOLL");
const [ nombreverificar, setNombreVerificar] = useState("")

  return (
    <div className="App">

      <h1> Hola Mundo</h1>

      <input type="text" onChange={(e)=>{
          setnombre(e.target.value);

      }}  >
        
         </input>

<input type="text" onChange={(e) =>{
  setNombreVerificar(e.target.value);

}}> 


</input>

{nombre=== nombreverificar ?(
<h1> los nombres son iguales</h1>
) : ( <h1> los nombres son diferentes</h1>)}
     
    </div>
  );
}

export default App;
