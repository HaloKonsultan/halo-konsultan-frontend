import React from "react"
import {Row, Col, Space, Card} from 'antd';
import Detail from "../components/Detail";
import Nav from "../../../layout/Header";
import ConferenceLink from "../components/ConferenceLink";
import ConsultationDocument from "../components/Document";

const ConsultationActiveDetail = () => {

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <Row className="center">
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 13, order: 1}}><Detail/></Col>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 11, order: 2}}>
                    <div className="dashboard-container" style={{marginBottom: 32}}>
                        <Card style={{width: "100%", borderRadius: 8, boxShadow: "0px 5px 10px 0px #F1F2FA", border: "none"}}>
                        <Space size={20} direction="vertical" style={{width: "100%"}}>
                            <ConsultationDocument/>
                            <ConferenceLink/>
                        </Space>
                        </Card>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ConsultationActiveDetail