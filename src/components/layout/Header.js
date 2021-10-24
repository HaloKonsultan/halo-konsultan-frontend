import React, {useContext} from "react"
import {useHistory, useLocation} from "react-router-dom"
import {Button, Layout, PageHeader, Row, Col} from 'antd';
import {SignOut} from "phosphor-react";
import Cookies from "js-cookie";
import {UserContext} from "../context/UserContext";

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