import React, { Component } from 'react';
import { Link } from 'react-router-dom';
// import './App.scss';

class Work extends Component {
  render() {
    return (
      <div>
        <div>Work Page</div>
        <div>Hello world</div>
          <div>
            <ul>
              <li><Link to="work/work-sample">Sample Work</Link></li>
            </ul>
        </div>
      </div>

    );
  }
}

export default Work;
