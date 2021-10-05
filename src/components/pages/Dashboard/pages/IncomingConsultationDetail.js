import React from "react"
import { Row, Col } from 'antd';
import Detail from "../Detail";
import ConsultationOption from "../ConsultationOption";
import Nav from "../../../layout/Header";

const IncomingConsultationDetail = () => {

    return (
        <>
            <Nav/>
            <Row className="center">
                <Col span={13}><Detail /></Col>
                <Col span={11}><ConsultationOption /></Col>
            </Row>
        </>
    )
}

export default IncomingConsultationDetail