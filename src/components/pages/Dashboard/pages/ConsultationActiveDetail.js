import React from "react"
import {Row, Col, Space, PageHeader} from 'antd';
import Detail from "../Detail";
import Nav from "../../../layout/Header";
import SendLink from "../SendLink";
import ConsultationDocument from "../ConsultationDocument";

const ConsultationActiveDetail = () => {

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <Row className="center">
                <Col span={13}><Detail/></Col>
                <Col span={11}>
                    <div className="dashboard-container">
                        <Space size={20} direction="vertical">
                            <ConsultationDocument/>
                            <SendLink/>
                        </Space>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ConsultationActiveDetail