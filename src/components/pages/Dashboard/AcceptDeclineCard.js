import React, {useContext, useEffect, useState} from "react"
import {Card, Space, Modal, Form, Row, Col, Input, Typography} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import {useParams} from "react-router-dom";
import {ContextConsultationDetail} from "../../context/ContextConsultationDetail";
import ButtonDanger from "../../global/ButtonDanger";
import PrimaryButton from "../../global/ButtonPrimary";
import "../../../assets/css/dashboard.css"

const {Title} = Typography;

const AcceptDeclineCard = () => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById, functionAccept, functionDecline} = functions
    const [isDeclineVisible, setIsDeclineVisible] = useState(false);

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, [])

    const showDeclineModal = () => {
        setIsDeclineVisible(true);
    };

    const handleCancel = () => {
        setIsDeclineVisible(false);
    };

    const onFinish = () => {
        functionDecline(Id)
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function handleAccept(event) {
        let idClient = parseInt(event.currentTarget.value)

        functionAccept(idClient)
    }

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    return (
        <>
            <div className="dashboard-container">
                <Card style={{
                    width: 440,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 16,
                    boxShadow: "0px 5px 10px 0px #F1F2FA",
                    border: "none"
                }}>
                    <Space direction="vertical">
                        <Title level={5}>Apakah Anda Menerima Permintaan Konsultasi ini ?</Title>
                        <Space size={24}>
                            <PrimaryButton onClick={handleAccept}
                                           value={Id}
                                           text={<>
                                               <CheckOutlined/> <b>Terima Permintaan</b>
                                           </>}
                            />
                            <ButtonDanger onClick={showDeclineModal} text={<b>Tolak Permintaan</b>}/>
                        </Space>
                    </Space>
                </Card>
            </div>

            <Modal
                className="profile-modal"
                title={<Title level={4}>Apakah Anda yakin menolak permintaan Konsultasi ini ?</Title>}
                visible={isDeclineVisible}
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
                        label="Tulis alasan Anda menolak konsultasi untuk membantu klien memahami mengapa konsultasinya ditolak."
                        name="message"
                        required={false}
                        rules={[
                            {
                                required: true,
                                message: 'Silahkan isi pesan penolakan.',
                            },
                        ]}
                    >
                        <Input.TextArea onChange={handleChange} name="message" style={{height: 144, borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={12}>
                                <div style={{marginRight: 4}}>
                                    <PrimaryButton onClick={handleCancel} text="Batalkan"/>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div style={{marginLeft: 4}}>
                                    <ButtonDanger htmlType="submit" text="Tolak Permintaan"/>
                                </div>
                            </Col>
                        </Row>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

export default AcceptDeclineCard