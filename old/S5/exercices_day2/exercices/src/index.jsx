import React from 'react';
import ReactDOM from 'react-dom';
import Colors from "components/Colors";
import MinInput from  "components/minInput"
import Hangman from "components/Hangman"


import "./App.css"

const App = () => (
  <div>
    <h1>Train on React !</h1>
    {/* <Colors /> */}
    {/* <MinInput /> */}
    <Hangman />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));

