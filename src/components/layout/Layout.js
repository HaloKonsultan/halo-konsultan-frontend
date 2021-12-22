import React, {useContext, useEffect, useState} from "react"
import {Layout, Menu, Space, Typography} from 'antd';
import Cookies from "js-cookie";
import {Link} from "react-router-dom"
import {useHistory} from "react-router";
import "../../assets/css/layout.css"
import Logo from "../../assets/img/logo.png";
import {ContextProfile} from "../context/ContextProfile";
import {CirclesFour, ChatCenteredDots, ClockCounterClockwise, User} from "phosphor-react";
import ReactNotificationComponent from "../pages/notification/ReactNotification";
import Notifications from "../pages/notification/Notifications";
import {onMessageListener} from "../../Firebase";
import {SERVER_NAME} from "../context/API";
import noImage from "../../assets/img/no-image.png";
import InputText from "../global/InputText";
import {ContextNotification} from "../context/ContextNotification";

const {SubMenu} = Menu;
const {Text} = Typography;
const {Sider, Content} = Layout;

const LayoutComponent = (props) => {
    let history = useHistory()
    const {input, functions} = useContext(ContextProfile)
    const {fetchData} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleMenu = (event) => {
        switch (event.key) {
            case "1":
                return history.push('/')
                break;
            case "2":
                return history.push('/message')
                break;
            case "3":
                return history.push('/history')
                break;
            case "4":
                return history.push('/profile')
                break;
        }
    }

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&

                    <Sider theme="light" width={266}
                           style={{border: "solid 1px lightgrey"}}
                           breakpoint="lg"
                           collapsedWidth="0"
                           trigger={null}
                    >
                        <div>
                            <img src={Logo} className="logo" alt=""/>
                        </div>

                        <Space style={{marginTop: 32, marginBottom: 32}}>
                            {
                                input.photo === SERVER_NAME + null &&
                                <img
                                    src={noImage}
                                    alt="profile-picture"
                                    style={{
                                        width: 40,
                                        height: 40,
                                        objectFit: "cover",
                                        borderRadius: "50%",
                                        marginLeft: "24px",
                                    }}/>
                                ||
                                <img src={input.photo} className="people" alt="" style={{
                                    width: 40,
                                    height: 40,
                                    objectFit: "cover",
                                    borderRadius: "50%",
                                    marginLeft: "24px",
                                }}/>
                            }
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
                            style={{color: "#B0B0B0"}}
                        >
                            <Menu.Item key="1" icon={<CirclesFour size={24} weight="fill"/>}
                                       onClick={handleMenu}>Beranda</Menu.Item>
                            <Menu.Item key="2" icon={<ChatCenteredDots size={24} weight="fill"/>}
                                       onClick={handleMenu}>Pesan</Menu.Item>
                            <Menu.Item key="3" icon={<ClockCounterClockwise size={24} weight="fill"/>}
                                       onClick={handleMenu}>Riwayat</Menu.Item>
                            <Menu.Item key="4" icon={<User size={24} weight="fill"/>}
                                       onClick={handleMenu}>Profil</Menu.Item>
                        </Menu>
                    </Sider>
                }
                <Layout>
                    <Content style={{backgroundColor: props.backgroundColor}}>
                        <div className="site-layout-content" style={{minHeight: "100vh"}}>
                            {props.content}
                        </div>
                    </Content>
                </Layout>
            </Layout>
        </>
    )
}

LayoutComponent.defaultProps = {
    backgroundColor: "#F7F8FA"
};

export default LayoutComponent