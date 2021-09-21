import React from "react"
import { Row, Col } from 'antd';
import "../assets/css/auth.css"
import 'antd/dist/antd.css';
import RegisterCard from "./RegisterCard";
import Onboard from "./Onboard";

const Register = () => {

    return (
        <>
            <Row className="center">
                <Col span={15}><Onboard/></Col>
                <Col span={9}><RegisterCard/></Col>
            </Row>
        </>
    )
}

export default Register