import React from 'react';
import LandingPage from './landingpage';
import { Switch, Route } from 'react-router-dom';
import About from './aboutme';
import QuestionPage from './questions';

const Main = () => (
    <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/aboutme" component={About} />
        <Route path="/question" component={QuestionPage} />
    </Switch>
);

export default Main;