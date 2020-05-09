import React, { Component, useState } from 'react';
import { render } from 'react-dom';
import './style.css';
import Contador from './Contador';

class App extends Component {
  constructor() {
    super();
    this.state = {
      name: 'React'
    };
  }

  render() {
    return (
      <div>
        <Contador/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
