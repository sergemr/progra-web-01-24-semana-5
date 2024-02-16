import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
const [nombre, setNombre] = useState("Carlos");
const [nombreVerificar, setNombreVerificar]= useState ("");

  return (
    <div className='App'>
     <h1>Hola Mundo </h1>
     <imput type = "text"
     onChange={(e) => {
      setNombre(e.target.value)
     }}
     ></imput>
     <imput type = "text"
     onChange={(e) => {
      setNombre(e.target.value)
     }}
     
     ></imput>

     {nombre == nombreVerificar ? (
      <h1> Los nombres sin iguales </h1>
     ) : (
      <h1> los nombres son diferentes </h1>
     )

     }
    </div>
  );
}

export default App;
