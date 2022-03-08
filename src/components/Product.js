import React from "react";
// 导入货币组件
import { formatprice } from "commons/helper";
class Product extends React.Component {
  render() {
    // props 传值 数据格式化
    const { name, tags, image, price, status } = this.props.product;
    const _pClass = {
      available: 'product',
      unavailable:'product out-stock'
    }
    return (
      <div className={_pClass[status]}>
        <div className="p-content">
          <div className="img-wrapper">
            <div className="out-stock-text">Out Of Stock</div>
            <figure className="image is-4by3">
              <img src={image} alt={name} />
            </figure>
          </div>
          <p className="p-tags">{tags}</p>
          <p className="p-name">{name}</p>
        </div>
        <div className="p-footer">
          {/* 使用组件不用this */}
          <p className="price">{formatprice(price)}</p>
          <button className="add-cart" disabled={status === 'unavailable'}>
            <i className="fas fa-shopping-cart"></i>
            <i className="fas fa-exclamation"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Product;
