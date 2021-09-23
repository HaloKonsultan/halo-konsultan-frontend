import React from "react";
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect
} from "react-router-dom"
import Cookies from 'js-cookie';
import { Layout } from 'antd';
import Login from "../../auth/Login";
import Register from "../../auth/Register";
import {UserProvider} from "../context/UserContext";
import LayoutComponent from "../layout/Layout";
import Dashboard from "../pages/Dashboard/Dashboard";
import History from "../pages/History";
import Profile from "../pages/Profile";
import Message from "../pages/Message";

const Routes = () => {
    const LoginRoute = ({ ...props }) => {
        if (Cookies.get('token') === undefined) {
            return <LayoutComponent content={<Login />} />
        } else {
            return <Route {...props} />
        }
    }

    return (
        <>
            <Router>
                <Layout className="layout">
                    <UserProvider>
                        <Switch>
                            <LoginRoute path="/login" exact >
                                <LayoutComponent content={<Login />} />
                            </LoginRoute>
                            <Route path="/register" exact >
                                <LayoutComponent content={<Register />} />
                            </Route>

                            <LoginRoute path="/" exact >
                                <LayoutComponent content={<Dashboard />} />
                            </LoginRoute>
                            <LoginRoute path="/message" exact >
                                <LayoutComponent content={<Message />} />
                            </LoginRoute>
                            <LoginRoute path="/history" exact >
                                <LayoutComponent content={<History />} />
                            </LoginRoute>
                            <LoginRoute path="/profile" exact >
                                <LayoutComponent content={<Profile />} />
                            </LoginRoute>
                        </Switch>
                    </UserProvider>
                </Layout>
            </Router>
        </>
    )
}

export default Routes