import React from 'react';
import {HashRouter, Route, Switch,Redirect} from 'react-router-dom';
import Main from "./main/main";
import Diq from "./body/diq";
import Laba from "./body/laba";
import Qiche from "./body/qiche";
import Shanf from "./body/shanf";

const BasicRoute = () => (
    <HashRouter>
        <Switch>
            <Route path='/home/main' component={Main}></Route>
            <Route path='/home/diq/' component={Diq}></Route>
            <Route path='/home/laba/' component={Laba}></Route>
            <Route path='/home/qiche/' component={Qiche}></Route>
            <Route path='/home/shanf/' component={Shanf}></Route>
            <Redirect to="/home/main" />
        </Switch>
    </HashRouter>
)

export default BasicRoute;
