import React from "react"
import {Layout, Menu} from 'antd';
import Cookies from "js-cookie";
import {Link} from "react-router-dom"
import "../../assets/css/layout.css"
import Logo from "../../assets/img/logo.png";
import {MailOutlined, HomeOutlined, UserOutlined, HistoryOutlined} from '@ant-design/icons';
import Nav from "./Header";

const {SubMenu} = Menu;
const {Sider, Content} = Layout;

const LayoutComponent = (props) => {

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&

                    <Sider theme="light" width={266}
                           breakpoint="lg"
                           collapsedWidth="0"
                           onBreakpoint={broken => {
                               console.log(broken);
                           }}
                           onCollapse={(collapsed, type) => {
                               console.log(collapsed, type);
                           }}>
                        <div className="container-logo">
                            <img src={Logo} className="logo" alt=""/>
                        </div>
                        <Menu
                            mode="inline"
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1" icon={<HomeOutlined/>}><Link to="/">Beranda</Link></Menu.Item>
                            <Menu.Item key="2" icon={<MailOutlined/>}><Link to="/message">Pesan</Link></Menu.Item>
                            <Menu.Item key="3" icon={<HistoryOutlined/>}><Link to="/history">Riwayat</Link></Menu.Item>
                            <Menu.Item key="4" icon={<UserOutlined/>}><Link to="/profile/">Profil</Link></Menu.Item>
                        </Menu>
                    </Sider>
                }
                <Layout>
                    <Content style={{backgroundColor: "white"}}>
                        <div className="site-layout-content" style={{minHeight: "100vh"}}>
                            {props.content}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

export default LayoutComponent