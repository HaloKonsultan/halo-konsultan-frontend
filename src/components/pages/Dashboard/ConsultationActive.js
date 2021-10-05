import React, {useContext, useEffect, useState} from "react"
import {Button, Card, Input} from 'antd';
import 'antd/dist/antd.css';
import { Typography } from 'antd';
import { useParams } from "react-router-dom";
import { ConsultationDetailContext } from "../../context/ConsultationDetailContext";
import { Row, Col } from 'antd';
import {ArrowRightOutlined, FileTextOutlined} from '@ant-design/icons';

const { Title, Link } = Typography;

const ConsultationActive = () => {
    let { Id } = useParams()
    console.log(Id)

    const { dataConsultation, input, setInput, functions } = useContext(ConsultationDetailContext)
    const { fetchDataById, functionSubmit } = functions

    useEffect(() => {
        if( Id !== undefined ){
            fetchDataById(Id)
        }
    },[Id, fetchDataById]);

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)

        functionSubmit()
    };

    return (
        <>
            <div className="dashboard-container">
                <Card title={<Title style={{color: "black", margin: 0}} level={4}>Dokumen Klien</Title>}
                      style={{ width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }}>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{ fontSize: '20px', paddingRight: 16 }} />
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{ display: "flex", float: "right" }}
                                href="" >
                                Download</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{ fontSize: '20px', paddingRight: 16 }} />
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{ display: "flex", float: "right" }}
                                href="" >
                                Download</Link>
                        </Col>
                    </Row>
                    <Row>
                        <Col span={12}>
                            <p>
                                <FileTextOutlined style={{ fontSize: '20px', paddingRight: 16 }} />
                                Nama Dokumen</p>
                        </Col>
                        <Col span={12}>
                            <Link
                                style={{ display: "flex", float: "right" }}
                                href="" >
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
                    <p className="dashboard-label">Masukkan Link Conference untuk Klien </p>
                    <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} name="conference_link" onChange={handleChange}/>
                    <br/><br/>
                    <Button style={{borderRadius: 8}} type="primary" form="1" htmlType="submit">Kirim Link ke Klien<ArrowRightOutlined /></Button>
                </form>
            </div>
        </>
    )
}

export default ConsultationActive