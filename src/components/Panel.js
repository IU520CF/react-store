// 弹出层组件
/**
 * 需求：
 * 一次渲染，随需调用
 * 装载组件
 */

import React from "react";
import {render} from 'react-dom'
class Panel extends React.Component {
    state = {
        // 遮罩层开关
        active:false
    }
    // 关闭遮罩
    close = () =>{
        this.setState({
            active:false
        })
    }
    // 打开遮罩
    open = () => {
        this.setState({
            active:true
        })
    }
    render() {
        const _class = {
            true:'panel-wrapper active',
            false:'panel-wrapper'
        }
        return (
            <div className={_class[this.state.active]}>
                <div className="over-layer" onClick={this.close}></div>
                <div className="panel">
                    <div className="head">
                        <span className="close" onClick={this.close}>x</span>
                        <p className="has-text-centered">
                            Children Component
                        </p>
                    </div>
                </div>
            </div>
        )
    }
}

const _div = document.createElement('div')
// 把div放到body体里面
document.body.appendChild(_div)

const _panel = render(<Panel />, _div)
console.log(_panel)
export default _panel;