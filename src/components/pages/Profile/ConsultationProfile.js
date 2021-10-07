import React from "react";
import { Card } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import {Link} from "react-router-dom";

const { Title } = Typography;

const ConsultationProfile= () => {

    return (
        <>
            <Card style={{borderRadius:8, width:406}} title={ 
                    <>
                      <Row>       
                            <Col span={12}> <Title level={4}> Profil Konsultasi </Title></Col>
                            <Col span={25}>
                            <Link to="/edit-profil"><Button style={{borderRadius:8}}>
                                 Edit Profil Konsultasi
                                </Button></Link>
                            </Col>
                    </Row> 
                    </> 
                    }>
                            <h5 style={{color:"gray"}}>Rekening</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Harga Jasa diskusi</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Harga Jasa Konsultasi</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Dokumentasi Kerja</h5>
                            <h4>Belum ditambahkan</h4>
            </Card>
        </>
    )
}

export default ConsultationProfile