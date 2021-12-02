import React from "react"
import {Row, Col} from 'antd';
import "../assets/css/auth.css"
import 'antd/dist/antd.css';
import RegisterCard from "./RegisterCard";
import Onboard from "./Onboard";

const Register = () => {

    return (
        <>
            <Row className="center" style={{backgroundColor: "white"}}>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 15, order: 1}}>
                    <Onboard/>
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 9, order: 2}}>
                    <RegisterCard/>
                </Col>
            </Row>
        </>
    )
}

export default Register