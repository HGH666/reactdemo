import React from 'react'
import './product.css';
import diq from "../img/diq.png";
import laba from "../img/laba.png";
import qiche from "../img/qiche.png";
import shanf from "../img/shanf.png";
import {Link} from 'react-router-dom';

class Product extends React.Component{
    render() {
        return(
            <div className="product">
                <div className="product-list">
                    <img src={diq} alt="地球"/>
                    <div className="product-right">
                        <h1>会计师</h1>
                        <p>啊可是大家放假啊贷款发放就</p>
                        <div className="btn"><Link to="/home/diq/数据统计"> 立即购买 </Link></div>
                </div>
                </div>
                <div className="product-list">
                    <img src={laba} alt="laba"/>
                    <div className="product-right">
                        <h1>会计师</h1>
                        <p>啊可是大家放假啊贷款发放就</p>
                        <div className="btn"><Link to="/home/laba/数据预测"> 立即购买 </Link></div>
                    </div>
                </div>
                <div className="product-list">
                    <img src={qiche} alt="qiche"/>
                    <div className="product-right">
                        <h1>会计师</h1>
                        <p>啊可是大家放假啊贷款发放就</p>
                        <div className="btn"><Link to="/home/qiche/流量分析"> 立即购买 </Link></div>
                    </div>
                </div>
                <div className="product-list">
                    <img src={shanf} alt="shanf"/>
                    <div className="product-right">
                        <h1>会计师</h1>
                        <p>啊可是大家放假啊贷款发放就</p>
                        <div className="btn"><Link to="/home/shanf/广告发布"> 立即购买 </Link></div>
                    </div>
                </div>
            </div>
        )
    }
}

export default Product
