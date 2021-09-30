import React, { useState }from "react";
import { Row, Col } from 'antd';
import { Card, Modal } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import {Link} from "react-router-dom";
import {EditOutlined} from '@ant-design/icons';


const EditProfile= () => {

    const [isAccountVisible, setIsAccountVisible] = useState(false);

    const showAccountModal = () => {
        setIsAccountVisible(true);
    };

    const handleCancel = () => {
        setIsAccountVisible(false);
    };

    return (
        <>
            <Card title="Edit Profil Konsultasi"  style={{ width: 528, height:800, borderRadius:8 }}>
                 <Row>       
                        <Col span={15}><p style={{color:"gray"}}>Rekening</p></Col>
                            <Col span={25}>
                            <Button  onClick={showAccountModal}type="link">+ Tambah Rekening</Button>
                            </Col>
                </Row>
                <Modal
                    className="profile-modal"
                    title="Tambahkan Rekening"
                    visible={isAccountVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <h4 style={{color:"gray"}}>Nama Bank</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <h4 style={{color:"gray"}}>Nomor Rekening</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <h4 style={{color:"gray"}}>Nama Pemegang Rekening</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <Button size="large" className="button" type="primary" block
                            style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                            Tambahkan Bidang Keahlian
                    </Button>
                </Modal>
                
                <br/> 

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
                <Input style={{borderRadius:8, height:48}} placeholder="Harga Jasa Diskusi"/>
                <br/><br/>

                <h4 style={{color:"gray"}}>Harga Jasa Konsultasi</h4>
                <Input style={{borderRadius:8, height:48}} placeholder="Harga Jasa Konsultasi"/>
                <br/><br/>

                <Row>       
                    <Col span={12}> <p style={{color:"gray"}}>Dokumentasi Kerja</p></Col>
                            <Col span={25}>
                            <Button type="link">+ Tambah Dokumentasi Kerja</Button>
                            </Col>
                </Row><br/>


                <Link to="/profil-empty"> <Button size="large" className="button" type="primary" block 
                style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                    Simpan
                </Button></Link>
            </Card>
        </>
    )
}

export default EditProfile