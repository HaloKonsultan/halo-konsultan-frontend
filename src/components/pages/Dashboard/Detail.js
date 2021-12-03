import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Typography, Space, Card} from 'antd';
import {ContextConsultationDetail} from "../../context/ContextConsultationDetail";
import LabelText from "../../global/LabelText";

const {Title, Paragraph, Text} = Typography;

const ConsultationDetail = () => {
    let {Id} = useParams()

    const {input, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, [])

    return (
        <>
            <div className="dashboard-container">
                <Card style={{width: "100%", borderRadius: 8, boxShadow: "0px 5px 10px 0px #F1F2FA", border: "none"}}>
                    <Space size={32} direction="vertical">
                        <Space size={14} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Title level={3} style={{margin: 0, padding: 0}}>{input.title}</Title>
                                <Text type="secondary" style={{fontSize: 16, color: "#7A7D81"}}>Pengirim
                                    : {input.user_name}</Text>
                            </Space>
                            <Paragraph style={{textAlign: "justify"}}>
                                {input.description}
                            </Paragraph>
                        </Space>
                        {
                            input.preference !== null &&
                            <>
                                <Space size={8} direction="vertical">
                                    <LabelText text="Preferensi Konsultasi Klien" />
                                    {
                                        input.preference === "online" &&
                                        <Text style={{fontSize: 16}}>Konsultasi Online</Text>
                                    }
                                    {
                                        input.preference === "offline" &&
                                        <Text style={{fontSize: 16}}>Konsultasi Offline</Text>
                                    }
                                    {
                                        input.preference === "online offline" &&
                                        <Text style={{fontSize: 16}}>Konsultasi Online Offline</Text>
                                    }
                                </Space>
                            </>
                        }
                        {
                            input.location !== "online" &&
                            <>
                                <Space size={8} direction="vertical">
                                    <LabelText text="Lokasi Konsultasi" />
                                    <Text style={{fontSize: 16}}>{input.location}</Text>
                                </Space>
                            </>
                        }
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default ConsultationDetail