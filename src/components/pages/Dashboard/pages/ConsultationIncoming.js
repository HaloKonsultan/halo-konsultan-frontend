import React from "react"
import { Row, Col } from 'antd';
import Detail from "../Detail";
import AcceptDeclineCard from "../AcceptDeclineCard";
import Nav from "../../../layout/Header";

const ConsultationDetail = () => {

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <Row className="center">
                <Col span={13}><Detail /></Col>
                <Col span={11}><AcceptDeclineCard /></Col>
            </Row>
        </>
    )
}

export default ConsultationDetail