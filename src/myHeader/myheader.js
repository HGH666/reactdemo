import logo from "../img/logo.svg";
import React from "react";
import './myheader.scss'


class Myheader extends React.Component{
    render() {
        return(
            <header>
                <div className="head">
                    <div className="logo">
                        <img src={logo} alt="logo"/>
                    </div>
                    <div className="login">
                        <span>登录</span>
                        <span>注册</span>
                        <span>关于</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Myheader;
