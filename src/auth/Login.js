import React from "react"
import {Row, Col} from 'antd';
import "../assets/css/auth.css"
import 'antd/dist/antd.css';
import Onboard from "./Onboard";
import LoginCard from "./LoginCard";

const Login = () => {

    return (
        <>
            <Row className="center">
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 15, order: 1}}>
                    <Onboard/>
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 9, order: 2}}>
                    <LoginCard/>
                </Col>
            </Row>
        </>
    )
}

export default Login