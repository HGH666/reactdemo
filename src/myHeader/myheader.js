import logo from "../img/logo.svg";
import React from "react";
import './myheader.scss'
import {HashRouter, Link} from 'react-router-dom';

class Myheader extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            mask: 'none',
            login: 'none',
            denglu: 'inline-block',
            user: '',
            psd: '',
            abt: '注册',
            name: '登录'
        }
    }

    changeMask() {
        this.setState({
            mask: 'block'
        })
    }

    changeUser(e) {
        this.setState({
            user: e.target.value
        })
    }

    changePsd(e) {
        this.setState({
            psd: e.target.value
        })
    }

    checkVal() {
        if (this.state.user === "admin" && this.state.psd === "admin") {
            this.setState({
                name: this.state.user,
                abt: "注销",
                mask: 'none',
                login: 'inline-block',
                denglu: 'none',
            })
        }else {
            this.setState({
                user: '',
                psd: '',
            })
            alert("请输入正确用户名和密码")
        }
    }

    zhuX() {
        this.setState({
            abt: "注册",
            login: 'none',
            denglu: 'inline',
        })

    }

    componentDidMount() {
        this.refs.login.addEventListener('keydown', (e) => {
            var theEvent = window.event || e;
            var code = theEvent.keyCode || theEvent.which || theEvent.charCode;
            if (code === 13) {
                this.checkVal()
            }
            if (code === 27) {
                this.setState({
                    mask: 'none',
                })
            }
        })
    }

    render() {
        return (
            <header>
                <div className="logon" ref='login' style={{display: this.state.mask}}>
                    <div className="inpitem">
                        账号：<input type="text" placeholder="请输入用户名" value={this.state.user}
                                  onChange={(e) => this.changeUser(e)}/>
                    </div>
                    <div className="inpitem">
                        密码：<input type="password" value={this.state.psd} onChange={(e) => this.changePsd(e)}
                                  placeholder="请输入密码"/>
                    </div>
                    <button onClick={() => this.setState({mask: "none"})}>返回</button> <button type="submit" onSubmit={() => this.checkVal()} style={{background: '#1E90FF'}}
                            onClick={() => this.checkVal()}>确认
                    </button>

                </div>
                <div className="mask" style={{display: this.state.mask}}></div>
                <div className="head">
                    <HashRouter>
                        <Link to="/home">
                            <div className="logo">
                                <img src={logo} alt="logo"/>
                            </div>
                        </Link>
                    </HashRouter>


                    <div className="login">
                        <span onClick={() => this.changeMask()} style={{display: this.state.denglu}}>登录</span>
                        <span style={{display: this.state.login}}>{this.state.name}</span>
                        <span style={{display: this.state.denglu}}>{this.state.abt}</span>
                        <span style={{display: this.state.login}} onClick={() => this.zhuX()}>{this.state.abt}</span>
                        <span>关于</span>
                    </div>
                </div>
            </header>
        )
    }
}

export default Myheader;
