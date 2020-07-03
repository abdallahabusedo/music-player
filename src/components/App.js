import React from 'react';
import './App.css';
import Mic from './../assets/images/mic.jpg';
import back from './../assets/images/back.jpg';
import Buttons from './buttons';

function App() {
  return (
    <div className="App">
      <img src={back} alt="background" className="background"></img>

      <div className="app-wrapper">
        <div className="main">
          <img src={Mic} alt="songImage" className="SongImg"></img>
        </div>
        <div className="container">
          <h2>song title</h2>
        </div>
        <Buttons />
      </div>
    </div>
  );
}

export default App;
