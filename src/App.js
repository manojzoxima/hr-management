import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
const mess = ["abc", "xyz", "tttd"];
let langs = ["Ruby", "ES6", "Scala"];
class App extends Component {
  constructor(props) {
      super(props)
      console.log(this.props)
  }
  render(){
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
            <React.Suspense fallback={<p>Please Wait.....</p>} >
  
          </React.Suspense>
          {langs.map(it => <p>{it}</p>)}
          <div style={{ fontSize: '60px' }}>{mess}</div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
  
}

export default App;
