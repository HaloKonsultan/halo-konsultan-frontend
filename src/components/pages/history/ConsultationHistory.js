import React, {useContext, useEffect} from "react"
import {Card, Typography, Space, Alert} from 'antd';
import 'antd/dist/antd.css';
import {useParams} from "react-router-dom";
import {ContextConsultationDetail} from "../../context/ContextConsultationDetail";
import {FileTextOutlined} from '@ant-design/icons';
import SendLink from "../Dashboard/SendLink";
import ConsultationDocument from "../Dashboard/ConsultationDocument";

const {Title, Link, Text} = Typography;

const ConsultationHistory = () => {
    let {Id} = useParams()
    console.log(Id)

    const {dataConsultation, input, setInput, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, []);

    return (
        <>
            <div className="dashboard-container">
                <Space size={20} direction="vertical">
                    {
                        input.status === 'done' && input.is_confirmed === 1 &&

                        <Alert style={{margin: 0, width: 438, borderRadius: 8, color: "#3B85FA"}}
                               message="Konsultasi ini telah Selesai"
                               type="info"
                               showIcon/>

                    }
                    {
                        input.status === 'done' && input.is_confirmed === 0 &&
                        <>
                            <Alert style={{width: 438, borderRadius: 8, color: "red"}}
                                   message="Konsultasi ini ditolak"
                                   type="error"
                                   showIcon/>
                            <Card style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #EA3A3A"}}>
                                <>
                                    <Title level={4}>Alasan Penolakan Konsultasi</Title>
                                    <Text>{input.message}</Text>
                                </>
                            </Card>
                        </>
                    }
                    {
                        input.status === 'done' && input.is_confirmed === 1 &&
                        <>
                            <Card style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #3B85FA"}}>
                                <>
                                    <Title level={4}>Pesan Konsultasi</Title>
                                    <Text>{input.message}</Text>
                                </>
                            </Card>
                        </>
                    }
                    {
                        input.status === 'done' && input.is_confirmed !== 0 && (
                            <>
                                <Space size={20} direction="vertical">
                                    <ConsultationDocument/>
                                    <SendLink disabled={true}/>
                                </Space>
                            </>
                        )
                    }
                </Space>

                {/*<p className="dashboard-label">Masukkan Link Conference untuk Klien </p>*/}
                {/*<Input*/}
                {/*    style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}*/}
                {/*    name="conference_link"*/}
                {/*    value={input.conference_link}*/}
                {/*    // value="https://meet.google.com/xtx-gfvc-day"*/}
                {/*    disabled/>*/}
                {/*<br/><br/>*/}
            </div>
        </>
    )
}

export default ConsultationHistory