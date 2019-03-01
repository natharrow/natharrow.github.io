import React, {Component} from 'react';
import {Grid, Cell, Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';

class MyHeader extends Component {
  render() {
    return(
      <div>
      <Header className="header-color" title="Natalia Harrow" scroll>
        <Navigation>
            <Link to="/landingpage">Home</Link>
            <Link to="/aboutme">About Me</Link>
            <Link to="/contact">Projects</Link>
            <Link to="/resume">Resume</Link>
        </Navigation>
      </Header>
      </div>
    )
  }
}

export default MyHeader;
