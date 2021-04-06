import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/clock';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock />
      </header>
    </div>
  );
}

export default App;
