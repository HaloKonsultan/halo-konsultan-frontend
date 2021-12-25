import React, {useContext} from "react"
import {Row, Col, Spin} from 'antd';
import Nav from "../../../layout/Header";
import Detail from "../../dashboard/components/Detail";
import ConsultationHistory from "../ConsultationHistory";
import {ContextConsultationDetail} from "../../../context/ContextConsultationDetail";

const ConsultationHistoryDetail = () => {
    const {loading} = useContext(ContextConsultationDetail)

    return (
        <>
            <Nav title="Detail Konsultasi" onBack={() => window.history.back()}/>
            <div>
                <Spin spinning={loading}>
                    <Row className="center">
                        <Col span={13}><Detail /></Col>
                        <Col span={11}><ConsultationHistory /></Col>
                    </Row>
                </Spin>
            </div>
        </>
    )
}

export default ConsultationHistoryDetail