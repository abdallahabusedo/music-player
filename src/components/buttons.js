import React from 'react';
import './App.css';
function Buttons() {
  return (
    <div className="container ">
      <button className="clicks">
        <i className="fas fa-arrow-alt-circle-left click"></i>
      </button>
      <button className="clicks">
        <i className="fas fa-play-circle click"></i>
      </button>
      <button className="clicks">
        <i className="fas fa-stop-circle click"></i>
      </button>
      <button className="clicks">
        <i className="fas fa-arrow-alt-circle-right click"></i>
      </button>
    </div>
  );
}

export default Buttons;
