import React, {useContext} from "react"
import {useHistory, useLocation} from "react-router-dom"
import {Button, Layout, PageHeader, Row, Col} from 'antd';
import {SignOut} from "phosphor-react";
import Cookies from "js-cookie";
import {ContextUser} from "../context/ContextUser";

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
        history.push('/')
    }

    return (
        <>
            <Layout>
                {
                    Cookies.get('token') !== undefined &&
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
                }
            </Layout>
        </>
    )
}

export default Nav