import React from "react";
import { Switch, Route } from 'react-router-dom';
// import './App.scss';
import Nav from '../components/nav';
import Footer from '../components/footer'
import Work from './work';
import About from './about';
import workSample from './work/work-sample';
import lockedWork from './work/locked-work';


export default function Main() {
  return (
      <div className="main-container">
        <Nav />
        <Switch>
          <Route exact path="/" component={Work} />
          <Route path="/about" component={About} />
          <Route exact path="/work/work-sample" component={workSample} />
          <Route exact path="/work/locked-work" component={lockedWork} />
        </Switch>
        <Footer />
      </div>
  );
}