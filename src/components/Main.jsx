import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import QuestionPage from './QuestionPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={QuestionPage} />
        <Route path="/aboutme" component={About} />
        <Route path="/question" component={QuestionPage} />
    </Switch>
);

export default Main;