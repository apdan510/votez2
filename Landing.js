import React, { Component } from 'react'
import { connect } from 'react-redux'
import Toast from 'grommet/components/Toast'
import Box from 'grommet/components/Box'
import Heading from 'grommet/components/Heading'
import Label from 'grommet/components/Label'
import Form from 'grommet/components/Form'
import Button from 'grommet/components/Button'
import TextInput from 'grommet/components/TextInput'
import Image from 'grommet/components/Image'
//
import logo from './logo.svg'
//import './App.css';
//import Qm from './components/Qm'

function App() {
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Store the record of your vote on <a href="https://www.urbandictionary.com/define.php?term=Web3">Web3</a>
        </p>
        <a
          className="App-link"
          href="ALEX-LINK-IN"
          target="_blank"
          rel="noopener noreferrer"
        >
          Upload Your Vote
        </a>
        <a
          className="App-link"
          href="ALEX-LINK-OUT"
          target="_blank"
          rel="noopener noreferrer"
        >
          View Your Vote
        </a>
      </header>
      <body>
      </body>
    </div>
  );
}

export default App;
