import React, { useState } from 'react';
import {AnimatedOnScroll} from "react-animated-css-onscroll";
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
      <AnimatedOnScroll animationIn="fadeIn" animationInDuration={1000}>
      <div id="container" className="App-content">
        <Body />
      </div>
      </AnimatedOnScroll>
    </div>
  );
}

export default App;
