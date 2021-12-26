import React from 'react';
import ReactDOM from 'react-dom';
import Books from 'components/Books'
import './app.css'
const App = () => (
  <div>
    <h1>La bibli</h1>
    <Books />
  </div>
);

ReactDOM.render(<App />, document.getElementById('root'));