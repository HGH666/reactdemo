import React from 'react';
import './Home.css';
import Myheader from "../myHeader/myheader";
import Main from "../main/main"
import Body from "../body/body"

function Home() {
    return (
        <div className="home">
            <Myheader/>
            <Main />
            <footer>Hgh & Yang联合出品</footer>
        </div>
    )
}

export default Home;
