import React from 'react';
import ReactDOM from 'react-dom';
//import Content from 'components/Content';
import ThemeContextProvider from 'context/ThemeContext';
import BtnToggle from 'components/BtnToggle';
import Header from 'components/Header';
import Presentation from 'components/Presentation';
import Works from 'components/Works';
import Contact from 'components/Contact';
import './index.scss'
import { Button } from '@mui/material';



const App = () =>  (
    // <ThemeContextProvider>
    //     <Header />
    //     <Presentation />
    //     <Works />
    //     <Contact />
    //   </ThemeContextProvider>
    <div>
      <BtnToggle />
      <Button variant="contained" color="primary"> Click ! </Button>
      <p>salut</p>
    </div>

);
ReactDOM.render(
  <ThemeContextProvider>
      <App />
  </ThemeContextProvider>,
 document.getElementById('root'));
