import React from "react";
import "./content.css"

class Content extends React.Component {
    constructor(props){
        super(props)
        this.state={
            sValue:'1'
        }
    }
    render() {
        return (
            <div className="content">
                <div className="content-top">
                    <h2>流量分析</h2>
                    <p>
                        的撒旦就卡死贷记卡是多久啊是大家哈十九点贷记卡上帝把杀手看见大家按时打卡是国际大师大事感到骄傲很少看见哈伺机待发计划的发几款和发动机卡刷卡
                        的撒旦就卡死贷记卡是多久啊是大家哈十九点贷记卡上帝把杀手看见大家按时打卡是国际大师大事感到骄傲很少看见哈伺机待发计划的发几款和发动机卡刷卡
                    </p>
                    <div className="shop">
                        <ul>
                            <li><span>购买数量:</span></li>
                            <li><span>产品类型:</span></li>
                            <li><span>有效时间:</span></li>
                            <li><span>产品版本:</span></li>
                            <li><span>总价:</span></li>
                        </ul>
                        <ul>
                            <li className="count-inp"><input type="button"  value="-" /><input id="inp" type="text" onChange={(e)=>{this.setState({sValue:e.target.value})}} value={this.state.sValue}/><input type="button" value="+"/></li>
                            <li><input type="button" value="入门版" /></li>
                            <li><input type="button" value="半年"/><input type="button" value="一年"/><input type="button" value="三年"/></li>
                            <li><input type="button" value="客户版"/><input type="button" value="代理商版"/><input type="button" value="专家版"/></li>
                            <li>29元</li>
                        </ul>
                    </div>
                    <button className="rButton back"> 立即购买</button>
                </div>
                <div className="content-bottom">
                    content-bottom
                </div>
            </div>
        )
    }
}

export default Content;