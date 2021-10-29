import React, {useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {Card, Input} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';
import {ProfileContext} from "../../context/ProfileContext";
import {FileTextOutlined} from "@ant-design/icons";

const {Title, Text, Link} = Typography;

const PersonalBiodata = () => {
    let history = useHistory()
    const {input, functions} = useContext(ProfileContext)
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
                            src={input.photo}
                            alt="profile-picture"
                            style={{
                                width: 200,
                                height: 200,
                                objectFit: "cover",
                                borderRadius: 8,
                                boxShadow: "0 0 0 1px #CED4DA"
                            }}/>
                    </Col>
                    <Col span={12}>
                        <Space size={24} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Nama</Text>
                                <Text strong> {input.name}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Deskripsi Tentang Anda</Text>
                                <Text strong>{input.description}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Jenis Kelamin</Text>
                                <Text strong>{input.gender}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Bidang Konsultasi</Text>
                                <Text strong>{input.position}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Provinsi</Text>
                                <Text strong>{input.location}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Kota</Text>
                                <Text strong>{input.location}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Pengalaman Kerja</Text>
                                <Row>
                                    <Col span={12}>
                                        <Text strong>{input.position}</Text>
                                    </Col>
                                    <Col style={{display: "flex", justifyContent: "right"}} span={12}>
                                        <Text strong>{input.start_year}{input.end_year}</Text>
                                    </Col>
                                </Row>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Pendidikan</Text>
                                {
                                    input.consultant_education !== null && (
                                        <>
                                            {input.consultant_education.map((e, index) => {
                                                return (
                                                    <>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Text strong>{e.institution_name}</Text>
                                                            </Col>
                                                            <Col style={{display: "flex", justifyContent: "right"}}
                                                                 span={12}>
                                                                <Text strong>{e.start_year} - {e.end_year}</Text>
                                                            </Col>
                                                        </Row>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Bidang Keahlian</Text>
                                <Text strong>{input.skills}</Text>
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default PersonalBiodata