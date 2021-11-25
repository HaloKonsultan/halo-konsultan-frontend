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
                <Col span={13}><Detail /></Col>
                <Col span={11}><ConsultationOption /></Col>
            </Row>
        </>
    )
}

export default ConsultationAfterBooking