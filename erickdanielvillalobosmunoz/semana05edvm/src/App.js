import './App.css';
import {useState} from "react";


function App() {
  const [nombre, setNombre] = useState("")
  const [nombreVerificar, setNombreVerificar] = useState("")
  const amongUsAscii = `
     . 　　　。　　　　•　 　ﾟ　　。 　　.
    
    　.　　　 　　.　　　　　。　　 。　. 　
    .　　 。　　　　　 ඞ 。 . 　　 • 　　　　•
    　　ﾟ　　 Red was not An Impostor.　 。　.
    　　'　　　 1 Impostor remains 　 　　。
    　　ﾟ　　　.　　　. ,　　　　.　 .
  `;

  return (
    <div className="App">
      <h1>Hola mundo</h1>
      <input type="text" onChange={(e) => setNombre(e.target.value)} />
      <input type="text" onChange={(e) => setNombreVerificar(e.target.value)} />
      {nombre === nombreVerificar ? (
        <h1>Los nombres son iguales</h1>
      ) : (
        <h1>Los nombres son diferenes</h1>
      )}
      <br />
      <pre>{amongUsAscii}</pre>
    </div>
  );
}

export default App;
