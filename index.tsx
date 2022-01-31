import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import { Test } from './src/feature-5';
import './style.css';

interface AppProps {}
interface AppState {
  name: string;
}

class App extends Component<AppProps, AppState> {
  render() {
    return (
      <div>
        <Test />
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
