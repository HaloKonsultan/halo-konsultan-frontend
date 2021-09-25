import React, { useState } from "react"
import {Card, Button, Space, Modal} from 'antd';
import { Typography } from 'antd';
import { CheckOutlined } from '@ant-design/icons';
import {Link} from "react-router-dom";

const { Title } = Typography;


const AcceptDeclineCard = () => {

    function confirm() {
        Modal.confirm({
            title: 'Apakah Anda yakin menolak permintaan Konsultasi ini ?',
            okText: 'Batalkan',
            cancelText: 'Tolak Permintaan',
        });
    }

    return (
        <>
            <div className="dashboard-container">
                <Card style={{ width: 440, display: "flex", justifyContent: "center", borderRadius: 16, boxShadow: "0 0 0 1px #CED4DA"}} >
                    <Title level={5}>Apakah Anda Menerima Permintaan Konsultasi ini ?</Title>
                    <Space>
                        <Link to="/detail"><Button style={{borderRadius: 8}} type="primary"><CheckOutlined />Terima Permintaan</Button></Link>
                        <Button onClick={confirm} style={{borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}} >Tolak Permintaan</Button>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default AcceptDeclineCard