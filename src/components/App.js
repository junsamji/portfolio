import React, { useState } from 'react';
import Navbar from './Nav/Navbar';
import Body from './Pages/Body';

function App() {
  const [path, setPath] = useState("/");

  return (
    <div className="App">
      <Navbar />
      <Body />
    </div>
  );
}

export default App;
