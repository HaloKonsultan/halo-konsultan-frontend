import React, {useContext, useEffect, useState} from "react"
import {Col, Row, Radio, Space, DatePicker, TimePicker, PageHeader, Button, Input, Modal} from 'antd';
import {useParams} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";
import {AfterBookingContext} from "../../context/AfterBookingContext";

const {TextArea} = Input;

const ConsultationOption = () => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, functions} = useContext(AfterBookingContext)
    const {fetchDataById} = functions

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);

    function onChangeDate(date, dateString) {
        console.log("ini tanggal " + dateString);
        let dateInput = input.date.push({date: dateString})
        setInput({...input, dateInput})
    }

    function onChangeTime(time, timeString) {
        console.log("ini waktu " + timeString);
        let timeInput = input.date.push({time: timeString})
        setInput({...input, timeInput})
    }

    const onChangePreference = e => {
        console.log('radio checked', e.target.value);
        let typeOfValue = e.target.value
        let name = "preference"

        setInput({...input, [name]: typeOfValue})
        console.log("input" + JSON.stringify(input))
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name
        console.log("tesvalue " + typeOfValue)
        console.log("tesname " + name)

        // setInput({ ...input, [name]: typeOfValue })
    };

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("input" + JSON.stringify(input))
    };

    // const handleSubmitDocument = (event ) => {
    //     event.preventDefault()
    //     console.log(input)
    //
    //     // functionSubmitDocument()
    // };

    return (
        <>
            <div className="dashboard-container">
                <form id="1" method="post" onSubmit={handleSubmit}>
                    <p className="dashboard-label">Pilih Preferensi Konsultasi</p>
                    <Radio.Group onChange={onChangePreference}>
                        <Radio value="online">Online</Radio>
                        <Radio value="offline">Offline</Radio>
                    </Radio.Group>
                    <br/><br/>
                    <p className="dashboard-label">Pilih Jadwal Kosong</p>
                    <Space direction="vertical">
                        <Space>
                            <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        onChange={onChangeDate}
                                        placeholder="Jadwal Kosong #1"/>
                            <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        name="date[0].time"
                                        onChange={onChangeTime}
                                        picker="Waktu"/>
                        </Space>
                        <Space>
                            <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        name="date[1].date" onChange={onChangeDate} placeholder="Jadwal Kosong #2"/>
                            <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        name="date[1].time" icker="Waktu"/>
                        </Space>
                        <Space>
                            <DatePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        name="date[2].date" onChange={onChangeDate} placeholder="Jadwal Kosong #3"/>
                            <TimePicker style={{width: 211, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                        name="date[2].time" picker="Waktu"/>
                        </Space>
                    </Space>
                    <br/><br/>
                    <p className="dashboard-label" style={{marginBottom: 0}}>Harga Jasa</p>
                    <p style={{marginTop: 0, fontSize: 12}} className="dashboard-label">Harga jasa secara default adalah
                        harga yang Anda cantumkan di profil.</p>
                    <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                           type="text" name="price" onChange={handleChange}/>
                    <br/><br/>
                </form>

                <p className="dashboard-label">
                    Dokumen yang Diperlukan (Opsional)
                    <Button onClick={showExperienceModal} style={{display: "flex", float: "right", color: "#3B85FA"}}
                            type="text">
                        <b>+ Tambah Dokumen</b>
                    </Button>
                </p>

                {/*{dataConsultation !== null && (*/}
                {/*    <>*/}
                {/*        <Row gutter={16}>*/}
                {/*            {dataConsultation.map((e, index) => {*/}
                {/*                console.log(e)*/}
                {/*                return (*/}
                {/*                    <>*/}
                {/*                        <p>{e.consultations_document.name}</p>*/}
                {/*                    </>*/}
                {/*                )*/}
                {/*            })}*/}
                {/*        </Row>*/}
                {/*    </>*/}
                {/*)}*/}

                <Button style={{borderRadius: 8}} type="primary" form="1" htmlType="submit">Kirim ke
                    Klien<ArrowRightOutlined/></Button>
            </div>

            <Modal
                className="profile-modal"
                title="Tambahkan Dokumen"
                visible={isExperienceVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <form id="2">
                    <h4 style={{color: "gray"}}>Judul Dokumen</h4>
                    <Input style={{borderRadius: 8}} name="consultations_document.name"/>
                    <br/><br/>

                    <h4 style={{color: "gray"}}>Deskripsi Dokumen</h4>
                    <TextArea style={{borderRadius: 8}} rows={4} name="consultations_document.description"/>
                    <br/><br/>

                    <Button
                        size="large"
                        className="button"
                        type="primary" block
                        style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
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