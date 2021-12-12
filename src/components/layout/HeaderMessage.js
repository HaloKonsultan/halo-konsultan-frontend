import React, {useContext, useState} from "react"
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie";
import Logo from "../../assets/img/logo.png";
import {Button, Layout, PageHeader, Row, Col, Space, Typography, Drawer, Menu, Modal, Form} from 'antd';
import {CirclesFour, ChatCenteredDots, ClockCounterClockwise, User, List} from "phosphor-react";
import {ContextMessage} from "../context/ContextMessage"
import {SignOut} from "phosphor-react";
import API from "../context/API";
import ButtonDanger from "../global/ButtonDanger"
import PrimaryButton from "../global/ButtonPrimary"
import {ContextProfile} from "../context/ContextProfile";
import {ContextUser} from "../context/ContextUser";
import {SERVER_NAME} from "../context/API";
import noImage from "../../assets/img/no-image.png";
const {Text, Title} = Typography;
const {Sider} = Layout;

const NavMessage = (props) => {
    let history = useHistory()
    const {functions} = useContext(ContextMessage)
    const {input, setInput} = useContext(ContextProfile)
    const {loginStatus, setLoginStatus} = useContext(ContextUser)
    const {functionEndForum} = functions
    const [isEndForum, setIsEndForum] = useState(false);

    const handleLogout = () => {
        setLoginStatus(false)
        Cookies.remove('token')
        Cookies.remove('id')
        Cookies.remove('location')
        API.post(`consultants/logout`, {},
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
        history.push('/')
    }

    const showModal = () => {
        setIsEndForum(true);
    };

    const handleCancel = () => {
        setIsEndForum(false);
    };

    const onFinish = () => {
        functionEndForum()
        setIsEndForum(false);
    };
    
    const handleMenu = (event) => {
        console.log(event.key)
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

    const [visible, setVisible] = useState(false);
    const showDrawer = () => {
        setVisible(true);
    };
    const onClose = () => {
        setVisible(false);
    };

    return (
        <>
            <Layout>
            {
             Cookies.get('token') !== undefined &&
             <>
                 <Row>
                 <Col xs={{span: 0, order: 2}} sm={{span: 0, order: 2}} lg={{span: 24, order: 1}}>
                    <PageHeader
                        onBack={props.onBack}
                        style={{backgroundColor: "white", borderBottom: " 1px solid #CED4DA", width:"100%"}}
                        title={props.title}
                        extra={[
                            <Button  key="1" size="large"
                            danger 
                            style= {{borderRadius: 8}}
                            onClick={showModal}>
                                    <Row>
                                        <Col span={12}>Akhiri Diskusi</Col>
                                    </Row>
                          </Button>
                        ]}
                    />
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 0, order: 2}}>
                                <PageHeader
                                    onBack={props.onBack}
                                    style={{backgroundColor: "white"}}
                                    title={<img src={Logo} style={{width: 150}} alt=""/>}
                                    extra={[
                                    <Button type="text" onClick={showDrawer}>
                                        <List size={24} />
                                    </Button>
                                    ]}
                                />
                            </Col>
                            <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 0}} style={{backgroundColor: "white", marginTop: 0}}>
                                <div style={{backgroundColor: "white", margin: "16px 32px 16px 32px", display: props.mobile}}>
                                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                                        <Text style={{justifyContent: "center", fontWeight: 700, fontSize: 24}}>{props.mobileTitle}</Text>
                                    </Space>
                                </div>
                            </Col>
                        </Row>

                         <Drawer 
                         placement="right"
                         onClose={onClose} 
                         visible={visible}
                         >
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
                             <Menu.Item key="5" type="link" icon={<SignOut size={24} weight="fill"/>}
                                     onClick={handleLogout} danger>Keluar</Menu.Item>
                         </Menu>
                     </Drawer>
                    </>
                 }

                <Modal
                    className="profile-modal"
                    title={<Title level={4}>Apakah Anda ingin mengakhiri percakapan ini ?</Title>}
                    visible={isEndForum}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <Form
                        name="basic"
                        initialValues={{
                            remember: true,
                        }}
                        layout="vertical"
                        onFinish={onFinish}
                        //onFinishFailed={onFinishFailed}
                        autoComplete="off"
                    >
                        <Form.Item>
                            <Row>
                                <Col span={12}>
                                    <div style={{marginRight: 4}}>
                                        <PrimaryButton onClick={handleCancel} text="Lanjutkan Percakapan"/>
                                    </div>
                                </Col>
                                <Col span={12}>
                                    <div style={{marginLeft: 4}}>
                                        <ButtonDanger htmlType="submit" text="Akhiri Diskusi"/>
                                    </div>
                                </Col>
                            </Row>
                        </Form.Item>
                    </Form>
                </Modal>
            </Layout>
        </>
    )
}

NavMessage.defaultProps = {
    mobile: "none",
};

export default NavMessage