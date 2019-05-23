import React from 'react';
import './main.css';
import Lunbo from '../swiper/swiper'
import Product from "../product/product";


class Main extends React.Component {
    constructor(props){
        super(props)
    }

    render() {
        return(
            <div className="main">
                <div className="silde">
                    <div className="silde-top">
                        <h1 className="silde-title">全部产品</h1>
                        <div className="silde-list">
                            <h2>PC产品</h2>
                            <ul>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                            </ul>
                        </div>
                        <div className="silde-list">
                            <h2>手机应用类</h2>
                            <ul>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                            </ul>
                        </div>
                    </div>
                    <div className="silde-bom">
                        <h1 className="silde-title">最新消息</h1>
                        <div className="silde-list ">
                            <ul>
                                <li>烧录卡就是打开房间埃里克森</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                            </ul>
                        </div>
                    </div>
                </div>
                <div style={{width: 700 + 'px'}} >
                    <Lunbo></Lunbo>
                    <Product></Product>
                </div>
            </div>
            )

    }
}

export default Main
