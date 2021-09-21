import React from "react"
import { Row, Col } from 'antd';
import "../assets/css/auth.css"
import 'antd/dist/antd.css';
import Onboard from "./Onboard";
import LoginCard from "./LoginCard";

const Login = () => {

    return (
        <>
            <Row className="center">
                <Col span={15}><Onboard/></Col>
                <Col span={9}><LoginCard/></Col>
            </Row>
        </>
    )
}

export default Login