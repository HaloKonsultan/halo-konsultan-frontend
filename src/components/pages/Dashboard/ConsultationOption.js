import React, {useContext, useEffect, useState} from "react"
import {Col, Row, Radio, Space, DatePicker, TimePicker, PageHeader, Button, Input, Modal} from 'antd';
import {Link, useParams} from "react-router-dom";
import Title from "antd/es/typography/Title";
import {ArrowRightOutlined} from "@ant-design/icons";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";

const { TextArea } = Input;

const ConsultationOption = () => {
    let { Id } = useParams()
    console.log(Id)

    const [ isExperienceVisible, setIsExperienceVisible ] = useState(false);
    const { dataConsultation, input, setInput, currentId, setCurrentId, functions } = useContext(ConsultationDetailContext)
    const { fetchDataById, functionSubmitDocument } = functions

    useEffect(() => {
        if( Id !== undefined ){
            fetchDataById(Id)
        }
    },[Id, fetchDataById]);

    function onChange(date, dateString) {
        console.log(date, dateString);
    }

    const handlePreference = (event) => {
        let typeOfValue = event.target.value
        let name = "preference"

        setInput({ ...input, [name]: typeOfValue })
    };

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({ ...input, [name]: typeOfValue })
    };

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
    };

    const handleSubmitDocument = (event ) => {
        event.preventDefault()
        console.log(input)

        // functionSubmitDocument()
    };

    return (
        <>
            <div className="dashboard-container">
                <form id="1" onSubmit={handleSubmit}>
                {
                    input.preference !== null &&
                    <>
                        <p className="dashboard-label">Preferensi Konsultasi</p>
                        <Radio.Group >
                            <Radio onChange={handlePreference} value="Online" name="preference">Konsultasi Online</Radio>
                            <Radio onChange={handlePreference} value="Offline" name="preference">Konsultasi Offline</Radio>
                        </Radio.Group><br/><br/>
                    </>
                }

                <p className="dashboard-label">Pilih Jadwal Kosong</p>
                <Space direction="vertical">
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} name="date" onChange={handleChange} placeholder="Jadwal Kosong #1" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} name="time" onChange={handleChange} picker="Waktu" />
                    </Space>
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} placeholder="Jadwal Kosong #2" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} picker="Waktu" />
                    </Space>
                    <Space>
                        <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} placeholder="Jadwal Kosong #2" />
                        <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} onChange={onChange} picker="Waktu" />
                    </Space>
                </Space><br/><br/>

                <p className="dashboard-label" style={{marginBottom:0}}>Harga Jasa</p>
                <p style={{marginTop:0, fontSize: 12}} className="dashboard-label">Harga jasa secara default adalah harga yang Anda cantumkan di profil.</p>
                <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA" }} name="consultation_price" onChange={handleChange} placeholder="Basic usage" />
                <br/><br/>
                </form>

                <p className="dashboard-label">
                    Dokumen yang Diperlukan (Opsional)
                    <Button onClick={showExperienceModal} style={{display: "flex", float: "right", color: "#3B85FA"}} type="text">
                        <b>+ Tambah Dokumen</b>
                    </Button>
                </p>

                {dataConsultation !== null && (
                    <>
                        <Row gutter={16}>
                            {dataConsultation.map((e, index) => {
                                console.log(e)
                                return (
                                    <>
                                        <p>{e.consultations_document.name}</p>
                                    </>
                                )
                            })}
                        </Row>
                    </>
                )}

                <Button style={{borderRadius: 8}} type="primary" form="1" htmlType="submit">Kirim ke Klien<ArrowRightOutlined /></Button>
            </div>

            <Modal
                className="profile-modal"
                title="Tambahkan Dokumen"
                visible={isExperienceVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <form id="2" onSubmit={handleSubmitDocument}>
                    <h4 style={{color:"gray"}}>Judul Dokumen</h4>
                    <Input style={{borderRadius:8}} name="consultations_document.name" onChange={handleChange} />
                    <br/><br/>

                    <h4 style={{color:"gray"}}>Deskripsi Dokumen</h4>
                    <TextArea style={{borderRadius:8}} rows={4} name="consultations_document.description" onChange={handleChange}/>
                    <br/><br/>

                    <Button
                        size="large"
                        className="button"
                        type="primary" block
                        style={{borderRadius:8, backgroundColor:"#3B85FA"}}
                        htmlType="submit"
                        form="2">
                        Tambahkan Dokumen
                    </Button>
                </form>
            </Modal>
        </>
    )
}

export default ConsultationOption