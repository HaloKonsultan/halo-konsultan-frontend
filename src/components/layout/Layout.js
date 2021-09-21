import React, { useContext } from "react"
import {Layout, Menu} from 'antd';
import Cookies from "js-cookie";
import { Link, useHistory } from "react-router-dom"
import "../../assets/css/layout.css"
import Nav from "./Header";
import Logo from "../../assets/img/logo.png";
import {UserContext} from "../context/UserContext";
const { SubMenu } = Menu;
const { Sider, Content } = Layout;

const LayoutComponent = (props) => {
    let history = useHistory()
    const { loginStatus, setLoginStatus } = useContext(UserContext)

    const handleLogout = () => {
        setLoginStatus(false)
        Cookies.remove('token')
        Cookies.remove('name')
        Cookies.remove('email')
        history.push('/login')
    }

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&

                    <Sider theme="light" width={266} className="site-layout-background">
                        <div className="container-logo">
                            <img src={Logo} className="logo" alt=""/>
                        </div>
                        <div className="side-menu">
                            <Menu
                                mode="inline"
                                defaultSelectedKeys={['1']}
                                defaultOpenKeys={['sub1']}
                                style={{
                                    height: '100%',
                                    borderRight: 0,
                                    fontSize: 13,}}
                            >
                                <Menu.Item key="1"><Link to="/">  Beranda</Link></Menu.Item>
                                <Menu.Item key="2"><Link to="/">  Pesan</Link></Menu.Item>
                                <Menu.Item key="3"><Link to="/">  Riwayat</Link></Menu.Item>
                                <Menu.Item key="4"><Link to="/"> Profil</Link></Menu.Item>
                                <Menu.Item key="5" onClick={handleLogout}><span >Logout</span></Menu.Item>
                            </Menu>
                        </div>
                    </Sider>
                }
                <Layout>
                    <Nav/>
                    <Content>
                        <div className="site-layout-content" style={{ minHeight: "100vh" }}>
                            {props.content}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutComponent