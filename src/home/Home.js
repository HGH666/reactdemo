import React from 'react';
import './Home.css';
import Myheader from "../myHeader/myheader";
import Main from "../main/main"
import Body from "../body/body"
import {HashRouter, Route ,Redirect} from 'react-router-dom';

function Home() {
    return (
        <div className="home">
            <Myheader/>
            <HashRouter>
                <Route exact path="/home" render={() => <Redirect to='/home/main'/>}/>
                <Route path='/home/main' component={Main}></Route>
                <Route path='/home/body' component={Body}></Route>
            </HashRouter>
            <footer>Hgh & Yang联合出品</footer>
        </div>
    )
}

export default Home;





