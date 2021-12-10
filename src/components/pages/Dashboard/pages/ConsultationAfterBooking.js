import React from "react"
import { Row, Col } from 'antd';
import Detail from "../Detail";
import ConsultationOption from "../ConsultationOption";
import Nav from "../../../layout/Header";

const ConsultationAfterBooking = () => {

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <Row>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 13, order: 1}}><Detail /></Col>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 11, order: 2}}><ConsultationOption /></Col>
            </Row>
        </>
    )
}

export default ConsultationAfterBooking