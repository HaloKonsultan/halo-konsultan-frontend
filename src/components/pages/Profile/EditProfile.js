import React, {useContext, useEffect, useState} from "react";
import {
    Row, 
    Col, 
    PageHeader, 
    Space, 
    Upload, 
    Button, 
    Card, 
    Typography} from 'antd';
import Nav from "../../layout/Header";
import {ContextProfile} from "../../context/ContextProfile";
import {Select} from 'antd';
import {useHistory} from "react-router";
import {X, Pencil} from "phosphor-react";
import ModalVirtualAccount from "../../global/ModalVirtualAccount";
import ImageBank from "../../global/ImageBank";
import InputText from "../../global/InputText";
import LabelText from "../../global/LabelText";

const {Option} = Select;
const {Text, Title} = Typography;

const EditProfile = () => {
    let history = useHistory()

    const {input, setInput, functions} = useContext(ContextProfile)
    const {fetchData, functionEditProfile, functionDeleteVirtualAccount, functionUploadImage} = functions
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

    const onImageChange = (event) => {
        let formdata = new FormData()

        if (event.target.files && event.target.files[0]) {
            let img = event.target.files[0];

            formdata.append('consultation_doc', img)
            functionUploadImage(formdata)

            const values = {
                id: -1,
                photo: URL.createObjectURL(img)
            };

            let documentationInput = input.consultant_documentation.push(values)
            setInput({...input, documentationInput})
        }
    }

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
            <div className="container-profile" style={{display: "flex", alignItems: "center"}}>
                <Row>
                    <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 24, order: 1}}>
                        <Card title={<Title level={4}>Edit Profil Konsultasi</Title>}
                              style={{
                                  width: "100%",
                                  borderRadius: 8,
                                  boxShadow: "0px 5px 10px 0px #F1F2FA",
                                  border: "none"
                              }}>

                            <Space size={24} direction="vertical" style={{width: "100%"}}>
                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <PageHeader
                                        style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                        ghost={false}
                                        subTitle={<LabelText text="Rekening"/>}
                                        extra={[
                                            <Button
                                                onClick={showAccountModal} style={{color: "#3B85FA", padding: 0}}
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
                                                            <Row gutter={[16, 16]}>
                                                                <Col lg={3} md={3} xs={4}><ImageBank
                                                                    bank={e.bank}/></Col>
                                                                <Col lg={19} md={18} xs={16}>
                                                                    <Text strong>{e.name}</Text><br/>
                                                                    <Text
                                                                        type="secondary">{e.bank} - {e.card_number}</Text>
                                                                </Col>
                                                                <Col lg={2} md={3} xs={2}>
                                                                    <Space>
                                                                        {/*<Button value={e.id}*/}
                                                                        {/*        style={{padding: 0, paddingTop: 10}} type="link"><Pencil*/}
                                                                        {/*    size={24} weight="fill"/></Button>*/}
                                                                        <Button value={e.id} style={{
                                                                            padding: 0, paddingTop: 10, float: "right"
                                                                        }} onClick={handleDeleteVirtualAccount}
                                                                                type="link"><X
                                                                            size={24}/></Button>
                                                                    </Space>
                                                                </Col>
                                                            </Row>
                                                        </>
                                                    )
                                                })}
                                            </>
                                        )
                                    }
                                </Space>
                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <LabelText text="Harga Jasa Diskusi"/>
                                    <InputText name="chat_price" placeholder="Harga Jasa Diskusi"
                                               value={input.chat_price}
                                               onChange={handleChange}/>
                                </Space>
                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <LabelText text="Harga Jasa Konsultasi"/>
                                    <InputText name="consultation_price" placeholder="Harga Jasa Konsultasi"
                                               value={input.consultation_price}
                                               onChange={handleChange}/>
                                </Space>
                                <Space size={8} direction="vertical" style={{width: "100%"}}>
                                    <PageHeader
                                        style={{backgroundColor: "transparent", padding: 0, width: "100%"}}
                                        ghost={false}
                                        subTitle={<LabelText text="Dokumentasi Kerja"/>}
                                        extra={[
                                            <input type="file" style={{color: "#3B85FA", padding: 0}} onChange={onImageChange}/>
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
                                </Space>
                                <Button size="large"
                                        className="button"
                                        type="primary"
                                        block style={{borderRadius: 8, backgroundColor: "#3B85FA"}}
                                        onClick={handleSubmit}>
                                    Simpan
                                </Button>
                            </Space>
                        </Card>
                    </Col>
                </Row>
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