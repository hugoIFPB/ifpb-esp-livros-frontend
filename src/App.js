import "./App.css"

import { Button } from '@material-ui/core';
import React, {useState} from "react";
import CampoTextual from "./CampoTextual";



function App() {
  const [valor, setValor] = useState();
  return (
    <div className="App">
      <div>
        <CampoTextual onChange={setValor} label="Nome" value="Fulano de Tal"/>
      </div>
      <div>
      <Button type="submit" variant="contained" color="primary">
        Enviar
      </Button>
      </div>
      <div><h1>{valor}</h1></div>
    </div>
  );
}

export default App;
