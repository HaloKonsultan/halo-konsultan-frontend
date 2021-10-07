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
                <Col span={11}>
                    <div className="container-profile">   
                        <PersonalBiodata/>
                    </div>
                </Col>
                <Col span={9}>
                    <div className="container-profile">   
                        <ConsultationProfile/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default ProfileAndBiodata