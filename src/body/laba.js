import React from "react";
import "./body.css";
import Content from './content/content'
import laba from "../img/laba.png";
import {Link} from "react-router-dom";

class Laba extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            list: '',
            name:''
        }
    }

    componentWillMount() {
        this.setState({name:this.props.match.params.name})
    }

    render() {
        return (
            <div className="body-main">
                {/*左侧列表*/}
                <div className="left-list">
                    <img src={laba} alt=""/>
                    <ul>
                        {/*路由跳转点*/}

                        <li><Link to="/home/diq/数据统计">数据统计</Link></li>
                        <li className="a-class">数据预测</li>
                        <li><Link to="/home/qiche/流量分析">流量分析</Link></li>
                        <li><Link to="/home/shanf/广告发布">广告发布</Link></li>
                    </ul>
                </div>
                {/*组件*/}
                <Content name={this.state.name}></Content>
            </div>
        );
    }
}

export default Laba;
