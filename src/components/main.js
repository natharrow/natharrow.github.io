import React from 'react';
import {Switch, HashRouter, Route, BrowserRouter} from 'react-router-dom';

import Footer from './footer';
import About from './aboutme';
import Contact from './contact';
import Projects from './projects';
import Resume from './resume'
import LandingPage from './landingpage';


const Main = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path='/' component={LandingPage}/>
      <Route exact path="/landingpage" component={LandingPage}/>
      <Route exact path="/aboutme" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/resume" component={Resume}/>
    </Switch>
  </BrowserRouter>
)

export default Main;
