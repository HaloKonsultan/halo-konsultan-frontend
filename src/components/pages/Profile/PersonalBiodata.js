import React, {useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {Card} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';
import {ContextProfile} from "../../context/ContextProfile";
import noProfile from "../../../assets/img/noprofile.png"

const {Title, Text, Link} = Typography;

const PersonalBiodata = () => {
    let history = useHistory()

    const {input, functions} = useContext(ContextProfile)
    const {fetchData} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = () => {
        history.push('/edit-biodata')
    }

    return (
        <>
            <Card style={{boxShadow: "0 0 0 1px #CED4DA", borderRadius: 8, width: "100%"}} title={
                <>
                    <Row>
                        <Col span={12}>
                            <Title level={4}> Biodata Diri </Title>
                        </Col>
                        <Col span={12}>
                            <Button onClick={handleDetail} type="primary" ghost style={{borderRadius: 8}}>Edit Biodata
                                Diri</Button>
                        </Col>
                    </Row>
                </>
            }>
                <Row>
                    <Col  xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 14, order: 1}}>
                        <img
                            src={input.photo}
                            alt="profile-picture"
                            style={{
                                width: 200,
                                height: 200,
                                objectFit: "cover",
                                borderRadius: 8,
                                boxShadow: "0 0 0 1px #CED4DA",
                                position: "relative"
                                
                            }}/>
                    </Col>
                    <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 6, order: 2}}>
                        <Space size={24} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Nama</Text>
                                <Text strong>{input.name}</Text>
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
                                <Text strong>{input.province}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Kota</Text>
                                <Text strong>{input.city}</Text>
                            </Space>
                            <Space size={4} direction="vertical">
                                <Text type="secondary">Pengalaman Kerja</Text>
                                {
                                    input.consultant_experience && (
                                        <>
                                            {input.consultant_experience.map((e, index) => {
                                                return (
                                                    <>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Text strong>{e.position}</Text><br/>
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
                                <Text type="secondary">Pendidikan</Text>
                                {
                                    input.consultant_education && (
                                        <>
                                            {input.consultant_education.map((e, index) => {
                                                return (
                                                    <>
                                                        <Row>
                                                            <Col span={12}>
                                                                <Text strong>{e.institution_name}</Text><br/>
                                                                <Text type="secondary">{e.major}</Text>
                                                            </Col>
                                                            <Col style={{float: "right"}}
                                                                 span={12}>
                                                                <Text strong
                                                                      style={{float: "right"}}>{e.start_year} - {e.end_year}</Text>
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
                                {
                                    input.consultant_skill && (
                                        <>
                                            {input.consultant_skill.map((e, index) => {
                                                return (
                                                    <>
                                                        <Text strong>{e.skills}</Text>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </Space>
                        </Space>
                    </Col>
                </Row>
            </Card>
        </>
    )
}

export default PersonalBiodata