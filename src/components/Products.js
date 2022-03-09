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
    products:[]
  }
  // 生命周期函数 组件初次渲染完成执行
  componentDidMount() {
    axios.get('products').then(response => {
      console.log(response.data);
      // 修改数据
      this.setState({
        products:response.data
      })
    })
  }

  render() {
    return (
      <div>
        <ToolBox />
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
