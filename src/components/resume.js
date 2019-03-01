import React, { Component } from 'react';
import Footer from './footer';
import MyHeader from './header';

class Resume extends Component {
  render() {
    return(
      <div>
        <MyHeader />
        <div className="mdl-grid--no-spacing">
          <div className="mdl-cell mdl-cell--50-col">
          </div>
        </div>
        <div>Resume</div>
        <Footer />
      </div>
    )
  }
}

export default Resume;
