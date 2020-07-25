import React from 'react';

import './App.css';
import NavBar from './nav.js';

function Quotes() {
  
  return (
    <div className="App">
      <header >
      <NavBar></NavBar>
      </header>
      <body className="App-body">
      <p>
          Quotes from Nana
        </p>
      </body>
    </div>
  );
}

export default Quotes;
