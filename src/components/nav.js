import React from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../index.scss';

const items = [{
  path: '/',
  text: 'work.'
}, {
  path: '/about',
  text: 'about.'
}];

export default function Nav() {
    return (
      <div className="container-fluid">
        <div className="row middle-xs navbar">
          <div className="col-xs-6 start-xs">
            <Link to="/" className="navbar-logo">stphnhthwy.</Link>
          </div>
          <ul className="col-xs-6 end-xs navbar-list">
          {items.map(item => (
            <li key={item.path} className="navbar-list-items">
              <NavLink className="navbar-link" activeStyle={{ color: '#727079' }} exact path to={item.path}>{item.text}</NavLink>
            </li>
          ))}
          </ul>
        </div>
      </div>
    );
}

