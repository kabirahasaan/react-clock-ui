import React from 'react';
import logo from './logo.svg';
import './App.css';
import Clock from './clock/clock';
import Date from './calendar'

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Clock location="Current location"/>
        <Date/>
      </header>
    </div>
  );
}

export default App;
