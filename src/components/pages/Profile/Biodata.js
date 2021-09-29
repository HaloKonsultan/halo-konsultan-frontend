import React, { useState } from "react";
import {Row, Col, PageHeader} from 'antd';
import { Card , Modal} from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Radio } from 'antd';
import {Link} from "react-router-dom";
import { DatePicker, Space } from 'antd';
import "../../../assets/css/profile.css"
import { Typography } from 'antd';

const { Title, Text } = Typography;

const Biodata = () => {

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);
    const [isSkillVisible, setIsSkillVisible] = useState(false);
    const [isHistoryVisible, setIsHistoryVisible] = useState(false);


    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const showSkillModal = () => {
        setIsSkillVisible(true);
    };

    const showHistoryModal = () => {
        setIsHistoryVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
        setIsSkillVisible(false);
        setIsHistoryVisible(false);
    };
 
    const { TextArea } = Input;

    return (
        <>
            <Card title="Edit Profil Diri"  style={{ width: 528, height:1088, borderRadius:8 }}>
                <Row>
                    <Col span={4}> </Col>
                    <Col span={20}>
                        <Button style={{borderRadius:4}}>Edit Profile</Button>
                        <h4 style={{color:"gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                        <Button style={{borderRadius:8}} type="primary">Upload file</Button>
                    </Col>
                </Row>

                <br/><br/>
                <h4 style={{color:"gray"}}>Nama Lengkap</h4>
                <Input style={{borderRadius:8, height:48}} placeholder="Nama lengkap"/>

                <br/><br/>
                <h4 style={{color:"gray"}}>Deskripsi tentang Anda</h4>
                <TextArea style={{borderRadius:8}} rows={6} placeholder="Deskripsi"/>

                <br/><br/>
                <h4 style={{color:"gray"}}>Jenis Kelamin</h4>
                <Radio value={1}>Laki - Laki </Radio><Radio value={2}>Perempuan</Radio>

                <h4 style={{color:"gray"}}>Bidang Konsultasi</h4>
                <Input style={{borderRadius:8, height:48}} placeholder="Bidang Konsultasi"/>

                <br/><br/>
                <h4 style={{color:"gray"}}>Kota</h4>
                <TextArea style={{borderRadius:8}} rows={6} placeholder="Lokasi/Kota"/>

                <br/><br/>
                <h6 style={{color:"gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang konsultasi</h6>
                <br/>

                <Row>
                    <Col span={13}><h4 style={{color:"gray"}}>Pengalaman Kerja</h4></Col>
                    <Col span={11}>
                        <Button onClick={showExperienceModal} type="link">+ Tambah Pengalaman kerja</Button>
                    </Col>
                </Row>

                <Modal
                    className="profile-modal"
                    title="Tambahkan Pengalaman Kerja"
                    visible={isExperienceVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <h4 style={{color:"gray"}}>Titel Pengalaman Kerja</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                     <Row>
                        <Col span={12}> <h4 style={{color:"gray"}}>Tahun Mulai</h4>
                            <DatePicker style={{width:215, borderRadius:8}} picker="year" /></Col>
                            <Col span={11} offset={1}>
                            <h4 style={{color:"gray"}}>Tahun Selesai</h4>
                            <DatePicker style={{width:215, borderRadius:8}} picker="year" /><br/><br/>
                        </Col>
                    </Row>
                    <Link to="/edit-biodata">  <Button size="large" className="button" type="primary" block
                            style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                            Tambahkan Pengalaman Kerja
                    </Button></Link>
                </Modal>

                <h6 style={{color:"gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang konsultasi</h6>
                <Row>
                    <Col span={13}>
                        <h4 style={{color:"gray"}}>Bidang Keahlian</h4>
                    </Col>
                    <Col span={11}>
                          <Button onClick={showSkillModal} type="link">+ Tambah Bidang Keahlian</Button>
                    </Col>
                </Row>
                <Modal
                    className="profile-modal"
                    title="Tambahkan Bidang Keahlian"
                    visible={isSkillVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <h4 style={{color:"gray"}}>Titel Bidang Keahlian</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <Button size="large" className="button" type="primary" block
                            style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                            Tambahkan Bidang Keahlian
                    </Button>
                </Modal>

                <Row>
                    <Col span={13}> <h4 style={{color:"gray"}}>Pendidikan</h4><br/></Col>
                    <Col span={11}>
                        <Button onClick={showHistoryModal}type="link">+ Tambah Riwayat Pendidikan</Button>
                    </Col>
                </Row>

                <Modal
                    className="profile-modal"
                    title="Tambahkan Riwayat Pendidikan"
                    visible={isHistoryVisible}
                    onCancel={handleCancel}
                    footer={null}
                >
                    <h4 style={{color:"gray"}}>Nama Instansi</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <h4 style={{color:"gray"}}>Titel</h4>
                    <Input style={{borderRadius:8}}/><br/><br/>
                    <Row>
                        <Col span={12}> <h4 style={{color:"gray"}}>Tahun Mulai</h4>
                            <Input style={{borderRadius:8}}/><br/><br/></Col>
                            <Col span={11} offset={1}>
                            <h4 style={{color:"gray"}}>Tahun Selesai</h4>
                            <Input style={{borderRadius:8}}/><br/><br/>
                        </Col>
                    </Row>
                    <Button size="large" className="button" type="primary" block
                            style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                            Tambahkan Pengalaman Kerja
                    </Button>
                </Modal>

                <Link to="/profil-empty">
                    <Button
                        size="large"
                        className="button"
                        type="primary" block
                        style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Simpan
                    </Button>
                </Link>
            </Card>
        </>
    )
}

export default Biodata