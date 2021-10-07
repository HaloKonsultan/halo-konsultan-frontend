import React from "react";
import { Card } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import { Typography } from 'antd';
import {Link} from "react-router-dom";

const { Title } = Typography;

const PersonalBiodata= () => {

    return (
        <>
             <Card style={{borderRadius:8, width:528}} title={ 
                    <>
                      <Row> 
                            <Col span={17}>
                                <Title level={4}> Biodata Diri </Title>
                            </Col>
                            <Col span={25}>
                                <Link to="/edit-biodata"><Button style={{borderRadius:8}}>
                                Edit Biodata Diri
                                </Button></Link>
                            </Col>
                    </Row> 
                    </>
                }>
                            <h5 style={{color:"gray"}}>Nama</h5>
                            <h4>Himma FIlangga Sutopo</h4>
                            <h5 style={{color:"gray"}}>Jenis Kelamin</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Bidang Konsultasi</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Kota</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Pengalaman Kerja</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Pendidikan</h5>
                            <h4>Belum ditambahkan</h4>
                            <h5 style={{color:"gray"}}>Bidang Keahlian</h5>
                            <h4>Belum ditambahkan</h4>  
          
            </Card>
        </>
        
    )
}

export default PersonalBiodata