import React from "react"
import { Row, Col } from 'antd';
import Detail from "../Detail";
import ConsultationSetting from "../ConsultationSetting";
import Nav from "../../../layout/Header";

const ConsultationDetail = () => {

    return (
        <>
            <Nav/>
            <Row className="center">
                <Col span={13}><Detail /></Col>
                <Col span={11}><ConsultationSetting /></Col>
            </Row>
        </>
    )
}

export default ConsultationDetail