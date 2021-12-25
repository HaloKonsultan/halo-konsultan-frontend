import React, {useContext, useEffect, useState} from "react"
import {Button, Col, Form, Input, Modal, Row, Select, Space, Typography} from 'antd';
import 'antd/dist/antd.css';
import {useParams} from "react-router-dom";
import {ContextConsultationDetail} from "../../../context/ContextConsultationDetail";
import {ArrowRightOutlined} from '@ant-design/icons';
import ButtonDanger from "../../../global/ButtonDanger";
import ModalChooseAccount from "../../../global/ModalChooseAccount";
import PrimaryButton from "../../../global/ButtonPrimary";

const {Option} = Select;
const {Title, Link, Text} = Typography;

const ConferenceLink = (props) => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById, functionSubmit, funtionEndConsultation, functionDecline} = functions
    const [isAccountVisible, setIsAccountVisible] = useState(false)
    const [isMessageVisible, setIsMessageVisible] = useState(false);
    const [typeOfValue, setTypeOfValue] = useState()
    const [name, setName] = useState([])

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, []);

    const showAccountModal = () => {
        setIsAccountVisible(true);
    };

    const handleCancel = () => {
        setIsAccountVisible(false);
        setIsMessageVisible(false);
    };

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setName(name)
        setTypeOfValue(value)
    };

    const handleChangeMessage = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    const handleVirtualAccount = () => {
        funtionEndConsultation(Id)
        setIsAccountVisible(false);
    };

    const handleVirtualAccountError = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    const handleAccount = (value) => {
        console.log(value[0])

        setInput({...input, bank_name: value[0], card_name: value[1], card_number: value[2]})
        console.log(input)
    }

    const handleSubmit = (event) => {
        event.preventDefault()

        functionSubmit(Id, typeOfValue)
    };

    const showMessageModal = () => {
        setIsMessageVisible(true);
    };

    const onFinish = () => {
        showAccountModal()
        setIsMessageVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    return (
        <>
            {
                input.preference !== "offline" &&
                <>
                    <form id="1" onSubmit={handleSubmit}>
                        <Space size={24} direction="vertical" style={{width: "100%"}}>
                            <Space size={8} direction="vertical" style={{width: "100%"}}>
                                {
                                    input.conference_link === null && input.status !== "done" &&
                                        <>
                                            <Text type="secondary">Masukkan Link Conference untuk Klien </Text>
                                            <Input style={{width: "100%", borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                                   name="conference_link"
                                                   disabled={props.disabled}
                                                   value={typeOfValue} onChange={handleChange}/>
                                        </>
                                }
                                {
                                    input.conference_link !== null && input.status !== "done" &&
                                    <Input style={{width: "100%", borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                           name="conference_link"
                                           disabled={true}
                                           value={input.conference_link} onChange={handleChange}/>
                                }
                            </Space>
                        </Space>
                    </form>
                    <br/>
                </>
            }
            <Space direction="horizontal">
                {
                    input.conference_link !== null && input.preference !== "offline" && input.status !== "done" &&
                    <>
                        <Link href={input.conference_link} target="_blank">
                            <PrimaryButton text="Masuk Conference"/>
                        </Link>
                    </>
                }
                {
                    input.conference_link === null && input.status !== "done" &&
                    <Button style={{borderRadius: 8}} value={input.id} form="1" type="primary" htmlType="submit">
                        Kirim Link ke Klien<ArrowRightOutlined/>
                    </Button>
                }
                {
                    input.conference_link !== null && input.status !== "done" &&
                    <>
                        <ButtonDanger onClick={showMessageModal} text="Akhiri Konsultasi"/>
                    </>
                }
            </Space>

            <ModalChooseAccount
                visible={isAccountVisible}
                onCancel={handleCancel}
                onFinish={handleVirtualAccount}
                onFinishFailed={handleVirtualAccountError}
                onChange={handleAccount}
            />

            <Modal
                className="profile-modal"
                title={<Title level={4}>Apakah Anda yakin mengakhiri konsultasi ini ?</Title>}
                visible={isMessageVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={onFinish}
                    onFinishFailed={onFinishFailed}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Tulis pesan Anda sebelum mengakhiri konsultasi untuk membantu klien memahami apa yang bisa dilakukan selanjutnya."
                        name="message"
                        rules={[
                            {
                                required: true,
                                message: 'Pesan harus diisi!',
                            },
                        ]}
                    >
                        <Input.TextArea onChange={handleChangeMessage} name="message" style={{height: 144, borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={24}>
                                <div>
                                    <PrimaryButton htmlType="submit" text="Selanjutnya"/>
                                </div>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default ConferenceLink