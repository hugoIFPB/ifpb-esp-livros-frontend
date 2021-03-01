import React from 'react';
import ReactDOM from 'react-dom';
import NovoComponente from './NovoComponente'
import App from './App';

const elemento = <h1>Alguma coisa</h1>;
// JSX
ReactDOM.render(
  <React.Fragment>
    {elemento}
    <NovoComponente />
    <br></br></React.Fragment>,
  document.getElementById('root')
);