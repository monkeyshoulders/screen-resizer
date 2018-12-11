import React, { Component } from 'react';
import './App.css';

const viewHeight = () => {
  let height = window.innerHeight || document.body.clientHeight;
  return height;
}

const viewWidth = () => {
  let width = window.innerHeight || document.body.clientHeight;
  return width;
}

window.onresize = viewHeight;
window.onresize = viewWidth;

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Current Browser Size</h1>
        <div className="dimensions">
          <div className="width">{viewWidth()}px<br /><span>width</span></div>
          <div className="height">{viewHeight()}px<br /><span>height</span></div>
        </div>
      </div>
    );
  }
}

export default App;
