import React, { Component } from 'react';
import linkedin from './icons/linkedin.svg';
import github from './icons/github.svg';
import twitter from './icons/twitter.svg';
import './App.scss';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <div className="Header-width">
            <h2>stephen hathaway is a product designer in denver, currently sr. experience designer at slalom.</h2>
          </div>
          <div>
            <ul>
              <li>
                <a
                  href="https://www.linkedin.com/in/stphnhthwy/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={linkedin} alt="linkedin"/>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/stphnhthwy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={github} alt="github"/>
                </a>
              </li>              
              <li>
                <a
                  href="https://twitter.com/stphnhthwy"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                <img src={twitter} alt="twitter"/>
                </a>
              </li>
            </ul>
          </div>
        </header>
      </div>
    );
  }
}

export default App;
