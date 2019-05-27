import React from "react";
import './masking.css'

class masking extends React.Component{
    constructor(props){
        super(props)
        this.state ={
            show:"none"
        }
    }

    //选择银行事件
    maskingClick(e){
        // console.log(e.target);
        Array.from(e.target.parentNode.childNodes).map((item)=>{
            item.classList.remove("bank-border")
            return 0;
        })
        e.target.classList.add("bank-border")
        return
    }
    render() {
        return(
            <div className="masking">
                <div className="pop-up">
                   <table>
                       <tbody>
                            <tr>
                                <td>购买数量</td>
                                <td>产品类型</td>
                                <td>有效时间</td>
                                <td>产品版本</td>
                                <td>总价</td>
                            </tr>
                            <tr>
                                <th> {this.props.shop.num}</th>
                                <th> {this.props.shop.class}</th>
                                <th> {this.props.shop.time}</th>
                                <th> {this.props.shop.versions}</th>
                                <th> {this.props.shop.money}元</th>
                            </tr>
                       </tbody>
                   </table>
                    <div>
                        <h4 className="masking-h4">请选择银行</h4>
                        <div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>工商</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>农业</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>建设</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>交通</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>邮政</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>招商</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>中信</div>
                            <div className="bank-img" onClick={(e)=>{this.maskingClick(e)}}>中国银行</div>
                        </div>
                    </div>
                    <div className="shop-button"><button onClick={()=>this.props.change(this.state.show)}>确定</button><button onClick={()=>this.props.change(this.state.show)}>取消</button></div>
                </div>
            </div>
        )
    }
}

export default masking;