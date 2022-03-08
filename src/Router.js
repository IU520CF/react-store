// 路由：也是一个组件
import React from "react";
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import App from "pages/App"
import Login from "pages/Login";
import NotFound from "pages/NotFound";
const Router = () => (
    <BrowserRouter>
    <Switch>
        {/* exact 精确匹配 */}
        <Route path="/" exact component={App} />
        <Route path="/login" component={Login} />
        <Route component={NotFound} /> 
    </Switch>
    </BrowserRouter>
)
export default Router;




