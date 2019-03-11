import React from 'react';
import { Link } from 'react-router-dom';
import '../index.scss';

export default function Menu() {
    return (
        <div className="row middle-xs">
          <div className="col-xs-6">stphnhthwy.</div>
          <ul className="col-xs-6 end-xs">
              <li><Link to="/">work.</Link></li>
              <li><Link to="/about">about.</Link></li>
          </ul>
        </div>
    );
}
