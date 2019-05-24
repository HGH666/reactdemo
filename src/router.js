import React from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Main from "./main/main";
import Body from "./body/body";


const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path='/home/main' component={Main}></Route>
            <Route path='/home/body' component={Body}></Route>
            <Redirect to="/home/main" />
        </Switch>
    </HashRouter>
)

export default BasicRoute;
