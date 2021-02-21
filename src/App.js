import "./App.css"

import { Button } from '@material-ui/core';
import React from "react";
import CampoTextual from "./CampoTextual";
function App() {
  return (
    <div className="App">
      <div>
        <CampoTextual />
      </div>
      <Button variant="contained" color="primary">
        Enviar
      </Button>
    </div>
  );
}

export default App;
