import React, { useState } from "react";
import { Row, Col } from 'antd';
import { Card , Modal} from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import TambahRekening from "../Profile/pop-up/TambahRekening";
import {Link} from "react-router-dom";
import {CloseOutlined} from '@ant-design/icons';

const Biodata = () => {

  const [isModalVisible, setIsModalVisible] = useState(false);

  const showModal = () => {
    setIsModalVisible(true);
  };

 
 const { TextArea } = Input;

    return (
        <>
            <Card title="Edit Profil Diri"  style={{ width: 528, height:1088, borderRadius:8 }}>
                    <Row> 
                        <Col span={4}></Col>
                            <Col span={20}>
                            <Button style={{borderRadius:4}}>Edit Profile</Button>
                            <h4 style={{color:"gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                            <Button style={{borderRadius:8}}type="primary">Upload file</Button>
                            </Col>
                    </Row><br/><br/>
                  <h4 style={{color:"gray"}}>Nama Lengkap</h4>
                      <Input style={{borderRadius:8, height:48}} placeholder="Nama lengkap"/>
                    <br/><br/>
                  <h4 style={{color:"gray"}}>Deskripsi tentang Anda</h4>
                      <TextArea rows={6} placeholder="Deskripsi"/> 
                    <br/><br/>
                  <h4 style={{color:"gray"}}>Jenis Kelamin</h4>
                  <Radio value={1}>Laki - Laki </Radio><Radio value={2}>Perempuan</Radio>
                  <h4 style={{color:"gray"}}>Bidang Konsultasi</h4>
                      <Input style={{borderRadius:8, height:48}} placeholder="Bidang Konsultasi"/>
                    <br/><br/>
                  <h4 style={{color:"gray"}}>Kota</h4>
                      <TextArea rows={6} placeholder="Lokasi/Kota"/> 
                    <br/><br/>
                  <h6 style={{color:"gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang konsultasi</h6>
                  <br/>
                  <Row>       
                      <Col span={13}><h4 style={{color:"gray"}}>Pengalaman Kerja</h4></Col>
                            <Col span={25}>
                            <Button onClick={showModal}type="link">+ Tambah Pengalaman kerja</Button>
                            </Col>
                    </Row> 
                    <Modal visible={isModalVisible}>
                            <TambahRekening/>
                    </Modal>
                  <h6 style={{color:"gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang konsultasi</h6>
                  <Row>       
                      <Col span={13}><h4 style={{color:"gray"}}>Bidang Keahlian</h4></Col>
                            <Col span={25}>
                            <Button type="link">+ Tambah Bidang Keahlian</Button>
                            </Col>
                    </Row> 
                    <Row>       
                      <Col span={12}> <h4 style={{color:"gray"}}>Pendidikan</h4><br/></Col>
                            <Col span={25}>
                            <Button type="link">+ Tambah Riwayat Pendidikan</Button>
                            </Col>
                    </Row>               
                    <Link to="/profil-empty"><Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Simpan
                    </Button> </Link>
            </Card>
        </>
    )
}

export default Biodata