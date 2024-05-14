// src/App.js

import React from 'react';
import './App.css';
import Header from './Header';
import Home from './Home';
import Activities from './Activities'; // Import the Activities component

function App() {
  return (
          <div className="App">
              <Header />
              <main>
                <Home />
              </main>
          </div>
  );
}

export default App;
