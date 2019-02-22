import React, { Component } from 'react';
import {Grid, Cell, Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Footer from './footer';
import {Link} from 'react-router-dom';


class Landing extends Component {
  render() {
    return(
      <div>
      <Header className="header-color" title="Natalia Harrow" scroll>
        <Navigation>
            <Link to="/landingpage">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/resume">Resume</Link>
            <Link to="/contact">Contact</Link>
        </Navigation>
      </Header>
        <div className="mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--50-col">
            <img
              src="https://image.ibb.co/dJyuT0/nathar.jpg"
              alt="avatar"
              className="avatar-img"
            />
          </div>
          <div className="mdl-cell mdl-cell--50-col">
            <div className="banner-text">
              <h1>Hi, Im Natalia!</h1>
              <hr/>
              <p>bla </p>
            </div>
          </div>
        </div>
        <Footer className="myfooter"/>
      </div>
    )
  }
}

export default Landing;
