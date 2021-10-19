import React, {useContext, useEffect, useState} from "react"
import {Card, Button, Space, Modal} from 'antd';
import { Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {Link, useParams} from "react-router-dom";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";

const { Title } = Typography;

const AcceptDeclineCard = () => {
    let { Id } = useParams()
    console.log(Id)

    const { input, setInput, currentId, setCurrentId, functions } = useContext(ConsultationDetailContext)
    const { fetchDataById, functionAccept, functionDecline } = functions

    useEffect(() => {
        if( Id !== undefined ){
            fetchDataById(Id)
        }
    },[])

    function handleDecline(event) {
        Modal.confirm({
            title: 'Apakah Anda yakin menolak permintaan Konsultasi ini ?',
            okText: 'Batalkan',
            cancelText: 'Tolak Permintaan',
            onCancel() {
                functionDecline(Id);
            },
        });
    }

    function handleAccept(event) {
        let idClient = parseInt(event.currentTarget.value)

        functionAccept(idClient)
    }

    return (
        <>
            <div className="dashboard-container">
                <Card style={{ width: 440, display: "flex", justifyContent: "center", borderRadius: 16, boxShadow: "0 0 0 1px #CED4DA"}} >
                    <Title level={5}>Apakah Anda Menerima Permintaan Konsultasi ini ?</Title>
                    <Space>
                        <Button onClick={handleAccept} value={Id} style={{borderRadius: 8}} type="primary"><CheckOutlined />Terima Permintaan</Button>
                        <Button onClick={handleDecline} style={{borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}} >Tolak Permintaan</Button>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default AcceptDeclineCard