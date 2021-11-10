import React, {useContext, useEffect, useState} from "react";
import {Row, Col, PageHeader, Form, Space, Upload, message, Button, Card, Modal, Input, Typography} from 'antd';
import Nav from "../../layout/Header";
import {ContextProfile} from "../../context/ContextProfile";
import {Select} from 'antd';
import PrimaryButton from "../../global/ButtonPrimary";

const {Option} = Select;
const {Text} = Typography;

const EditProfile = () => {
    const {input, setInput, arrayInput, setArrayInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditProfile} = functions
    const [isAccountVisible, setIsAccountVisible] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    //upload rekening bank
    const showAccountModal = () => {
        setIsAccountVisible(true);
    };

    const handleCancel = () => {
        setIsAccountVisible(false);
    };

    //upload rekening
    const handleVirtualAccount = (values) => {
        let virtualAccountInput = input.consultant_virtual_account.push(values)
        setInput({...input, virtualAccountInput})

        setIsAccountVisible(false);
    };

    const handleVirtualAccountError = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //upload dokumentasi kerja
    const props = {
        onChange({file}) {
            if (file.status !== 'uploading') {
                const arrayTemp = {
                    photo: file.name
                };
                let documentationInput = input.consultant_documentation.push(arrayTemp)

                setInput({...input, documentationInput})
            }
        },
    };

    const handleChange = (event) => {
        let typeOfValue = event.currentTarget.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("input bang")
        console.log(input)
        console.log("================")

        functionEditProfile()
    }

    return (
        <>
            <Nav/>
            <Col sm={{span: 24, order: 1}}>
            <div className="container-profile">
                <Card title="Edit Profil Konsultasi"
                      style={{width: "41%", borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}>
                    <PageHeader
                        style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                        ghost={false}
                        subTitle={<Text type="secondary">Rekening</Text>}
                        extra={[
                            <Button
                                onClick={showAccountModal}
                                style={{
                                    color: "#3B85FA"
                                }}
                                type="text">
                                <b>+ Tambah Rekening</b>
                            </Button>,
                        ]}/>
                    {
                        input.consultant_virtual_account && (
                            <>
                                {input.consultant_virtual_account.map((e, index) => {
                                    return (
                                        <>
                                            <Row>
                                                <Col span={4}>logo kak</Col>
                                                <Col span={1}/>
                                                <Col span={19}>
                                                    <Text strong>{e.name}</Text>
                                                    <br/>
                                                    <Text type="secondary">{e.bank} - {e.card_number}</Text>
                                                </Col>
                                            </Row>
                                            <p/>
                                        </>
                                    )
                                })}
                            </>
                        )
                    }
                    <br/>

                    <form id="1" method="post" onSubmit={handleSubmit}>
                        <Text type="secondary">Harga Jasa Diskusi</Text>
                        <Input style={{borderRadius: 8, height: 48}}
                               name="chat_price"
                               onChange={handleChange}
                               placeholder="Harga Jasa Diskusi"
                               value={input.chat_price}/><br/><br/>

                        <Text type="secondary">Harga Jasa Konsultasi</Text>
                        <Input style={{borderRadius: 8, height: 48}}
                               name="consultation_price"
                               onChange={handleChange}
                               placeholder="Harga Jasa Konsultasi"
                               value={input.consultation_price}/><br/><br/>
                    </form>

                    <PageHeader
                        style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                        ghost={false}
                        subTitle={<Text type="secondary">Dokumentasi Kerja</Text>}
                        extra={[
                            <Upload {...props}>
                                <Button
                                    style={{
                                        color: "#3B85FA"
                                    }}
                                    type="text">
                                    <b>+ Tambah Dokumentasi Kerja</b>
                                </Button>
                            </Upload>,
                        ]}/>
                    <ul>
                        <Space size={[8, 8]} wrap>
                            {
                                input.consultant_documentation && (
                                    <>
                                        {input.consultant_documentation.map((e, index) => {
                                            return (
                                                <>
                                                    <li>
                                                        <img src={e.photo}
                                                             alt="" style={{
                                                            width: 210,
                                                            height: 168,
                                                            objectFit: "cover",
                                                            borderRadius: 8,
                                                            boxShadow: "0 0 0 1px #CED4DA"
                                                        }}/>
                                                    </li>
                                                </>
                                            )
                                        })}
                                    </>
                                )
                            }
                        </Space>
                    </ul>

                    <Button size="large"
                            className="button"
                            type="primary"
                            block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                            htmlType="submit"
                            form="1">
                        Simpan
                    </Button>
                </Card>
                <br/>
            </div>

            {/*MODAL HERE*/}
            <Modal
                className="profile-modal"
                title="Tambahkan Rekening"
                visible={isAccountVisible}
                onCancel={handleCancel}
                footer={null}
            >
                <Form
                    name="basic"
                    initialValues={{
                        remember: true,
                    }}
                    layout="vertical"
                    onFinish={handleVirtualAccount}
                    onFinishFailed={handleVirtualAccountError}
                    autoComplete="off"
                >
                    <Form.Item
                        label="Nama Bank"
                        name="bank"
                        rules={[
                            {
                                required: true,
                                message: 'Please input bank name!',
                            },
                        ]}
                    >
                        <Select
                            block
                            showSearch
                            style={{borderRadius: 8}}
                            placeholder="Pilih bank"
                            optionFilterProp="children"
                            filterOption={(input, option) =>
                                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
                            }
                        >
                            <Option value="BRI">BRI</Option>
                            <Option value="BNI">BNI</Option>
                            <Option value="BCA">BCA</Option>
                        </Select>
                    </Form.Item>

                    <Form.Item
                        label="Nomor Rekening"
                        name="card_number"
                        rules={[
                            {
                                required: true,
                                message: 'Please input rekening number!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item
                        label="Nama Pemegang Rekening"
                        name="name"
                        rules={[
                            {
                                required: true,
                                message: 'Please input rekening name!',
                            },
                        ]}
                    >
                        <Input style={{borderRadius: 8}}/>
                    </Form.Item>

                    <Form.Item>
                        <PrimaryButton htmlType="submit" text="Tambahkan Rekening"/>
                    </Form.Item>
                </Form>
            </Modal>
            </Col>
        </>
    )
}

export default EditProfile