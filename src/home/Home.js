import React from 'react';
import './Home.css';
import Myheader from "../myHeader/myheader";
import Router from '../router'

function Home() {
    return (
        <div className="home">
            <Myheader/>
            <Router/>
            <footer>Hgh & Yang 联合出品</footer>
        </div>
    )
}

export default Home;





