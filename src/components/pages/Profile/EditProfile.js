import React, {useContext, useEffect, useState} from "react";
import {Row, Col} from 'antd';
import {Card, Modal} from 'antd';
import {Input} from 'antd';
import {Button} from 'antd';
import {Link} from "react-router-dom";
import Nav from "../../layout/Header";
import {ProfileContext} from "../../context/ProfileContext";

const EditProfile = () => {

    const {input, functions} = useContext(ProfileContext)
    const {fetchData, functionEditBiodata} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const [isAccountVisible, setIsAccountVisible] = useState(false);

    const showAccountModal = () => {
        setIsAccountVisible(true);
    };

    const handleCancel = () => {
        setIsAccountVisible(false);
    };

    return (
        <>
            <Nav/>
            <div className="container-profile">
                <Card title="Edit Profil Konsultasi" style={{width: 528, borderRadius: 8}}>
                    <Row>
                        <Col span={15}><p style={{color: "gray"}}>Rekening</p></Col>
                        <Col span={25}>
                            <Button onClick={showAccountModal} type="link">+ Tambah Rekening</Button>
                        </Col>
                    </Row>
                    <Modal
                        className="profile-modal"
                        title="Tambahkan Rekening"
                        visible={isAccountVisible}
                        onCancel={handleCancel}
                        footer={null}
                    >
                        <form id="2">
                        <h4 style={{color: "gray"}}>Nama Bank</h4>
                        <Input 
                        style={{borderRadius: 8}} 
                        prefix={input.bank}/><br/><br/>

                        <h4 style={{color: "gray"}}>Nomor Rekening</h4>
                        <Input 
                        style={{borderRadius: 8}} 
                        prefix={input.card_number}/><br/><br/>

                        <h4 style={{color: "gray"}}>Nama Pemegang Rekening</h4>
                        <Input 
                        style={{borderRadius: 8}} 
                        prefix={input.name}/><br/><br/>

                        <Button size="large" 
                        className="button" 
                        type="primary" 
                        block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                        htmlType="submit"
                        form="2">
                            Tambahkan Bidang Keahlian
                        </Button>
                        </form>
                    </Modal>

                    <br/>

                    <Row>
                        <Col span={4}></Col>
                        <Col span={20}>
                            <h3>Himma Filangga Sutopo </h3>
                            <h4 style={{color: "gray"}}>BNI - 26839719839</h4>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={4}></Col>
                        <Col span={20}>
                            <h3>Himma Filangga Sutopo</h3>
                            <h4 style={{color: "gray"}}>BNI - 26839719839</h4>
                        </Col>
                    </Row> <br/>

                    <h4 style={{color: "gray"}}>Harga Jasa Diskusi</h4>
                    <Input style={{borderRadius: 8, height: 48}} 
                    placeholder="Harga Jasa Diskusi" 
                    prefix={input.chat_price}/><br/><br/>

                    <h4 style={{color: "gray"}}>Harga Jasa Konsultasi</h4>
                    <Input style={{borderRadius: 8, height: 48}} 
                    placeholder="Harga Jasa Konsultasi" 
                    prefix={input.comsultant_price}/><br/><br/>

                    <Row>
                        <Col span={12}><p style={{color: "gray"}}>Dokumentasi Kerja</p></Col>
                        <Col span={25}>
                            <Button type="link">+ Tambah Dokumentasi Kerja</Button>
                        </Col>
                    </Row><br/>

                    <form id="2">
                    <Button size="large"
                     className="button" 
                     type="primary" 
                     block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                     htmlType="submit"
                     form="2">
                        Simpan
                    </Button>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default EditProfile