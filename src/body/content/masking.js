import React from "react";
import './masking.css'

class masking extends React.Component{

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
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                                <th> </th>
                            </tr>
                       </tbody>
                   </table>
                </div>
            </div>
        )
    }
}

export default masking;