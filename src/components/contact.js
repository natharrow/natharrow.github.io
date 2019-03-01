import React, { Component } from 'react';
import Footer from './footer';
import MyHeader from './header';

class Contact extends Component {
  render() {
    return(
      <div>
        <MyHeader />
        <div className="mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--50-col">
          </div>
        </div>
        <div>Projects</div>
        <Footer />
      </div>
    )
  }
}

export default Contact;
