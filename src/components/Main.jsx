import React from 'react';
import LandingPage from './LandingPage';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import QuestionPage from './QuestionPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={About} />
        <Route path="/question" component={QuestionPage} />
    </Switch>
);

export default Main;