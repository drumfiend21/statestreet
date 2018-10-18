import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './App.css';
import Main from "./Main";
import Detail from "./Detail";

const App = () => (
    <Switch>
        <Route exact path='/' component={Main}/>
        <Route path='/detail/:id' component={Detail}/>
    </Switch>
)

export default App
