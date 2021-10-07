import React, {useContext, useEffect, useState} from "react"
import {Button, Card, Input} from 'antd';
import 'antd/dist/antd.css';
import {Typography} from 'antd';
import {useParams} from "react-router-dom";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";
import {Row, Col} from 'antd';
import {ArrowRightOutlined, FileTextOutlined} from '@ant-design/icons';
import { Alert } from 'antd';

const {Title, Link} = Typography;

const ConsultationHistory = () => {
    let {Id} = useParams()
    console.log(Id)

    const {dataConsultation, input, setInput, functions} = useContext(ConsultationDetailContext)
    const {fetchDataById} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, [Id, fetchDataById]);

    return (
        <>
            <div className="dashboard-container">
                {
                    input.status === 'Selesai' &&

                            <Alert style={{width: 438, borderRadius: 8, color: "#3B85FA"}}
                                   message="Konsultasi ini telah Selesai"
                                   type="info"
                                   showIcon />

                }
                {
                    input.status === 'Ditolak' &&
                    <Alert style={{width: 438, borderRadius: 8, color: "red"}}
                           message="Konsultasi ini ditolak"
                           type="error"
                           showIcon/>
                }
                <br/>
                <Card title={<Title style={{color: "black", margin: 0}} level={4}>Dokumen Klien</Title>}
                      style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}>

                    {/*hapus saja nanti*/}
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
                <p className="dashboard-label">Masukkan Link Conference untuk Klien </p>
                <Input
                    style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                    name="conference_link"
                    // value={input.conference_link}
                    value="https://meet.google.com/xtx-gfvc-day"
                    disabled/>
                <br/><br/>
            </div>
        </>
    )
}

export default ConsultationHistory