import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Typography, Space} from 'antd';
import {Input} from 'antd';
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";

const {Title, Paragraph, Text} = Typography;

const ConsultationDetail = () => {
    let {Id} = useParams()

    const {input, functions} = useContext(ConsultationDetailContext)
    const {fetchDataById} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, [])

    return (
        <>
            <div className="dashboard-container">
                <Space direction="vertical">
                    <Title level={3}>{input.title}</Title>
                    <Text type="secondary">Pengirim : {input.name}</Text>
                    <Paragraph>
                        {input.description}
                    </Paragraph>
                </Space>
                {
                    input.preference !== null &&
                    <>
                        <p className="dashboard-label">Preferensi Konsultasi Klien</p>
                        {
                            input.preference === "online" &&
                            <Input style={{width: 344, borderRadius: 8}} prefix="Konsultasi Online" disabled/>
                        }
                        {
                            input.preference === "offline" &&
                            <Input style={{width: 344, borderRadius: 8}} prefix="Konsultasi Offline" disabled/>
                        }
                    </>
                }
                <br/><br/>
                {
                    input.location !== null &&
                    <>
                        <p className="dashboard-label">Lokasi Konsultasi</p>
                        <Input style={{width: 344, borderRadius: 8}} prefix={input.location} disabled/>
                    </>
                }
            </div>
        </>
    )
}

export default ConsultationDetail