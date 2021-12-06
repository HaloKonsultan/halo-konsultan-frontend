import React, {useContext} from "react"
import {useHistory, useLocation} from "react-router-dom"
import {Button, Layout, PageHeader, Row, Col, Space, Typography} from 'antd';
import {SignOut} from "phosphor-react";
import Cookies from "js-cookie";
import {ContextUser} from "../context/ContextUser";
import API from "../context/API";
import Logo from "../../assets/img/logo.png";
const {Title} = Typography;

const {Header, Content, Footer} = Layout;

const Nav = (props) => {
    let history = useHistory()
    const {loginStatus, setLoginStatus} = useContext(ContextUser)
    const location = useLocation();

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
                                    style={{backgroundColor: "white", borderBottom: "1px solid #CED4DA"}}
                                    title={props.title}
                                    extra={[
                                        <Button key="1" size="large" type="link" onClick={handleLogout} danger>
                                            <b>
                                                <Row>
                                                    <Col span={12}><SignOut size={22}/></Col>
                                                    <Col span={12}>Keluar</Col>
                                                </Row>
                                            </b>
                                        </Button>,
                                    ]}
                                />
                            </Col>
                            <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 0, order: 2}}>
                                <PageHeader
                                    onBack={props.onBack}
                                    style={{backgroundColor: "white", borderBottom: "1px solid #CED4DA"}}
                                    title={<img src={Logo} style={{width: 137}} alt=""/>}
                                    extra={[
                                        <Button key="1" size="large" type="link" onClick={handleLogout} danger>
                                            <b>
                                                <Row>
                                                    <Col span={12}><SignOut size={22}/></Col>
                                                    <Col span={12}>Keluar</Col>
                                                </Row>
                                            </b>
                                        </Button>,
                                    ]}
                                />
                            </Col>
                            <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 0}}>
                                <div className="notification-container">
                                    <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                                        <Title level={4} style={{justifyContent: "center"}}>Dashboard</Title>
                                    </Space>
                                </div>
                            </Col>
                        </Row>
                    </>
                }
            </Layout>
        </>
    )
}

export default Nav