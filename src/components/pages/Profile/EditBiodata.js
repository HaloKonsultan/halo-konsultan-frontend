import React, {useState, useParams, useContext, useEffect} from "react";
import {Row, Col, Space} from 'antd';
import {Card, Modal} from 'antd';
import {Input} from 'antd';
import {Button} from 'antd';
import {Radio} from 'antd';
import {Link} from "react-router-dom";
import {DatePicker} from 'antd';
import "../../../assets/css/profile.css"
import Nav from "../../layout/Header";
import {Typography} from 'antd';
import {ProfileContext} from "../../context/ProfileContext";

const {Title, Text} = Typography;

const EditBiodata = () => {
    // const { input, setInput, currentId, setCurrentId, functions } = useContext(ProfileContext)
    // const { fetchData } = functions
    //
    // useEffect(() => {
    //     fetchData()
    // }, [])

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

    const {TextArea} = Input;

    return (
        <>
            <Nav/>
            <div className="container-profile">
                <Card title="Edit Profil Diri" style={{width: 528, borderRadius: 8}}>
                    <Row>
                        <Col span={8}>
                            <img
                                src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                                alt="profile-picture"
                                style={{width: 144, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                        </Col>
                        <Col span={16}>
                            <Button style={{borderRadius: 4}}>Edit Profile</Button>
                            <h4 style={{color: "gray"}}>Pilih file dengan ukuran maksimal 512KB</h4>
                            <Button style={{borderRadius: 8}} type="primary">Upload file</Button>
                        </Col>
                    </Row>

                    <Space size={24} direction="vertical">

                    </Space>
                    <br/><br/>
                    <h4 style={{color: "gray"}}>Nama Lengkap</h4>
                    <Input style={{borderRadius: 8, height: 48}} placeholder="Nama lengkap"/>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Deskripsi tentang Anda</h4>
                    <TextArea style={{borderRadius: 8}} rows={6} placeholder="Deskripsi"/>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Jenis Kelamin</h4>
                    <Radio value={1}>Laki - Laki </Radio><Radio value={2}>Perempuan</Radio>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Bidang Konsultasi</h4>
                    <Input style={{borderRadius: 8, height: 48}} placeholder="Bidang Konsultasi"/>

                    <br/><br/>
                    <h4 style={{color: "gray"}}>Kota</h4>
                    <TextArea style={{borderRadius: 8}} rows={6} placeholder="Lokasi/Kota"/>

                    <br/><br/>
                    <h6 style={{color: "gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang
                        konsultasi</h6>
                    <br/>

                    <Row>
                        <Col span={13}><h4 style={{color: "gray"}}>Pengalaman Kerja</h4></Col>
                        <Col span={11}>
                            <Button onClick={showExperienceModal} type="link">+ Tambah Pengalaman kerja</Button>
                        </Col>
                    </Row>

                    <h6 style={{color: "gray"}}>Hanya cantumkan pengalaman kerja yang berhubungan dengan bidang
                        konsultasi</h6>
                    <Row>
                        <Col span={13}>
                            <h4 style={{color: "gray"}}>Bidang Keahlian</h4>
                        </Col>
                        <Col span={11}>
                            <Button onClick={showSkillModal} type="link">+ Tambah Bidang Keahlian</Button>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={13}><h4 style={{color: "gray"}}>Pendidikan</h4><br/></Col>
                        <Col span={11}>
                            <Button onClick={showHistoryModal} type="link">+ Tambah Riwayat Pendidikan</Button>
                        </Col>
                    </Row>

                    <Modal
                        className="profile-modal"
                        title="Tambahkan Pengalaman Kerja"
                        visible={isExperienceVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <h4 style={{color: "gray"}}>Titel Pengalaman Kerja</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <Row>
                            <Col span={12}><h4 style={{color: "gray"}}>Tahun Mulai</h4>
                                <DatePicker style={{width: 215, borderRadius: 8}} picker="year"/></Col>
                            <Col span={11} offset={1}>
                                <h4 style={{color: "gray"}}>Tahun Selesai</h4>
                                <DatePicker style={{width: 215, borderRadius: 8}} picker="year"/><br/><br/>
                            </Col>
                        </Row>
                        <Link to="/edit-biodata"> <Button size="large" className="button" type="primary" block
                                                          style={{borderRadius: 8, backgroundColor: "#3B85FA"}}>
                            Tambahkan Pengalaman Kerja
                        </Button></Link>
                    </Modal>
                    <Modal
                        className="profile-modal"
                        title="Tambahkan Bidang Keahlian"
                        visible={isSkillVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <h4 style={{color: "gray"}}>Titel Bidang Keahlian</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <Button size="large" className="button" type="primary" block
                                style={{borderRadius: 8, backgroundColor: "#3B85FA"}}>
                            Tambahkan Bidang Keahlian
                        </Button>
                    </Modal>
                    <Modal
                        className="profile-modal"
                        title="Tambahkan Pengalaman Kerja"
                        visible={isSkillVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <h4 style={{color: "gray"}}>Titel Pengalaman Kerja</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <h4 style={{color: "gray"}}>Lama Bekerja</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <Button size="large" className="button" type="primary" block
                                style={{borderRadius: 8, backgroundColor: "#3B85FA"}}>
                            Tambahkan Pengalaman Kerja
                        </Button>
                    </Modal>
                    <Modal
                        className="profile-modal"
                        title="Tambahkan Riwayat Pendidikan"
                        visible={isHistoryVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <h4 style={{color: "gray"}}>Nama Instansi</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <h4 style={{color: "gray"}}>Titel</h4>
                        <Input style={{borderRadius: 8}}/><br/><br/>
                        <Row>
                            <Col span={12}><h4 style={{color: "gray"}}>Tahun Mulai</h4>
                                <Input style={{borderRadius: 8}}/><br/><br/></Col>
                            <Col span={11} offset={1}>
                                <h4 style={{color: "gray"}}>Tahun Selesai</h4>
                                <Input style={{borderRadius: 8}}/><br/><br/>
                            </Col>
                        </Row>
                        <Button size="large" className="button" type="primary" block
                                style={{borderRadius: 8, backgroundColor: "#3B85FA"}}>
                            Tambahkan Pengalaman Kerja
                        </Button>
                    </Modal>
                    <Button
                        size="large"
                        className="button"
                        type="primary" block
                        style={{borderRadius: 8, backgroundColor: "#3B85FA"}}>
                        Simpan
                    </Button>
                </Card>
            </div>
        </>
    )
}

export default EditBiodata