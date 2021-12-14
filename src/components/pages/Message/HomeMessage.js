import React, {useContext, useEffect, useState} from "react";
import {Space, Card, Typography, Row, Col, Button} from 'antd';
import {MagnifyingGlass} from "phosphor-react";
import InputText from "../../global/InputText";
import 'antd/dist/antd.css';
import "../../../assets/css/message.css"
import {ContextMessage} from "../../context/ContextMessage";

const {Text} = Typography;

const HomeMessage = () => {
    const {input, setUserName, setMessageId, setIsEnded, functions} = useContext(ContextMessage)
    const {fetchDataById} = functions

    useEffect(() => {
        fetchDataById()
    }, [])

    const handleGetMessage = (id, name, end) => {
        setMessageId(id)
        setUserName(name)
        setIsEnded(end)
    }
    return (
        <>
            <div className="container-profile">
                <Space size={16} direction="vertical" style={{width: "100%"}}>
                    <InputText placeholder="Cari nama client"/>
                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                        {
                            input.data && (
                                <>
                                    {input.data.map((e, index) => {
                                        return (
                                            <>
                                                <Card style={{width: "100%", borderRadius: 12, border: "none"}}
                                                      className="hightlight"
                                                      onClick={() => handleGetMessage(e.id, e.user_name, e.is_ended)}
                                                      bodyStyle={{padding: 16}}>
                                                    <Space size={8} direction="vertical">
                                                        <Space size={4} direction="vertical">
                                                            <Text strong>{e.user_name}</Text>
                                                            <Text>{e.last_messages}</Text>
                                                        </Space>
                                                        <h5 style={{color: "#979595"}}>{e.last_messages_time} WIB</h5>
                                                    </Space>
                                                </Card>
                                            </>
                                        )
                                    })}
                                </>
                            )
                        }
                    </Space>
                </Space>
            </div>
        </>
    )
}

export default HomeMessage