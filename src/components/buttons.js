import React from 'react';
import './App.css';
class Buttons extends React.Component {
  handleChange = (event) => {
    this.setState({value: event.target.value});
    console.log(event.target.value);
  };
  render = () => {
    return (
      <div className="container">
        <button className="clicks" onClick={this.props.Prev}>
          <i className="fas fa-arrow-alt-circle-left click"></i>
        </button>
        <button className="clicks" onClick={this.props.Play}>
          <span>
            <i
              class={this.props.PlayPause ? 'fa fa-play-circle' : 'fa fa-stop'}
            ></i>
          </span>
        </button>
        <button className="clicks" onClick={this.props.Next}>
          <i className="fas fa-arrow-alt-circle-right click"></i>
        </button>
        <input
          type="range"
          min="0"
          max=""
          onChange={this.handleChange}
          defaultValue="0"
          className="SongProc"
          id="SongProc"
        />
      </div>
    );
  };
}

export default Buttons;
