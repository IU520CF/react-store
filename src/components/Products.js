// 导入 react
import React from 'react';
import ToolBox from 'components/ToolBox';
import Product from 'components/Product';


// 继承
class Products extends React.Component {
    // 细节决定成败
    product = {
        name:'Air Jordan 4',
        tags:'45 Colors',
        image:'images/1.jpg',
        price:'59440',
        status:'available'
    }

   
      


    render() {
        return (
            <div>
                <ToolBox />
                <div className="products">
                    <div className="columns is-multiline is-desktop">
                        {/* 布局一行12，每行3 */}
                        <div className="column is-3">
                        <Product product={this.product} />
                        </div>
                        {/* <div className="column is-3">
                        <Product />
                        </div>
                        <div className="column is-3">
                        <Product />
                        </div>
                        <div className="column is-3">
                        <Product />
                        </div>
                        <div className="column is-3">
                        <Product />
                        </div> */}
                    </div>
                    
                    
                </div>
            </div>
        )
    }
}

// 导出
export default Products;