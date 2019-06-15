import React from 'react';
import { Route, Redirect, Switch } from "react-router-dom";
//路由拦截，需登录
import PrivateRoute from './components/PrivateRoute';

//page
import Home from './pages/home/home';
import Login from './pages/login/login';
import Assignment from './pages/assignment/assignment';
import Register from './pages/register/register';



const routes = (
    <Switch>
        <Route path="/" exact render={() => (<Redirect to="/home"/>)}/>
        <Route path="/home" component={Home} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
        <Route path="/assignment" component={Assignment} />
    </Switch>
);

export default routes;

// 懒加载写法 最后分页面打包js 目前所有页面都打包成一个js文件的 所以文件很大
// import Bundle from './bundle.js';
// import ChangePasswordContainer from 'bundle-loader?lazy&name=page-[name]!./pages/changePassword/changePassword'

// const ChangePassword = (props) => (
//     <Bundle load={ChangePasswordContainer}>
//         {(ChangePassword) => <ChangePassword {...props}/>}
//     </Bundle>
// )

// <Route path="/changePassword" component={ChangePassword}/>
