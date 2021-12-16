import React, {useContext, useEffect, useState} from "react"
import {
    Radio, Space, DatePicker, TimePicker, Button, Input, Typography, Card, PageHeader, Row, Col
} from 'antd';
import {useParams} from "react-router-dom";
import {ArrowRightOutlined} from "@ant-design/icons";
import {ContextAfterBooking} from "../../context/ContextAfterBooking";
import {CalendarBlank, Clock, Pencil, X} from "phosphor-react";
import ModalAddDocument from "../../global/ModalAddDocument";
import InputText from "../../global/InputText";
import ButtonPrimary from "../../global/ButtonPrimary";
import "../../../assets/css/dashboard.css"
import LabelText from "../../global/LabelText";
import {ContextProfile} from "../../context/ContextProfile";
import {Border, Danger, PrimaryBlue} from "../../global/Constants";

const {Meta} = Card;
const {Text} = Typography;
const {TextArea} = Input;

const ConsultationOption = () => {
    let {Id} = useParams()
    const {input, setInput, prefTime, setPrefTime, prefDate, setPrefDate, functions} = useContext(ContextAfterBooking)
    const {price, setPrice} = useContext(ContextProfile)

    const {fetchDataById, functionSubmit} = functions
    const [dateValidation, setDateValidation] = useState({
        date1: false,
        date2: false,
        date3: false
    })
    const [preference, setPreference] = useState(input.preference)

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
            console.log("ini di detail", price)
        }
    }, []);

    const [isExperienceVisible, setIsExperienceVisible] = useState(false);

    const onChangePreference = e => {
        console.log('radio checked', e.target.value);
        let typeOfValue = e.target.value
        let name = "preference"

        setInput({...input, [name]: typeOfValue})
    };

    function onChangeDate(date, dateString, id) {
        const index = prefDate.date.map(e => e.id).indexOf(id);
        if (index !== -1) prefDate.date.splice(index, 1)
        let dateInput = prefDate.date.push({
            id: id,
            date: dateString
        })
        setPrefDate({...prefDate, dateInput})
        dateValidation.date1 = false
        dateValidation.date2 = false
        dateValidation.date3 = false
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

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        console.log("ini handle change", typeOfValue)
        setPrice(typeOfValue)
        setInput({...input, [name]: typeOfValue})
    };

    const showExperienceModal = () => {
        setIsExperienceVisible(true);
    };

    const handleCancel = () => {
        setIsExperienceVisible(false);
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
        console.log(input.document)
        let index = input.document.findIndex(x => x.title === event.currentTarget.value);

        console.log(index)
        input.document.splice(index, 1);
        console.log(input)
        setInput({...input})
    }

    const updateDocument = (title, description) => {
        let index = input.document.findIndex(x => x.title === title);

        setInput({...input, title: title, description: description})
        setIsExperienceVisible(true);
        input.document.splice(index, 1);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        setInput({...input, photo: price})
        let found1 = prefDate.date.find(colDef => colDef.id === 1)
        let found2 = prefDate.date.find(colDef => colDef.id === 2)
        let found3 = prefDate.date.find(colDef => colDef.id === 3)

        if (found1 === undefined) {
            setDateValidation({...dateValidation, date1: true})
        } else if (found2 === undefined) {
            setDateValidation({...dateValidation, date2: true})
        } else if (found3 === undefined) {
            setDateValidation({...dateValidation, date3: true})
        } else {
            let dates = prefDate.date.map((item, i) => Object.assign({}, item, prefTime.time[i]));
            dates.forEach(date => input.date.push(date))
            console.log(prefDate.date)
            functionSubmit(Id)
        }
    };

    return (
        <>
            <div className="dashboard-container">
                <Card style={{width: "100%", borderRadius: 8, boxShadow: "0px 5px 10px 0px #F1F2FA", border: "none"}}>
                    <Space size={32} direction="vertical" style={{width: "100%"}}>
                        <form id="1" method="post" onSubmit={handleSubmit}>
                            <Space size={32} direction="vertical" style={{width: "100%"}}>
                                {
                                    preference === "online offline" &&
                                    <Space size={8} direction="vertical">
                                        <LabelText text="Pilih Preferensi Konsultasi"/>
                                        <Radio.Group onChange={onChangePreference}>
                                            <Radio value="online">Online</Radio>
                                            <Radio value="offline">Offline</Radio>
                                        </Radio.Group>
                                    </Space>
                                }
                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <LabelText text="Pilih Jadwal Kosong"/>
                                    <Space size={16} direction="vertical" style={{width: "100%"}}>
                                        <Row gutter={[16, 16]}>
                                            <Col span={12}> <DatePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date1 ? Danger : Border
                                                }}
                                                suffixIcon={<CalendarBlank size={24} weight="fill"/>}
                                                format={'DD-MM-YYYY'}
                                                onChange={(date, dateString) => onChangeDate(date, dateString, 1)}
                                                placeholder="Jadwal Kosong #1" required/>
                                            </Col>
                                            <Col span={12}><TimePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date1 ? Danger : Border
                                                }}
                                                suffixIcon={<Clock size={24} weight="fill"/>}
                                                format={'HH:mm'}
                                                name="date[0].time"
                                                onChange={(date, dateString) => onChangeTime(date, dateString, 1)}
                                                picker="Waktu" required/>
                                            </Col>
                                            {
                                                dateValidation.date1 &&
                                                <Col span={24}>
                                                    <LabelText text="Silahkan melengkapi jadwal konsultasi"
                                                               fontSize={12}
                                                               fontColor="#EA3A3A"/>
                                                </Col>
                                            }
                                            <Col span={12}><DatePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date2 ? Danger : Border
                                                }}
                                                suffixIcon={<CalendarBlank size={24} weight="fill"/>}
                                                format={'DD-MM-YYYY'}
                                                onChange={(date, dateString) => onChangeDate(date, dateString, 2)}
                                                placeholder="Jadwal Kosong #2" required/>
                                            </Col>
                                            <Col span={12}><TimePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date2 ? Danger : Border
                                                }}
                                                format={'HH:mm'}
                                                suffixIcon={<Clock size={24} weight="fill"/>}
                                                onChange={(date, dateString) => onChangeTime(date, dateString, 2)}
                                                picker="Waktu" required/>
                                            </Col>
                                            {
                                                dateValidation.date2 &&
                                                <Col span={24}>
                                                    <LabelText text="Silahkan melengkapi jadwal konsultasi"
                                                               fontSize={12}
                                                               fontColor="#EA3A3A"/>
                                                </Col>
                                            }
                                            <Col span={12}><DatePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date3 ? Danger : Border
                                                }}
                                                suffixIcon={<CalendarBlank size={24} weight="fill"/>}
                                                format={'DD-MM-YYYY'}
                                                onChange={(date, dateString) => onChangeDate(date, dateString, 3)}
                                                placeholder="Jadwal Kosong #3" required/>
                                            </Col>
                                            <Col span={12}><TimePicker
                                                style={{
                                                    width: "100%",
                                                    height: 48,
                                                    borderRadius: 8,
                                                    borderColor: dateValidation.date3 ? Danger : Border
                                                }}
                                                format={'HH:mm'}
                                                suffixIcon={<Clock size={24} weight="fill"/>}
                                                onChange={(date, dateString) => onChangeTime(date, dateString, 3)}
                                                picker="Waktu" required/>
                                            </Col>
                                            {
                                                dateValidation.date3 &&
                                                <Col span={24}>
                                                    <LabelText text="Silahkan melengkapi jadwal konsultasi"
                                                               fontSize={12}
                                                               fontColor="#EA3A3A"/>
                                                </Col>
                                            }
                                        </Row>
                                    </Space>
                                </Space>

                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <LabelText text="Harga Jasa"/>
                                    <LabelText fontSize={12} fontColor="#979595"
                                               text="Harga jasa secara default adalah harga yang Anda cantumkan di profil."/>
                                    <InputText name="price" value={price} onChange={handleChange}
                                               placeholder="Harga Jasa"/>
                                </Space>
                            </Space>
                        </form>
                        <Space size={8} direction="vertical" style={{width: "100%"}}>
                            <PageHeader
                                style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                ghost={false}
                                subTitle={<LabelText text="Dokumen yang Diperlukan (Opsional)"/>}
                                extra={[
                                    <Button onClick={showExperienceModal} style={{color: PrimaryBlue, padding: 0}}
                                            type="text">
                                        <b>+ Tambah Dokumen</b>
                                    </Button>,
                                ]}/>
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                {
                                    input.document !== null && (
                                        <>
                                            {input.document.map((e, index) => {
                                                return (
                                                    <>
                                                        <Card
                                                            style={{
                                                                width: "100%",
                                                                borderRadius: 8
                                                            }}
                                                            type="inner"
                                                        >
                                                            <Meta
                                                                title={
                                                                    <>
                                                                        <Row>
                                                                            <Col span={21}
                                                                                 style={{padding: 0, paddingTop: 8}}>
                                                                                <Text style={{
                                                                                    padding: 0,
                                                                                    paddingTop: 8
                                                                                }}>{e.title}</Text>
                                                                            </Col>
                                                                            <Col span={3}>
                                                                                <Button value={e.title}
                                                                                        style={{
                                                                                            padding: 0,
                                                                                            paddingTop: 8
                                                                                        }}
                                                                                        type="link"><Pencil
                                                                                    onClick={() => updateDocument(e.title, e.description)}
                                                                                    size={24} weight="fill"/>
                                                                                </Button>
                                                                                <Button value={e.title}
                                                                                        style={{
                                                                                            padding: 0,
                                                                                            paddingTop: 8
                                                                                        }}
                                                                                        onClick={deleteDocument}
                                                                                        type="link"><X
                                                                                    size={24}/>
                                                                                </Button>
                                                                            </Col>
                                                                        </Row>
                                                                    </>
                                                                }/>
                                                        </Card>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )}
                                <ButtonPrimary
                                    text={<React.Fragment>Kirim ke Klien <ArrowRightOutlined/></React.Fragment>}
                                    htmlType="submit" form="1"/>
                            </Space>
                        </Space>
                    </Space>
                </Card>
            </div>

            <ModalAddDocument
                visible={isExperienceVisible}
                onCancel={handleCancel}
                onFinish={handleSubmitDocument}
                onFinishFailed={onFinishFailed}
                name={input.title}
                description={input.description}/>
        </>
    )
}

export default ConsultationOption