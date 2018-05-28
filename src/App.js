import React, { Component } from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Button, Intent } from '@blueprintjs/core'

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Button intent={Intent.SUCCESS}>Click Me!</Button>
        <Button intent={Intent.PRIMARY}>Click Me!</Button>
        <Button intent={Intent.DANGER}>Click Me!</Button>
        <Button intent={Intent.WARNING}>Click Me!</Button>
        {/* <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p> */}
      </div>
    );
  }
}

export default App;
