import React, {useContext, useEffect, useState} from "react";
import {Row, Col, PageHeader, Form, Space, Upload, message, Button, Card, Modal, Input, Typography} from 'antd';
import Nav from "../../layout/Header";
import {ContextProfile} from "../../context/ContextProfile";
import {Select} from 'antd';
import {useHistory} from "react-router";
import {X, Pencil} from "phosphor-react";
import ModalVirtualAccount from "../../global/ModalVirtualAccount";

const {Option} = Select;
const {Text} = Typography;

const EditProfile = () => {
    let history = useHistory()

    const {input, setInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditProfile, functionDeleteVirtualAccount} = functions
    const [isAccountVisible, setIsAccountVisible] = useState(false);

    useEffect(() => {
        fetchData()
    }, [])

    const showAccountModal = () => {
        setIsAccountVisible(true);
    };

    const handleCancel = () => {
        setIsAccountVisible(false);
    };

    const handleVirtualAccount = (values) => {
        values["id"] = -1
        let virtualAccountInput = input.consultant_virtual_account.push(values)
        setInput({...input, virtualAccountInput})

        setIsAccountVisible(false);
        functionEditProfile()
    };

    const handleVirtualAccountError = (errorInfo) => {
        console.log('Failed:', errorInfo);
    };

    //upload dokumentasi kerja
    const props = {
        onChange({file}) {
            if (file.status !== 'uploading') {
                const values = {
                    id: -1,
                    photo: file.name
                };
                let documentationInput = input.consultant_documentation.push(values)

                console.log("ini documentation input")
                console.log(values)
                //setInput({...input, documentationInput})
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

        functionEditProfile()
        history.push(`/profile`)
    }

    const handleDeleteVirtualAccount = (event) => {
        let idVA = parseInt(event.currentTarget.value)

        functionDeleteVirtualAccount(idVA)
    }

    return (
        <>
            <Nav/>
            <div className="container-profile" >
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
                                                <Col span={15}>
                                                    <Text strong>{e.name}</Text>
                                                    <br/>
                                                    <Text type="secondary">{e.bank} - {e.card_number}</Text>
                                                </Col>
                                                <Col span={4}>
                                                    <Space>
                                                        <Button value={e.id}
                                                                style={{padding: 0, paddingTop: 10}} type="link"><Pencil
                                                            size={24} weight="fill"/></Button>
                                                        <Button value={e.id}
                                                                style={{padding: 0, paddingTop: 10}}
                                                                onClick={handleDeleteVirtualAccount} type="link"><X
                                                            size={24}/></Button>
                                                    </Space>
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
                            <Upload {...props} response={false}>
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

            <ModalVirtualAccount
                visible={isAccountVisible}
                onCancel={handleCancel}
                onFinish={handleVirtualAccount}
                onFinishFailed={handleVirtualAccountError}
            />
        </>
    )
}

export default EditProfile