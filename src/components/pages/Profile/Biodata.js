import React from "react";
import { Row, Col } from 'antd';
import { Card , Modal} from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import {CloseOutlined} from '@ant-design/icons';


const Biodata = () => {

  function confirm() {
    Modal.confirm(
        <Card style={{ width: 528, height:444, borderRadius:8 }}>
                  <Row className="center">
                        <Col span={23}><h2>
                             <b>Tambahkan Rekening</b> 
                             </h2></Col>
                        <Col span={25}><CloseOutlined /></Col>
                 </Row>
                  <h4 style={{color:"gray"}}>Nama Bank</h4>
                      <Input style={{borderRadius:8}}/><br/><br/>   
                  <h4 style={{color:"gray"}}>Nomor Rekening</h4>
                      <Input style={{borderRadius:8}}/><br/><br/> 
                  <h4 style={{color:"gray"}}>Nama Pemegang Rekening</h4>
                      <Input style={{borderRadius:8}}/><br/><br/><br/>
                  <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Tambahkan Rekening
                    </Button>
                  
            </Card>,
     );
}
    
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
                            <Button onClick={confirm} type="link">+ Tambah Pengalaman kerja</Button>
                            </Col>
                    </Row> 
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
                  <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Simpan
                    </Button>
            </Card>
        </>
    )
}

export default Biodata