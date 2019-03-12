import React, { Component } from 'react';
import linkedin from '../icons/linkedin.svg';
import github from '../icons/github.svg';
import twitter from '../icons/twitter.svg';
import code from '../icons/code.svg';
import heart from '../icons/heart.svg';

import '../index.scss';

class Footer extends Component {
  render() {
    return (
      <div className="footer fixed-footer">
        <div className="container-fluid">
        <div className="row">
            <div className="col-xs-12 center-xs">
                <p><img className="footer-icon" src={code} alt="made" /> with <img className="footer-icon" src={heart} alt="love" /> by stephen.</p>
            </div>
        </div>
        <div className="row">
        <div className="col-xs-12 center-xs">
                <ul className="footer-list">
                    <li className="footer-list-items">
                        <a
                        href="https://www.linkedin.com/in/stphnhthwy/"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img src={linkedin} alt="linkedin"/>
                        </a>
                    </li>
                    <li className="footer-list-items">
                        <a
                        href="https://github.com/stphnhthwy"
                        target="_blank"
                        rel="noopener noreferrer"
                        >
                        <img src={github} alt="github"/>
                        </a>
                    </li>              
                    <li className="footer-list-items">
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
        
        </div>
        </div>
      </div>
    );
  }
}

export default Footer;
