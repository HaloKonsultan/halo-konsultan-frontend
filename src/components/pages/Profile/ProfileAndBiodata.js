import React from "react";
import { Row, Col } from 'antd';
import Nav from "../../layout/Header";
import {Link} from "react-router-dom";
import PersonalBiodata from "./PersonalBiodata";
import ConsultationProfile from "./ConsultationProfile";

const ProfileAndBiodata = () => {

    return (
        <>
        <Nav/>
            <Row className="center">
                <Col span={9}><PersonalBiodata/></Col>
                <Col span={9}><ConsultationProfile/></Col>
            </Row>
        </>
    )
}

export default ProfileAndBiodata