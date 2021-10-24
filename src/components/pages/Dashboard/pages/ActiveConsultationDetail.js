import React from "react"
import { Row, Col } from 'antd';
import Detail from "../Detail";
import Nav from "../../../layout/Header";
import SendLink from "../SendLink";

const ActiveConsultationDetail = () => {

    return (
        <>
            <Nav/>
            <Row className="center">
                <Col span={13}><Detail /></Col>
                <Col span={11}><SendLink /></Col>
            </Row>
        </>
    )
}

export default ActiveConsultationDetail