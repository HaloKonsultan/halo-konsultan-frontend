import React, {useContext, useEffect, useState} from "react"
import {Layout, Menu, Space, Typography} from 'antd';
import Cookies from "js-cookie";
import {Link} from "react-router-dom"
import "../../assets/css/layout.css"
import Logo from "../../assets/img/logo.png";
import {MailOutlined, HomeOutlined, UserOutlined, HistoryOutlined} from '@ant-design/icons';
import {ContextProfile} from "../context/ContextProfile";
import { CirclesFour, ChatCenteredDots, ClockCounterClockwise, User } from "phosphor-react";

const {SubMenu} = Menu;
const {Text} = Typography;
const {Sider, Content} = Layout;

const LayoutComponent = (props) => {
    const {input, setInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditBiodata} = functions

    console.log(input)
    useEffect(() => {
        fetchData()
    }, [])

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&

                    <Sider theme="light" width={266}
                           style={{border: "solid 1px lightgrey"}}
                           breakpoint="xs"
                           collapsedWidth="0"
                           onBreakpoint={broken => {
                               console.log(broken);
                           }}
                           onCollapse={(collapsed, type) => {
                               console.log(collapsed, type);
                           }}>
                        <div>
                            <img src={Logo}  className="logo" alt=""/>
                        </div>

                        <Space style={{marginTop: 32, marginBottom: 32}} >
                            <img src={input.photo} className="people" alt="" style={{
                                width: 40,
                                height: 40,
                                objectFit: "cover",
                                borderRadius: "50%",
                                marginLeft: "24px",
                            }}/>
                            <Space size={24} direction="vertical">
                                <Space size={4} direction="vertical">
                                    <Text strong>{input.name}</Text>
                                    <Text type="secondary">{input.position}</Text>
                                </Space>
                            </Space>
                        </Space>

                        <Menu
                            mode="inline" s
                            defaultSelectedKeys={['1']}
                        >
                            <Menu.Item key="1" icon={<CirclesFour size={24} weight="fill"/>}><Link to="/">Beranda</Link></Menu.Item>
                            <Menu.Item key="2" icon={<ChatCenteredDots size={24} weight="fill"/>}><Link to="/message">Pesan</Link></Menu.Item>
                            <Menu.Item key="3" icon={<ClockCounterClockwise size={24} weight="fill"/>}><Link to="/history">Riwayat</Link></Menu.Item>
                            <Menu.Item key="4" icon={<User size={24} weight="fill"/>}><Link to="/profile/">Profil</Link></Menu.Item>
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