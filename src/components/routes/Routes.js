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
import Dashboard from "../pages/Dashboard";

const Routes = () => {
    const LoginRoute = ({ ...props }) => {
        if (Cookies.get('token') === undefined) {
            return <Login/>
        } else {
            return <Route {...props} />
        }
    }

    return (
        <>
            <Router>
                <Layout className="layout">
                    <UserProvider>
                        <LoginRoute path="/login" exact >
                            <LayoutComponent content={<Login />} />
                        </LoginRoute>
                        <Route path="/register" exact >
                            <LayoutComponent content={<Register />} />
                        </Route>

                        <LoginRoute path="/" exact >
                            <LayoutComponent content={<Dashboard />} />
                        </LoginRoute>
                    </UserProvider>
                </Layout>
            </Router>
        </>
    )
}

export default Routes