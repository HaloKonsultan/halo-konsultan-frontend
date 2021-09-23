import React, { useContext } from "react"
import { Link, useHistory } from "react-router-dom"
import {Button, Layout, PageHeader} from 'antd';
import Cookies from "js-cookie";
import {UserContext} from "../context/UserContext";
import {LogoutOutlined} from '@ant-design/icons';
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
                        title="Dashboard"
                        extra={[
                            <Button key="1" size="large" type="text" onClick={handleLogout} danger>
                                <LogoutOutlined />Keluar
                            </Button>,
                        ]}
                    />
                }
            </Layout>
        </>
    )
}

export default Nav