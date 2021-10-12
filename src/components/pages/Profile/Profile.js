import React from "react";
import { Row, Col } from 'antd';
import Nav from "../../layout/Header";
import PersonalBiodata from "./PersonalBiodata";
import ConsultationProfile from "./ConsultationProfile";
import Cookies from "js-cookie";

const Profile = () => {
    let page = 'Profil';
    Cookies.set('page', page, {expires: 1})

    return (
        <>
        <Nav/>
            <Row className="center">
                <Col span={12}>
                    <div className="container-profile">   
                        <PersonalBiodata/>
                    </div>
                </Col>
                <Col span={12}>
                    <div className="container-profile">
                        <ConsultationProfile/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Profile