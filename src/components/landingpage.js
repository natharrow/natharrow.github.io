import React, { Component } from 'react';
import {Grid, Cell, Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import Footer from './footer';
import MyHeader from './header';
import {Link} from 'react-router-dom';

class Landing extends Component {
  render() {
    return(
      <div>
      <MyHeader />
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
              <h1>Titleeeee!</h1>
              <hr/>
              <p>Change </p>
            </div>
          </div>
        </div>
        <Footer className="myfooter"/>
      </div>
    )
  }
}

export default Landing;
