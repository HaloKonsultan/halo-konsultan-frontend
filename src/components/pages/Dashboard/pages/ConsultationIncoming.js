import React from "react"
import {Row, Col} from 'antd';
import Detail from "../Detail";
import AcceptDeclineCard from "../AcceptDeclineCard";
import Nav from "../../../layout/Header";

const ConsultationDetail = () => {

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <Row className="center">
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 12, order: 1}}>
                    <Detail/>
                </Col>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 10, order: 2}}>
                    <AcceptDeclineCard/>
                </Col>
                <Col  xs={{span: 24, order: 3}} sm={{span: 24, order: 3}} lg={{span: 3, order: 3}}/>
            </Row>
        </>
    )
}

export default ConsultationDetail