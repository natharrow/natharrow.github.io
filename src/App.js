import React, { Component } from 'react';
import './App.css';
import Main from './components/main';
import {Layout, Header, Drawer, Navigation, Content} from 'react-mdl';
import {Link} from 'react-router-dom';
import MyHeader from './components/header';
import Footer from './components/footer';

class App extends Component {
  render() {
    return (
      <div className="demo-big-content">
      <Layout>
        <MyHeader />
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
