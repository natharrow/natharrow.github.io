import React, { Component } from 'react';
import {Grid, Cell, Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Footer from './footer';
import MyHeader from './header';
import {Link} from 'react-router-dom';

class AboutMe extends Component {
  render() {
    return(
      <div>
        <MyHeader />
        <div className="mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--50-col">
          </div>
        </div>
        <div>About me</div>
        <Footer />
      </div>
    )
  }
}

export default AboutMe;
