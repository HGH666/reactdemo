import React from "react";
import "./content.css"
import Masking from "../masking.js"

class Content extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            num: '1',
            class: '入门版',
            time: '半年',
            versions: '客户版',
            money: '29',
            show: 'none'
        }
    }

    render() {
        return (
            <div className="content">
                <div className="content-top">
                    <h2>{this.props.name}</h2>
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
                            <li className="count-inp">
                                <input type="button" value="-" onClick={() => {
                                    this.fRemove()
                                }}/>
                                <input id="inp" type="text"
                                       onChange={(e) => {
                                           this.setState({num: e.target.value})
                                           this.myCount(e.target.value)
                                       }}
                                       value={this.state.num}
                                />
                                <input type="button" value="+" onClick={() => {
                                    this.fAdd()
                                }}/></li>
                            <li><input type="button" value="入门版" className='back' onClick={(e) => {
                                this.myClass(e)
                                this.myClick(e)
                            }}/></li>
                            <li><input type="button" value="半年" className='back' onClick={(e) => {
                                this.myTime(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/><input type="button" value="一年" onClick={(e) => {
                                this.myTime(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/><input type="button" value="三年" onClick={(e) => {
                                this.myTime(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/>
                            </li>
                            <li><input type="button" value="客户版" className='back' onClick={(e) => {
                                this.myVersions(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/><input type="button" value="代理商版" onClick={(e) => {
                                this.myVersions(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/><input
                                type="button" value="专家版" onClick={(e) => {
                                this.myVersions(e)
                                this.mydel(e)
                                this.myClick(e)
                            }}/></li>
                            <li>{this.state.money}元</li>
                        </ul>
                    </div>
                    <button className="rButton back" onClick={(e) => {
                        this.myShop(e)
                    }}> 立即购买
                    </button>
                </div>
                <div style={{display: this.state.show}}><Masking shop={this.state}
                                                                 change={(e) => this.onChange(e)}></Masking></div>
                <div className="content-bottom">
                    <h2>产品说明</h2>
                    <p>啊受打击啊啥的看哈数据库的哈就开始大家啊手机打开是打卡时间肯定会啊手机客户端金卡圣诞节卡是捷克的按时可见度</p>
                    <h3>用户行为指标</h3>
                    <p>按时的金卡岁的卢卡斯克拉的卡是 爱上了的距离喀什建立咔叽顺口溜就爱上了空间绿卡降水量可达骄傲两款手机的卢卡斯离开的</p>
                    <h3>浏览网站方式</h3>
                    <p>撒娇的卢卡斯就的骄傲上来看就爱上了空间的垃圾速度快阿贾克斯来得及拉萨距离喀什角动量看案件考虑到奥斯陆扩大就拉萨看得见老咔叽的绿卡</p>
                </div>
            </div>
        )
    }

    // class添加移除事件
    myClick(e) {
        if (e.target.className === 'back') {
            e.target.classList.remove("back")
        } else {
            e.target.classList.add("back")
        }
    }

    // 移除class事件
    mydel(e) {
        Array.from(e.target.parentNode.childNodes).map((item) => {
            item.classList.remove('back');
            return 0;
        })
        return;
    }

    myClass(e) {
        this.setState({class: e.target.value})
    }

    myTime(e) {
        this.setState({time: e.target.value})
    }

    myVersions(e) {
        this.setState({versions: e.target.value})
    }

    // 加事件
    fRemove() {
        let i = this.state.num;
        i--;
        this.setState({num: i})
        this.myCount(i);
    }

    // 减事件
    fAdd() {
        let i = this.state.num;
        i++;
        this.setState({num: i});
        this.myCount(i);
    }

    //计算数量事件
    myCount(i) {
        console.log(i);
        this.setState({money: i * 29})
    }

    //弹框事件
    myShop(e) {
        this.setState({show: "block"})
    }

    //修改事件
    onChange(e) {
        console.log(e);
        this.setState({show: e})
    }
}

export default Content;
