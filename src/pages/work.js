import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import leftAngle from '../icons/angle-left.svg';
import rightAngle from '../icons/angle-right.svg';
import lock from '../icons/lock.svg';
import react from '../icons/react.svg';
import outsideLink from '../icons/outside_link.svg';
import project_github from '../icons/project_github.svg';
import sketch from '../icons/sketch.svg';
import srs from '../icons/srs.svg';
import bok from '../icons/bok.svg';
import tasc from '../icons/tasc.svg';
import crowe from '../icons/crowe.svg';
import '../index.scss';

class Work extends Component {
  render() {
    return (
      <div className="container-fluid">

        {/* Title section */}
        <div className="title-section">
          <div className="row start-xs top-xs"><img src={leftAngle} alt="angle" /></div>
          <div className="row center-xs">
            <div className="col-xs-10 middle-xs">
              <h1 className="title-section-style">stephen hathaway is a product designer in denver, currently sr. product designer at slalom.</h1>
            </div>
          </div>
          <div className="row end-xs botton-xs"><img src={rightAngle} alt="angle" /></div>
        </div>

        {/* Work section */}
        <div className="col-xs-10 work-section">
          
          {/* Open Source projects */}
          <div className="row ">
            <div className="section-header">client projects.</div>
          </div>

          <Link className="post-link" to="./work/work-sample">
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={bok} alt="img" />bank of oklahoma.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={lock} alt="img" />
                </div>
            </div>
          </Link>

          <Link className="post-link" to="./work/work-sample">
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={tasc} alt="img" />tasc.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={lock} alt="img" />
                </div>
            </div>
          </Link>

          <Link className="post-link" to="./work/work-sample">
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={srs} alt="img" />srs aquiom | clearinghouse.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={lock} alt="img" />
                </div>
            </div>
          </Link>

          <a className="post-link"                         
              href="https://www.crowe.com/"
              target="_blank"
              rel="noopener noreferrer">
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={crowe} alt="img" />crowe horwath.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={outsideLink} alt="img" />
                </div>
            </div>
          </a>

          {/* Open Source projects */}
          <div className="row">
            <div className="section-header section-divider">open source projects.</div>
          </div>

          <a className="post-link"
            href="https://github.com/stphnhthwy/git-example"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={project_github} alt="img" />git for designers.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={outsideLink} alt="img" />
                </div>
            </div>
          </a>

          <a className="post-link"
            href="https://gitlab.com/stephenhathaway/stphnhthwy"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={react} alt="img" />stphnhthwy.com</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={outsideLink} alt="img" />
                </div>
            </div>
          </a>

          <a className="post-link"
            href="https://sketchdocumentation.gitbook.io/documentation/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={sketch} alt="img" />sketch documentation.</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={outsideLink} alt="img" />
                </div>
            </div>
          </a>

          {/* Speaking */}
          <div className="row ">
            <div className="section-header  section-divider">speaking.</div>
          </div>

          <a className="post-link"
            href="https://www.youtube.com/watch?v=A-lNv6Szu3M"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="row middle-xs post">
                <div class="col-xs-8 start-xs">
                  <div className="post-title"><img className="post-icon" src={project_github} alt="img" />git-merge 2018: designers git-it</div>
                </div>
                <div class="col-xs-4 end-xs">
                  <img src={outsideLink} alt="img" />
                </div>
            </div>
          </a>

        </div>
      </div>


    );
  }
}

export default Work;
