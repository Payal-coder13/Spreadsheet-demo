import React, { useState } from 'react';
import SpreadSheet from './components/SpreadSheet';
import Toolbar from './components/Toolbar';
import Header from './components/Header';

function App() {
 
  return (
    <div>
      <Header/>
      <Toolbar />
      <SpreadSheet />
    </div>
  );
}

export default App;
