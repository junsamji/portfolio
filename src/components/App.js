import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import Body from './Pages/Body';
import './App.css';

function App() {
  const [path, setPath] = useState("/");

  return (
    <div id="wrap">
      <div id="header" className="App-header">
      <Navbar />
      </div>
      <div id="container" className="App-content">
        <Body />
      </div>
    </div>
  );
}

export default App;
