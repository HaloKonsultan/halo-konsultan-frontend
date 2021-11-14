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

    const handleLogo = (bank) => {
        switch (bank) {
            case "BRI":
                return ("https://i.pinimg.com/originals/f8/0a/ac/f80aac3c5591e45f0d1da6b07a801b7c.png")
                break;
            case "BNI":
                return ("https://i.pinimg.com/originals/36/38/43/36384348ef9d7bfff66da6da9e975d56.png")
                break;
            case "BCA":
                return ("https://pngimage.net/wp-content/uploads/2018/05/bank-bca-png-4.png")
                break;
            case "BSI":
                return ("https://1.bp.blogspot.com/-4qkYYe_sQoI/YBvH0NmYCjI/AAAAAAAAab0/DpiJkew5pPg2kZeoYp3uLqAuoBs7wwldwCLcBGAsYHQ/s1280/Download%2BLogo%2BBANK%2BSYARIAH%2BINDONESIA%2BCDR%2Bdan%2BPNG.png")
                break;
            case "MANDIRI":
                return ("https://kinetic.id/wp-content/uploads/2018/07/mandiri.png")
                break;
            case "MAYBANK":
                return ("https://images.squarespace-cdn.com/content/v1/5c756c67e5f7d15021008390/1563961660176-L5DY9LBJBNI1ET9VFMD2/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/03-Maybank.png")
                break;
            case "CITIBANK":
                return ("https://lh3.googleusercontent.com/proxy/cz7GXD75bzQngamG_qvKJH2v7nC5mqZi5wLQPiRk8iOvGj5iOrR5rTjehImWCYK6hGrDa8XpKU6AUWNCkJDQOxsDyT1eaEw_ZOgCTWTIR5GF")
                break;
        }
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
                                                <Col span={2}>
                                                    <img src={handleLogo(e.bank)} alt="" style={{
                                                        width: 40,
                                                        height: 40,
                                                        objectFit: "cover",
                                                        borderRadius: 4,
                                                    }}/>
                                                </Col>
                                                <Col span={1}/>
                                                <Col span={17}>
                                                    <Text strong>{e.name}</Text>
                                                    <br/>
                                                    <Text type="secondary">{e.bank} - {e.card_number}</Text>
                                                </Col>
                                                <Col span={4}>
                                                    <Space>
                                                        {/*<Button value={e.id}*/}
                                                        {/*        style={{padding: 0, paddingTop: 10}} type="link"><Pencil*/}
                                                        {/*    size={24} weight="fill"/></Button>*/}
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