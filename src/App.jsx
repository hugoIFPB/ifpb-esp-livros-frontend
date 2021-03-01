import "./App.css"

import {Button, TextField} from '@material-ui/core';
import React, {useState} from "react";
import CampoTextual from "./CampoTextual";

function App() {
  let [campo, setCampo] = useState("Rua do Fulano"); // [nomeVariavel, setNomeVariavel ]
  return (
    <div className="App">
      <div>
        <TextField onChange={e => setCampo(e.target.value)} value={campo} label="Endereço" />
      </div>
      <div><h1>{campo}</h1></div>
    </div>
  );
}

export default App;
