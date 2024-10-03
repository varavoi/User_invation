import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Success } from './Components/Success';
import { Users } from './Components/Users/Users';

function App() {
  return (
    <div className="App">
      <Users />
      {/* <Success/> */}
    </div>
  );
}

export default App;
