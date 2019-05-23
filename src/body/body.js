import React from "react";
import "./body.css";
import Content from './content/content'

function Body() {
    return (
        <div className="body">
            <header>头部组件</header>
            <div className="body-main">
                {/*左侧列表*/}
                <div className="left-list">
                    <div className="img">img</div>
                    <ul >
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
        </div>
    );
}

export default Body;
