import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import {Layout, PageHeader} from 'antd';
import Cookies from "js-cookie";
import {UserContext} from "../context/UserContext";
const { Header, Content, Footer } = Layout;


const Nav = () => {
    let history = useHistory()
    const { loginStatus, setLoginStatus } = useContext(UserContext)

    const handleLogout = () => {
        setLoginStatus(false)
        Cookies.remove('token')
        Cookies.remove('name')
        Cookies.remove('email')
        history.push('/')
    }

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&
                    <PageHeader
                        style={{backgroundColor: "white"}}
                        className="site-page-header"
                    >
                        <ul className="header-menu">
                            <li><p className="title">Dashboard</p></li>
                            <li><p className="logout">Logout</p></li>
                        </ul>
                    </PageHeader>
                }
            </Layout>
        </>
    )
}

export default Nav