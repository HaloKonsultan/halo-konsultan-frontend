import React from "react";
import { Row, Col} from 'antd';
import Nav from "../../layout/Header";
import PersonalBiodata from "./PersonalBiodata";
import ConsultationProfile from "./ConsultationProfile";
import Cookies from "js-cookie";
import 'antd/dist/antd.css';

const Profile = () => {

    return (
        <>
        <Nav title="Profil"/>
            <Row className="center">
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 12, order: 1}}>
                    <div className="container-profile"  style={{alignItems: "center", display: "flex"}}>   
                        <PersonalBiodata/>
                    </div>
                </Col>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 10, order: 2}}>
                    <div className="container-profile"  style={{alignItems: "center" }}>
                        <ConsultationProfile/>
                    </div>
                </Col >
                <Col  xs={{span: 24, order: 3}} sm={{span: 24, order: 3}} lg={{span: 2, order: 3}}/>
            </Row>
        </>
    )
}

export default Profile