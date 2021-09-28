import React from "react";
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import {Link} from "react-router-dom";
import {EditOutlined} from '@ant-design/icons';


const EditProfil2= () => {

    return (
        <>
            <Card title="Edit Profil Konsultasi"  style={{ width: 528, height:800, borderRadius:8 }}>
            <Row>       
            <Col span={15}><p style={{color:"gray"}}>Rekening</p></Col>
                            <Col span={25}>
                            <Button type="link">+ Tambah Rekening</Button>
                            </Col>
                    </Row> <br/> 
                    <Row> 
                        <Col span={4}></Col>
                            <Col span={20}>
                            <h3>Himma Filangga Sutopo </h3>
                            <h4 style={{color:"gray"}}>BNI - 26839719839</h4>
                            </Col>
                    </Row>   
                    <Row> 
                        <Col span={4}></Col>
                            <Col span={20}>
                            <h3>Himma Filangga Sutopo</h3>
                            <h4 style={{color:"gray"}}>BNI - 26839719839</h4>
                            </Col>
                    </Row> <br/>
                  <h4 style={{color:"gray"}}>Harga Jasa Diskusi</h4>
                      <Input style={{borderRadius:8, height:48}}/>
                    <br/><br/>
                  <h4 style={{color:"gray"}}>Harga Jasa Konsultasi</h4>
                      <Input style={{borderRadius:8, height:48}}/>
                    <br/><br/>
                   <Row>       
                       <Col span={13}> <p style={{color:"gray"}}>Dokumentasi Kerja</p></Col>
                            <Col span={25}>
                            <Button type="link">+ Tambah Dokumentasi Kerja</Button>
                            </Col>
                    </Row> <br/>


                  <Link to="/profil-empty"> <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Simpan
                    </Button></Link>
            </Card>
        </>
    )
}

export default EditProfil2