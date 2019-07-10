import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import QuestionPage from './QuestionPage';

const Main = () => (
    <Switch>
        <Route exact path="/" component={QuestionPage} />
        {/* <Route render ={()=> < QuestionPage />} path="/" />  */}
        <Route path="/aboutme" component={About} />
        <Route render ={()=> < QuestionPage />} path="/question" /> 
    </Switch>
);

export default Main;