import React from "react";
import { Row, Col, List} from 'antd';
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
                <Col  xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 14, order: 1}}>
                    <div className="container-profile"  style={{alignItems: "center", display: "flex"}}>   
                        <PersonalBiodata/>
                    </div>
                </Col>
                <Col  xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 6, order: 2}}>
                    <div className="container-profile"  style={{alignItems: "center" }}>
                        <ConsultationProfile/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Profile