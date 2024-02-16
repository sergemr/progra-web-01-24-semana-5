import logo from './logo.svg';
import './App.css';
import {useState} from "react";

function App() {
  const [name, setname]= useState("Samuel");
  const [namever, setnamever]= useState("");

  return (
    <div className="App">
      <h1>Holamundo</h1>
      <input type="text" onChange={(e)=>{setname(e.target.value);}}></input>
      <input type="text" onChange={(e)=>{setnamever(e.target.value);}}></input>
    
    {name === namever ? (
      <h1>Los nombres son iguales</h1>
    ) : (
      <h1>Los nombres son diferentes</h1>
    )}
    </div>
  );
}

export default App;
