import React from "react"
import { Row, Col } from 'antd';
import Nav from "../../../layout/Header";
import Detail from "../../Dashboard/Detail";
import ConsultationHistory from "../ConsultationHistory";

const ConsultationHistoryDetail = () => {

    return (
        <>
            <Nav/>
            <Row className="center">
                <Col span={13}><Detail /></Col>
                <Col span={11}><ConsultationHistory /></Col>
            </Row>
        </>
    )
}

export default ConsultationHistoryDetail