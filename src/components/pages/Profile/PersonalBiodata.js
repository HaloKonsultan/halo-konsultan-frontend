import React, {useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {Card} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';
import {ActiveOrderContext} from "../../context/ActiveOrderContext";

const {Title, Text, Link} = Typography;

const PersonalBiodata = () => {
    let history = useHistory()
    const {dataProfile, functions} = useContext(ActiveOrderContext)
    const {fetchData, functionEditBiodata} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = () => {
        history.push('/edit-biodata')
    }

    return (
        <>
            <Card style={{boxShadow: "0 0 0 1px #CED4DA", borderRadius: 8, width: 528}} title={
                <>
                    <Row>
                        <Col span={17}>
                            <Title level={4}> Biodata Diri </Title>
                        </Col>
                        <Col span={25}>
                            <Button onClick={handleDetail} type="primary" ghost style={{borderRadius: 8}}>Edit Biodata
                                Diri</Button>
                        </Col>
                    </Row>
                </>
            }>
                <Row>
                    <Col span={12}>
                        <img
                            src="https://t3.ftcdn.net/jpg/03/91/19/22/360_F_391192211_2w5pQpFV1aozYQhcIw3FqA35vuTxJKrB.jpg"
                            alt="profile-picture"
                            style={{width: 200, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                    </Col>
                    <Col span={12}>
                        <Space size={24} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Nama</Text>
                                <Text strong>Himma Filangga Sutopo</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Deskripsi Tentang Anda</Text>
                                <Text strong>Saya adalah Konsultan Hukum Perdata dengan pengalaman lebih dari 6 tahun di
                                    bidang ini. Saya telah...</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Jenis Kelamin</Text>
                                <Text strong>Non-Binary</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Bidang Konsultasi</Text>
                                <Text strong>Hukum</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Kota</Text>
                                <Text strong>Bekasi</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Pengalaman Kerja</Text>
                                <Row>
                                    <Col span={12}>
                                        <Text strong>Konsultan Marketing</Text>
                                    </Col>
                                    <Col style={{display: "flex", justifyContent: "right"}} span={12}>
                                        <Text strong>2019 - Present</Text>
                                    </Col>
                                </Row>

                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Pendidikan</Text>
                                <Row>
                                    <Col span={12}>
                                        <Text strong>University Up and Down</Text>
                                    </Col>
                                    <Col style={{display: "flex", justifyContent: "right"}} span={12}>
                                        <Text strong>2017 - 2019</Text>
                                    </Col>
                                </Row>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Bidang Keahlian</Text>
                                <Text strong>Mencintaimu apa adanya</Text>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Card>
        </>

    )
}

export default PersonalBiodata