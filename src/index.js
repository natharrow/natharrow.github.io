import React from 'react';
import ReactDOM from 'react-dom';
import {Switch, HashRouter, Route, BrowserRouter} from 'react-router-dom';
import './index.css';
import App from './App';
import Main from './components/main'
//import registerServiceWorker from './registerServiceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';

ReactDOM.render(
  <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Main />
  </BrowserRouter>
  , document.getElementById('root'));
// registerServiceWorker();
