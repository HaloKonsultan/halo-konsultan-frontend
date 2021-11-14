import React, {useContext, useEffect, useState} from "react"
import {Button, Card, Space, Typography, Input, Form, Select, Modal} from 'antd';
import 'antd/dist/antd.css';
import {useParams} from "react-router-dom";
import {ContextConsultationDetail} from "../../context/ContextConsultationDetail";
import {Row, Col} from 'antd';
import {ArrowRightOutlined, FileTextOutlined} from '@ant-design/icons';
import Cookies from "js-cookie";
import ConsultationDocument from "./ConsultationDocument";
import ButtonDanger from "../../global/ButtonDanger";
import PrimaryButton from "../../global/ButtonPrimary";
import ModalChooseAccount from "../../global/ModalChooseAccount";

const {Option} = Select;
const {Title, Link, Text} = Typography;

const SendLink = (props) => {
    let {Id} = useParams()
    console.log(Id)

    const {input, setInput, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById, functionSubmit, funtionEndConsultation} = functions
    const [isAccountVisible, setIsAccountVisible] = useState(false);

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
    };

    const handleChange = (event) => {
        let typeOfValue = event.target.value
        let name = event.target.name

        setInput({...input, [name]: typeOfValue})
    };

    // const handleStatus = () => {
    //     functionUpdateStatus(Id)
    // }

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
        console.log(input)

        functionSubmit(Id)
    };

    return (
        <>
            {
                input.preference !== "offline" &&
                <>
                    <form id="1" onSubmit={handleSubmit}>
                        <Space size={24} direction="vertical">
                            <Space size={8} direction="vertical">
                                <Text type="secondary">Masukkan Link Conference untuk Klien </Text>
                                <Input style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}
                                       name="conference_link"
                                       disabled={props.disabled}
                                       value={input.conference_link} onChange={handleChange}/>
                            </Space>
                        </Space>
                    </form>
                    <br/>
                </>
            }
            <Space direction="horizontal">
                {
                    input.conference_link !== null && input.preference !== "offline" &&
                    <>
                        <Link href={input.conference_link} target="_blank">
                            <Button
                                block
                                size="large"
                                className="button"
                                type="primary"
                                style={{borderRadius: 8, height: 44, backgroundColor: "#3B85FA"}}>
                                Masuk Conference
                            </Button>
                        </Link>
                    </>
                }
                {
                    input.conference_link === null &&
                    <Button style={{borderRadius: 8}} value={input.id} form="1" type="primary" htmlType="submit">
                        Kirim Link ke Klien<ArrowRightOutlined/>
                    </Button>
                }
                {
                    input.conference_link !== null &&
                    <>
                        <ButtonDanger onClick={showAccountModal} text="Akhiri Konsultasi"/>
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
        </>
    )
}

export default SendLink