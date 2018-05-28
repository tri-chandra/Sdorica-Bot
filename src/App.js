// import React, { Component } from 'react';
import React from 'react';
// import logo from './logo.svg';
// import './App.css';

import { Button, InputGroup, Intent, Colors } from '@blueprintjs/core';

import '@blueprintjs/core/lib/css/blueprint.css';
import '@blueprintjs/icons/lib/css/blueprint-icons.css';

// class App extends Component {
//   render() {
//     return (
//       <div className="pt-app pt-dark" style={{backgroundColor: Colors.DARK_GRAY3}}>
//         <InputGroup leftIcon="star" placeholder="Type something..." />
//         <Button>Click Me!</Button>
//         <Button intent={Intent.SUCCESS}>Click Me!</Button>
//         <Button intent={Intent.PRIMARY}>Click Me!</Button>
//         <Button intent={Intent.DANGER}>Click Me!</Button>
//         <Button intent={Intent.WARNING}>Click Me!</Button>
//         {/* <header className="App-header">
//           <img src={logo} className="App-logo" alt="logo" />
//           <h1 className="App-title">Welcome to React</h1>
//         </header>
//         <p className="App-intro">
//           To get started, edit <code>src/App.js</code> and save to reload.
//         </p> */}
//       </div>
//     );
//   }
// }

const App = () => (
  <div className="pt-app pt-dark" style={{ backgroundColor: Colors.DARK_GRAY3 }}>
    <InputGroup leftIcon="star" placeholder="Type something..." />
    <Button>Click Me!</Button>
    <Button intent={Intent.SUCCESS}>Click Me!</Button>
    <Button intent={Intent.PRIMARY}>Click Me!</Button>
    <Button intent={Intent.DANGER}>Click Me!</Button>
    <Button intent={Intent.WARNING}>Click Me!</Button>
  </div>
);

export default App;
