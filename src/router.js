import React from 'react';
import {HashRouter, Route, Switch} from 'react-router-dom';
import Home from './home/Home.js';


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/home" component={Home}/>
        </Switch>
    </HashRouter>
)

export default BasicRoute;
