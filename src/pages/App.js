// 导入 react
import React from 'react';
import Header from 'components/Header';
import Products from 'components/Products';
// 继承
class App extends React.Component {
    render() {
        return (
            <div className="main">
                <Header nickname="Admin" />
                <Products />
            </div>
        )
    }
}

// 导出
export default App;