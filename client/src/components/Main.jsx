import React from 'react';
import { Switch, Route } from 'react-router-dom';
import About from './About';
import QuestionPage from './QuestionPage';

const Main = () => (
    <Switch>
        <Route render ={()=> < QuestionPage />} path="/" /> 
        <Route render ={()=> < About />} path="/aboutme" /> 
        <Route render ={()=> < QuestionPage />} path="/question" /> 
    </Switch>
);

export default Main;