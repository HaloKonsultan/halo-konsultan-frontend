import React, {useContext, useEffect} from "react"
import {useParams} from "react-router-dom"
import {Typography} from 'antd';
import {Input} from 'antd';
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";

const {Title, Paragraph} = Typography;

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
                <Title level={3}>{input.title}</Title>
                <Paragraph>
                    {input.description}
                </Paragraph>
                <br/>
                {
                    input.preference !== null &&
                    <>
                        <p className="dashboard-label">Preferensi Konsultasi Klien</p>
                        <Input style={{width: 344, borderRadius: 8}} prefix={input.preference} disabled/>
                    </>
                }
                {
                    input.location !== null &&
                    <>
                        <br/><br/>
                        <p className="dashboard-label">Lokasi Konsultasi</p>
                        <Input style={{width: 344, borderRadius: 8}} prefix={input.location} disabled/>
                    </>
                }
            </div>
        </>
    )
}

export default ConsultationDetail