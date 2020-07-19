import React, {Component} from 'react';
import './App.css';
import Mic from './../assets/images/mic.jpg';
import back from './../assets/images/back.jpg';
import Buttons from './buttons';
import Tomorrow from './../assets/songs/Tomorrow.mp3';
import StressOut from './../assets/songs/StressedOut.mp3';
export class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      SongSrc: [{Tomorrow}, {StressOut}, {Tomorrow}, {StressOut}, {Tomorrow}],
      SongIndex: 0,
      PlayPause: true,
    };
  }

  Play = () => {
    let song = document.getElementById('Song');
    if (this.state.PlayPause) {
      song.play();
      this.setState({PlayPause: false});
      console.log('ON');
    } else {
      song.pause();
      this.setState({PlayPause: true});
      console.log('Off');
    }
  };

  Prev = () => {
    this.setState({SongIndex: this.state.SongIndex - 1});
    if (this.state.SongIndex < 0) {
      this.setState({SongIndex: 5});
    }
    document.getElementById('Song').src = this.state.SongSrc[
      this.state.SongIndex
    ];
    this.Play();
  };
  Next = () => {
    this.setState({SongIndex: this.state.SongIndex + 1});
    if (this.state.SongIndex > 5) {
      this.setState({SongIndex: 0});
    }
    document.getElementById('Song').src = this.state.SongSrc[
      this.state.SongIndex
    ];
    this.Play();
  };

  BarProcess = () => {
    const BarProg = document.querySelector('#SongProc');
    BarProg.max = document.getElementById('Song').duration;
    BarProg.value = document.getElementById('Song').currentTime;
    setInterval(this.BarProcess, 700);
  };
  render() {
    return (
      <div className="App">
        <img src={back} alt="background" className="background"></img>
        <audio loop src={StressOut} id="Song"></audio>
        <div className="app-wrapper">
          <div className="main">
            <img src={Mic} alt="songImage" className="SongImg"></img>
          </div>
          <div className="container">
            <h2>song title</h2>
          </div>
          <Buttons
            Play={this.Play}
            PlayPause={this.state.PlayPause}
            Next={this.Next}
            Prev={this.Prev}
          />
        </div>
      </div>
    );
  }
}

export default App;
