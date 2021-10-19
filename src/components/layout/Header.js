import React, {useContext} from "react"
import {useHistory} from "react-router-dom"
import {Button, Layout, PageHeader} from 'antd';
import {useLocation} from 'react-router-dom'
import Cookies from "js-cookie";
import {UserContext} from "../context/UserContext";
import {LogoutOutlined} from '@ant-design/icons';

const {Header, Content, Footer} = Layout;

const Nav = () => {
    let history = useHistory()
    const {loginStatus, setLoginStatus} = useContext(UserContext)
    const location = useLocation();

    console.log(location)

    const handleLogout = () => {
        setLoginStatus(false)
        Cookies.remove('token')
        Cookies.remove('id')
        Cookies.remove('location')
        history.push('/')
    }

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&
                    <PageHeader
                        style={{backgroundColor: "white", borderBottom: "1px solid #CED4DA"}}
                        title={Cookies.get('page')}
                        extra={[
                            <Button key="1" size="large" type="text" onClick={handleLogout} danger>
                                <LogoutOutlined/>Keluar
                            </Button>,
                        ]}
                    />

                }
            </Layout>
        </>
    )
}

export default Nav