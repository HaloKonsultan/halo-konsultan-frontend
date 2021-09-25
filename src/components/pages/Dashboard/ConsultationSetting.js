import React from "react"
import {Col, Row, Radio, Space, DatePicker, TimePicker, PageHeader, Button, Input} from 'antd';
import {Link} from "react-router-dom";
import Title from "antd/es/typography/Title";
import {ArrowRightOutlined} from "@ant-design/icons";


const ConsultationSetting = () => {

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    return (
        <>
            <div className="dashboard-container">
                <p className="dashboard-label">Preferensi Konsultasi</p>
                <Radio.Group >
                    <Radio value={1}>Konsultasi Online</Radio>
                    <Radio value={2}>Konsultasi Offline</Radio>
                </Radio.Group><br/><br/>
                <p className="dashboard-label">Pilih Jadwal Kosong</p>
                <Space direction="vertical">
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} placeholder="Jadwal Kosong #1" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} picker="Waktu" />
                    </Space>
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} placeholder="Jadwal Kosong #2" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} picker="Waktu" />
                    </Space>
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} placeholder="Jadwal Kosong #2" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} picker="Waktu" />
                    </Space>
                </Space><br/><br/>
                <p className="dashboard-label">Harga Jasa</p>
                <p style={{fontSize: 12}} className="dashboard-label">Harga jasa secara default adalah harga yang Anda cantumkan di profil.</p>
                <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} placeholder="Basic usage" />
                <br/><br/>
                <p className="dashboard-label">
                    Dokumen yang Diperlukan (Opsional)
                    <Link to="/waiting-payment">
                        <Button style={{display: "flex", float: "right", color: "#3B85FA"}} type="text">
                            <b>Lihat Semua</b>
                        </Button>
                    </Link>
                </p>
                <Link to="/"><Button style={{borderRadius: 8}} type="primary">Kirim ke Klien<ArrowRightOutlined /></Button></Link>
            </div>
        </>
    )
}

export default ConsultationSetting