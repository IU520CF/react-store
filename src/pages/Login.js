// 导入 react， react在每个组件都要导入
import React from "react";

// 组件首字母大写
class Login extends React.Component {

    // 小写
    state = {
       email:'',
       password:''
    };

    handleSubmit = event => {
        // 1.阻止from表达默认行为
        event.preventDefault();
        // 2.获取表单数据
       console.log(this.state)
        // 3.处理登录逻辑

        // 4.跳转到首页视图
        // this.props.history.push('/')
    }

    handleChange = e => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }


    // render 方法的作用就是返回组件的内容
    render() {
        return (
            <div className="login-wrapper">

                <form className="box login-box" onSubmit={this.handleSubmit}>
                   <div className="field">
                       <label htmlFor="" className="label">Email</label>
                       <div className="control">
                           <input type="text" className="input" placeholder="Email" name="email" value={this.state.email} onChange={this.handleChange} />
                       </div>
                   </div>
                   <div className="field">
                       <label htmlFor="" className="label">Password</label>
                       <div className="control">
                           <input type="password" className="input" placeholder="Password" name="password" value={this.state.password} onChange={this.handleChange}  />
                       </div>
                   </div>
                   <div className="control">
                       <button className="button is-fullwidth is-primary">Login</button>
                   </div>
                </form>
                
                </div>
        ) 
        // JSX 是javascript 的扩展（在js文件直接写HTML标签） 它需要一个转码器 Babel 用 create-react-app 创建好的项目它默认配置好了 
        // ElEment: 在jsx 写html代码 就像 在html文件中写代码一样使用快捷方式
    }
}

// 组件导出
export default Login;