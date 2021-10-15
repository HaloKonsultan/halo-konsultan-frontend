import React, {useContext, useEffect, useState} from "react"
import {Button, Card, Space, Typography, Input} from 'antd';
import 'antd/dist/antd.css';
import {useParams} from "react-router-dom";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";
import {Row, Col} from 'antd';
import {ArrowRightOutlined, FileTextOutlined} from '@ant-design/icons';

const {Title, Link, Text} = Typography;

const ConsultationActive = () => {
    let {Id} = useParams()
    console.log(Id)

    const {dataConsultation, input, setInput, functions} = useContext(ConsultationDetailContext)
    const {fetchDataById, functionSubmit} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, []);

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        // functionSubmit(Id)
    };

    return (
        <>
            <div className="dashboard-container">
                <Card title={<Title style={{color: "black", margin: 0}} level={4}>Dokumen Klien</Title>}
                      style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{fontSize: '20px', paddingRight: 16}}/>
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{display: "flex", float: "right"}}
                                href="">
                                Download</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{fontSize: '20px', paddingRight: 16}}/>
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{display: "flex", float: "right"}}
                                href="">
                                Download</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{fontSize: '20px', paddingRight: 16}}/>
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{display: "flex", float: "right"}}
                                href="">
                                Download</Link>
                        </Col>
                    </Row>

                    {/*menggunakan API nanti uncomment ini*/}
                    {/*{dataConsultation.map((e) => {*/}
                    {/*     return (*/}
                    {/*         <Row>*/}
                    {/*             <Col span={12}>*/}
                    {/*                 <p>*/}
                    {/*                     <FileTextOutlined style={{ fontSize: '20px', paddingRight: 16 }} />*/}
                    {/*                     {e.consultations_document.name}</p>*/}
                    {/*             </Col>*/}
                    {/*             <Col span={12}>*/}
                    {/*                 <Link*/}
                    {/*                     style={{ display: "flex", float: "right" }}*/}
                    {/*                     href={e.consultations_document.file} >*/}
                    {/*                     Download</Link>*/}
                    {/*             </Col>*/}
                    {/*         </Row>*/}
                    {/*     )*/}
                    {/*})}*/}
                </Card>
                <br/>
                <form onSubmit={handleSubmit}>
                    <Space direction="vertical">
                        <Text type="secondary">Masukkan Link Conference untuk Klien </Text>
                        <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                               name="conference_link"
                               value={input.conference_link} onChange={handleChange}/>
                        <Button style={{borderRadius: 8}} value={input.id} type="primary" htmlType="submit">
                            Kirim Link ke Klien<ArrowRightOutlined/>
                        </Button>
                    </Space>
                </form>
            </div>
        </>
    )
}

export default ConsultationActive