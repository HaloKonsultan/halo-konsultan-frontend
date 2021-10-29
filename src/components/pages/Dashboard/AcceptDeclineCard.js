import React, {useContext, useEffect, useState} from "react"
import {Card, Button, Space, Modal, Form, Row, Col, Input} from 'antd';
import {Typography} from 'antd';
import {CheckOutlined} from '@ant-design/icons';
import {Link, useParams} from "react-router-dom";
import {ConsultationDetailContext} from "../../context/ConsultationDetailContext";

const {Title} = Typography;

const AcceptDeclineCard = () => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, currentId, setCurrentId, functions} = useContext(ConsultationDetailContext)
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

    const onFinish = (values) => {
        console.log('Success:', values);
        setInput({...input, values})

        console.log(input)
        setIsDeclineVisible(false);
    };

    const onFinishFailed = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    function handleAccept(event) {
        let idClient = parseInt(event.currentTarget.value)

        functionAccept(idClient)
    }

    return (
        <>
            <div className="dashboard-container">
                <Card style={{
                    width: 440,
                    display: "flex",
                    justifyContent: "center",
                    borderRadius: 16,
                    boxShadow: "0 0 0 1px #CED4DA"
                }}>
                    <Space direction="vertical">
                        <Title level={5}>Apakah Anda Menerima Permintaan Konsultasi ini ?</Title>
                        <Space size={24}>
                            <Button onClick={handleAccept} value={Id} style={{height: 44, width: 188, borderRadius: 8}}
                                    type="primary"><CheckOutlined/> <b>Terima Permintaan</b></Button>
                            <Button onClick={showDeclineModal} style={{height: 44, borderRadius: 8}} danger><b>Tolak
                                Permintaan</b></Button>
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
                        rules={[
                            {
                                required: false,
                                message: 'Please input message name!',
                            },
                        ]}
                    >
                        <Input.TextArea style={{height: 144, borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <Row>
                            <Col span={12}>
                                <div style={{marginRight: 4}}>
                                    <Button
                                        block
                                        onClick={handleCancel}
                                        size="large"
                                        className="button"
                                        type="primary"
                                        style={{borderRadius: 8, height: 44, backgroundColor: "#3B85FA"}}
                                        htmlType="submit">
                                        Batalkan
                                    </Button>
                                </div>
                            </Col>
                            <Col span={12}>
                                <div style={{marginLeft: 4}}>
                                    <Button
                                        block
                                        size="large"
                                        className="button"
                                        type="default"
                                        style={{height: 44, borderRadius: 8}} danger>
                                        Tolak Permintaan
                                    </Button>
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