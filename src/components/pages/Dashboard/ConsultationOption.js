import React, {useContext, useEffect, useState} from "react"
import {Radio, Space, DatePicker, TimePicker, Button, Input, Modal, Typography, Card, Form, PageHeader} from 'antd';
import {useParams} from "react-router-dom";
import {ArrowRightOutlined, FileTextOutlined, DeleteOutlined, CloseOutlined} from "@ant-design/icons";
import {ContextAfterBooking} from "../../context/ContextAfterBooking";
import {message} from 'antd';

const {Meta} = Card;
const {Link, Text} = Typography;
const {TextArea} = Input;

const ConsultationOption = () => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, prefTime, setPrefTime, prefDate, setPrefDate, functions} = useContext(ContextAfterBooking)
    const {fetchDataById, functionSubmit, functionSubmitDocument} = functions

    // useEffect(() => {
    //     if (Id !== undefined) {
    //         fetchDataById(Id)
    //     }
    // }, []);

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);

    function onChangeDate(date, dateString, id) {
        // console.log("ini tanggal " + dateString);
        const index = prefDate.date.map(e => e.id).indexOf(id);
        if (index !== -1) prefDate.date.splice(index, 1)
        let dateInput = prefDate.date.push({
            id: id,
            date: dateString
        })
        setPrefDate({...prefDate, dateInput})
    }

    function onChangeTime(time, timeString, id) {
        console.log("ini waktu " + timeString);
        const index = prefTime.time.map(e => e.id).indexOf(id);
        if (index !== -1) prefTime.time.splice(index, 1)
        let timeInput = prefTime.time.push({
            id: id,
            time: timeString
        })
        setPrefTime({...prefTime, timeInput})
    }

    const onChangePreference = e => {
        console.log('radio checked', e.target.value);
        let typeOfValue = e.target.value
        let name = "preference"

        setInput({...input, [name]: typeOfValue})
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        let dates = prefDate.date.map((item, i) => Object.assign({}, item, prefTime.time[i]));
        dates.forEach(date => input.date.push(date))
        console.log(dates)
        console.log(input)

        functionSubmit(Id)
    };

    const handleSubmitDocument = (values) => {
        console.log('Success:', values);
        let documentInput = input.document.push(values)
        setInput({...input, documentInput})

        console.log(input)
        setIsExperienceVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const deleteDocument = (event) => {
        console.log(event)
        let index = input.document.findIndex(x => x.title === event.currentTarget.value);

        console.log(index)
        input.document.splice(index, 1);
        console.log(input)
    }

    const updateDocument = () => {

    }

    return (
        <>
            <div className="dashboard-container">
                <form id="1" method="post" onSubmit={handleSubmit}>
                    <Space size={32} direction="vertical">
                        <Space size={8} direction="vertical">
                            <Text type="secondary">Pilih Preferensi Konsultasi</Text>
                            <Radio.Group onChange={onChangePreference}>
                                <Radio value="online">Online</Radio>
                                <Radio value="offline">Offline</Radio>
                            </Radio.Group>
                        </Space>
                        <Space size={8} direction="vertical">
                            <Text type="secondary">Pilih Jadwal Kosong</Text>
                            <Space>
                                <DatePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    format={'DD-MM-YYYY'}
                                    onChange={(date, dateString) => onChangeDate(date, dateString, 1)}
                                    placeholder="Jadwal Kosong #1" required/>
                                <TimePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    name="date[0].time"
                                    onChange={(date, dateString) => onChangeTime(date, dateString, 1)}
                                    picker="Waktu" required/>
                            </Space>
                            <Space>
                                <DatePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    format={'DD-MM-YYYY'}
                                    onChange={(date, dateString) => onChangeDate(date, dateString, 2)}
                                    placeholder="Jadwal Kosong #2" required/>
                                <TimePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    onChange={(date, dateString) => onChangeTime(date, dateString, 2)}
                                    picker="Waktu" required/>
                            </Space>
                            <Space>
                                <DatePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    format={'DD-MM-YYYY'}
                                    onChange={(date, dateString) => onChangeDate(date, dateString, 3)}
                                    placeholder="Jadwal Kosong #3" required/>
                                <TimePicker
                                    style={{width: 211, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                    onChange={(date, dateString) => onChangeTime(date, dateString, 3)}
                                    picker="Waktu" required/>
                            </Space>
                        </Space>
                        <Space size={2} direction="vertical">
                            <Text type="secondary">Harga Jasa</Text>
                            <Text style={{fontSize: 12}} type="secondary">Harga jasa secara default adalah harga yang
                                Anda
                                cantumkan di profil.</Text>
                            <Input style={{width: 438, height: 48, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                   type="text" name="price" onChange={handleChange} required/>
                        </Space>
                    </Space>
                </form>
                <br/>
                <PageHeader
                    style={{backgroundColor: "transparent", padding: 0, width: 450}}
                    ghost={false}
                    subTitle={<Text type="secondary">Dokumen yang Diperlukan (Opsional)</Text>}
                    extra={[
                        <Button onClick={showExperienceModal} style={{color: "#3B85FA"}}
                                type="text">
                            <b>+ Tambah Dokumen</b>
                        </Button>,
                    ]}/>
                <Space size={8} direction="vertical">
                    {
                        input.document !== null && (
                            <>
                                {input.document.map((e, index) => {
                                    return (
                                        <>
                                            <Card
                                                style={{
                                                    width: 438,
                                                    borderRadius: 8,
                                                    boxShadow: "0 0 0 1px #CED4DA"
                                                }}
                                                type="inner"
                                            >
                                                <Meta
                                                    title={
                                                        <>
                                                            <Text>{e.title}</Text>
                                                            <Button onClick={updateDocument}
                                                                    value={e.title}
                                                                    name={e.title}
                                                                    style={{color: "#3B85FA"}}
                                                                    type="text">update
                                                            </Button>
                                                            <Button onClick={deleteDocument}
                                                                    value={e.title}
                                                                    name={e.title}
                                                                    style={{color: "#3B85FA"}}
                                                                    type="text"><CloseOutlined/>
                                                            </Button>
                                                        </>
                                                    }/>
                                            </Card>
                                        </>
                                    )
                                })}
                            </>
                        )}
                        <br/>
                    <Button style={{borderRadius: 8}} type="primary" form="1" htmlType="submit">
                        Kirim ke Klien<ArrowRightOutlined/>
                    </Button>
                </Space>
            </div>

            <Modal
                destroyOnClose={true}
                className="profile-modal"
                title="Tambahkan Dokumen"
                visible={isExperienceVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={handleSubmitDocument}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Judul Dokumen"
                        name="title"
                        rules={[
                            {
                                required: true,
                                message: 'Please input document title!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item
                        label="Deskripsi Dokumen"
                        name="description"
                        rules={[
                            {
                                required: true,
                                message: 'Please input document description!',
                            },
                        ]}
                    >
                        <TextArea style={{borderRadius: 8}} rows={4} name="description"/>
                    </Form.Item>

                    <Form.Item>
                        <Button
                            size="large"
                            className="button"
                            type="primary" block
                            style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                            htmlType="submit">
                            Tambahkan Dokumen
                        </Button>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ConsultationOption