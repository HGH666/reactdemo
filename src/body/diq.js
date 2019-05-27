import React from "react";
import "./body.css";
import Content from './content/content'
import diq from "../img/diq.png";

class Diq extends React.Component {
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
                    <img src={diq} alt=""/>
                    <ul>
                        {/*路由跳转点*/}
                        <li>数据统计</li>
                        <li>数据预测</li>
                        <li>流量分析</li>
                        <li>广告发布</li>
                    </ul>
                </div>
                {/*组件*/}
                <Content></Content>
            </div>
        );
    }
}

export default Diq;
