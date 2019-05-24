import React from 'react';
import styles from './main.module.scss';
import Lunbo from '../swiper/swiper'
import Product from "../product/product";


class Main extends React.Component {
    render() {
        return(
            <div className= {styles.main}>
                <div className={styles.silde}>
                    <div className={styles.sildetop}>
                        <h1 className={styles.sildetitle}>全部产品</h1>
                        <div className="sildelist">
                            <h2>PC产品</h2>
                            <ul>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                            </ul>
                        </div>
                        <div className="sildelist">
                            <h2>手机应用类</h2>
                            <ul>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                                <li>撒发射点</li>
                            </ul>
                        </div>
                    </div>
                    <div className={styles.sildebom}>
                        <h1 className={styles.sildetitle}>最新消息</h1>
                        <div className="sildelist">
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
