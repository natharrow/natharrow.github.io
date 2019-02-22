import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <Header className="header-color" title="Natalia Harrow" scroll>
          <Navigation>
              <Link to="/landingpage">Home</Link>
              <Link to="/aboutme">About Me</Link>
              <Link to="/resume">Resume</Link>
              <Link to="/contact">Contact</Link>
          </Navigation>
        </Header>
        <Content>
          <div className="page-content" />
          <Main/>
        </Content>
      <Footer className="myfooter"/>
      </Layout>
  </div>
    );
  }
}

export default App;
