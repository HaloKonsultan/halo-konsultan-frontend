import React from "react";
import { Row, Col, List} from 'antd';
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
                <Col span={11}>
                    <div className="container-profile">   
                        <PersonalBiodata/>
                    </div>
                    {/* <List
          grid={{
            gutter: 16,
            xs: 1,
            sm: 1,
            md: 3,
            lg: 3,
            xl: 3,
            xxl: 3,
          }}/>  */}
                </Col>
                <Col span={11}>
                    <div className="container-profile">
                        <ConsultationProfile/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Profile