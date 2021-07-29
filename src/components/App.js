import React from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import {AnimatedOnScroll} from "react-animated-css-onscroll";

import Navbar from './Nav/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import NotFound from './Pages/NotFound';

import './App.css';

function App() {
  return (
    <div id="wrap">
      <BrowserRouter basename="/portfolio">
        <div id="header" className="App-header">
        <Navbar/>
        </div>
        <AnimatedOnScroll animationIn="fadeIn" animationInDuration={1000}>
        <div id="container" className="App-content">
          <Switch>
            <Route exact path='/' component={Home}/>
            <Route path='/about' component={About}/>
            <Route component={NotFound}/>
          </Switch>
        </div>
        </AnimatedOnScroll>
      </BrowserRouter>
    </div>
  );
}

export default App;
