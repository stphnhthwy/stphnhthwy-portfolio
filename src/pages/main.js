import React from "react";
import { Switch, Route } from 'react-router-dom';
// import './App.scss';
import Nav from '../components/nav';
import Work from './work';
import About from './about';
import workSample from './work/work-sample';


export default function Main() {
  return (
      <div className="container-fluid">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route path="/about" component={About} />
          <Route exact path="/work/work-sample" component={workSample} />
      </Switch>
      </div>
  );
}