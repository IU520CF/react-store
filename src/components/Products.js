// 导入 react
import React from "react";
// 导入 axios
import axios from "commons/axios"
import ToolBox from "components/ToolBox";
import Product from "components/Product";

// 继承
class Products extends React.Component {
  // 细节决定成败
  state = {
    products:[],
    sourceProducts:[]
  }
  // 生命周期函数 组件初次渲染完成执行
  componentDidMount() {
    axios.get('products').then(response => {
      console.log(response.data);
      // 修改数据
      this.setState({
        products:response.data,
        sourceProducts:response.data
      })
    })
  }

  // search 搜索
  search = text => {
    console.log(text);
    // 1. 拿到数组  结构赋值（es6复制一个）
    let _products = [...this.state.sourceProducts]
    // 2. 过滤数组
    _products = _products.filter(p => {
      // g全局 i不区分大小写
      const matchArray = p.name.match(new RegExp(text,'gi'))
      // 不为空返回
      return !!matchArray
    })
    // 3. 过来后的数组
    this.setState({
      products : _products
    })
  }

  render() {
    return (
      <div>
        <ToolBox search={this.search} />
        <div className="products">
          <div className="columns is-multiline is-desktop">

            {
                this.state.products.map(p => {
                    return (
                        <div className="column is-3" key={p.id}>
                            <Product product={p} />
                        </div> 
                    )
                })
            }
          </div>
        </div>
      </div>
    );
  }
}

// 导出
export default Products;

