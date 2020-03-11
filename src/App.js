import React from 'react';
import logo from './logo.svg';
import './App.css';
import Button from './Button';
import {ButtonClass} from './ButtonClass';
import InputForm from './Form';
//Example
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Button text="submit" />
        <ButtonClass />
        {InputForm}
      </header>
    </div>
  );
}

export default App;
