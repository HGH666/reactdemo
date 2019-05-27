import React from "react";
import "./body.css";
import Content from './content/content'
import qiche from "../img/qiche.png";
import {Link} from "react-router-dom";

class Qiche extends React.Component {
    constructor(props){
        super(props)
        this.state={
            list:''
        }
    }

    render() {
        return (
            <div className="body-main">
                {/*左侧列表*/}
                <div className="left-list">
                    <img src={qiche} alt=""/>
                    <ul>
                        {/*路由跳转点*/}
                        <li><Link to="/home/diq">数据统计</Link></li>
                        <li><Link to="/home/laba">数据预测</Link></li>
                        <li className="a-class">流量分析</li>
                        <li><Link to="/home/shanf">广告发布</Link></li>
                    </ul>
                </div>
                {/*组件*/}
                <Content></Content>
            </div>
        );
    }
}

export default Qiche;