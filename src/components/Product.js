import React from "react";
// 导入货币组件
import { formatprice } from "commons/helper"
class Product extends React.Component {

 
  render() {
    // props 传值 数据格式化
    const {name, tags, image, price } = this.props.product
    return (
      <div className="product">
        <div className="p-content">
          <div className="img-wrapper">
            <figure className="image is-4by3">
              <img src={image} alt={name}/>
            </figure>
            <p className="p-tags">{tags}</p>
            <p className="p-name">{name}</p>
          </div>
        </div>
        <div className="p-footer">
          {/* 使用组件不用this */}
          <p className="price">{formatprice(price)}</p>
          <button className="add-cart">
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
