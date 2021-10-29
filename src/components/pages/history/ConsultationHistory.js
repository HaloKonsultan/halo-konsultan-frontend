import React, {useContext, useEffect} from "react"
import {Card, Input} from 'antd';
import 'antd/dist/antd.css';
import {Typography, Space} from 'antd';
import {useParams} from "react-router-dom";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";
import {Row, Col} from 'antd';
import {FileTextOutlined} from '@ant-design/icons';
import {Alert} from 'antd';
import SendLink from "../Dashboard/SendLink";
import ConsultationDocument from "../Dashboard/ConsultationDocument";

const {Title, Link, Text} = Typography;

const ConsultationHistory = () => {
    let {Id} = useParams()
    console.log(Id)

    const {dataConsultation, input, setInput, functions} = useContext(ConsultationDetailContext)
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
                            <br/>
                            <Card style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #EA3A3A"}}>
                                <>
                                    <Title level={4}>Alasan Penolakan Konsultasi</Title>
                                    <Text>Kami menolak Konsultasi Anda karena ya kami pengen aja nolak konsultasi
                                        Anda.</Text>
                                </>
                            </Card>
                        </>
                    }
                    {
                        input.status === 'done' && input.is_confirmed !== 0 && (
                            <>
                                <Space size={20} direction="vertical">
                                    <ConsultationDocument/>
                                    <SendLink/>
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