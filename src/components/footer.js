import React, {Component} from 'react';
import {footer} from 'react-mdl';

class Footer extends Component{
  render() {
    return(
      <div className="mdl-footer">
        <footer className="mdl-mini-footer">
          <div className="social-links">
            {/*LinkedIn*/}
            <a href="https://LInkedin.com/in/nataliaharrow/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-linkedin-square" aria-hidden="true" />
            </a>
            {/*GitHub*/}
            <a href="https://github.com/nataliaharrow" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-github-square" aria-hidden="true" />
            </a>
            {/*Instagram*/}
            <a href="https://instagram.com/nataliaharrow/" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-instagram" aria-hidden="true" />
            </a>
            <a href="https://google.com" rel="noopener noreferrer" target="_blank">
              <i className="fa fa-envelope" aria-hidden="true"></i>
            </a>
          </div>
        </footer>
      </div>
    )
  }
}

export default Footer;
