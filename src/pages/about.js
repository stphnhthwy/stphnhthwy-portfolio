import React, { Component } from 'react';
import '../index.scss';
import profile from '../icons/profile.jpg';

class About extends Component {
  render() {
    return (
      <div className="container-fluid">
        <div className="row center-xs about-img">
        <img className="" src={profile} alt="img" width="400px" height="400px"/>
        </div>
        <div className="title-section">
          <div className="row center-xs">
            <div className="col-xs-12 middle-xs">
              <h1 className="work-title">Stephen Hathaway is a senior product designer at cognizant accelerator in boulder, co where he brings 5+ years of experience to his current role. He strives to build unified user experiences across a variety of mediums by infusing design with core development principles. When he's not delighting users, you can find him on his bike, playing in Colorado's mountains, or holing up in coffee shops to read or write code.</h1>
            </div>
          </div>
          <div className="row about-space">
          <div className="col-xs-12 center-xs">
            <a className="email-link"
              href="mailto:stphnhthwy@gmail.com"
              target="_blank"
              rel="noopener noreferrer">
              Contact me.
              </a>
          </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;
