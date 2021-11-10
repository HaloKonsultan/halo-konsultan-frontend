import React from "react";
import { Row, Col, List} from 'antd';
import Nav from "../../layout/Header";
import PersonalBiodata from "./PersonalBiodata";
import ConsultationProfile from "./ConsultationProfile";
import Cookies from "js-cookie";

const Profile = () => {

    return (
        <>
        <Nav title="Profil"/>
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