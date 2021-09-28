import React from "react";
import { Row, Col } from 'antd';
import ProfilKonsultasi from "./Profil";
import BiodataDiri from "./BiodataDiri";
import Nav from "../../layout/Header";
import {Link} from "react-router-dom";

const ProfilBiodata = () => {

    return (
        <>
        <Nav/>
            <Row className="center">
                <Col span={9}><BiodataDiri/></Col>
                <Col span={9}><ProfilKonsultasi/></Col>
            </Row>
        </>
    )
}

export default ProfilBiodata