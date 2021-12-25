import React, {useContext, useEffect, useState} from "react";
import {Space, Card, Typography, Row, Col, Button} from 'antd';
import {MagnifyingGlass} from "phosphor-react";
import InputText from "../../../global/InputText";
import 'antd/dist/antd.css';
import "../../../../assets/css/message.css"
import {ContextMessage} from "../../../context/ContextMessage";
import {useHistory} from "react-router-dom";

const {Text} = Typography;

const ListContact = () => {
    let history = useHistory()
    const {input, setUserName, setMessageId, setIsEnded, setClientId, functions} = useContext(ContextMessage)
    const {fetchDataById} = functions
    const [q, setQ] = useState("");
    let counter = 0;

    useEffect(() => {
        fetchDataById()
    }, [])

    const handleGetMessage = (id, name, end, clientId) => {
        setMessageId(id)
        setUserName(name)
        setIsEnded(end)
        setClientId(clientId)
    }

    const handleGetMessageMobile = (id, name, end, clientId) => {
        setMessageId(id)
        setUserName(name)
        setIsEnded(end)
        setClientId(clientId)

        history.push("/get-message")
    }

    const dataMessage = input.data && (
        <>
            {/* eslint-disable-next-line array-callback-return */}
            {input.data.filter((e) => {
                if (q === "")
                    return e
                else if (e.user_name.toLowerCase().includes(q.toLowerCase())) {
                    return e
                }
            }).map(e => {
                return (
                    <>
                        <Card style={{width: "100%", borderRadius: 12, border: "none", cursor: "pointer"}}
                              className="hightlight"
                              tabindex={counter + 1}
                              onClick={() => handleGetMessage(e.id, e.user_name, e.is_ended, e.user_id)}
                              bodyStyle={{padding: 16}}>
                            <Space size={8} direction="vertical">
                                <Space size={4} direction="vertical">
                                    <Text style={{color: "#222729", fontWeight: "700"}}>{e.user_name}</Text>
                                    <Text style={{color: "#4B4B4B"}}>{e.last_messages}</Text>
                                </Space>
                                <h5 style={{color: "#979595"}}>{e.last_messages_time} WIB</h5>
                            </Space>
                        </Card>
                    </>
                )
            })}
        </>
    )

    const dataMessageMobile = input.data && (
        <>
            {/* eslint-disable-next-line array-callback-return */}
            {input.data.filter((e) => {
                if (q === "")
                    return e
                else if (e.user_name.toLowerCase().includes(q.toLowerCase())) {
                    return e
                }
            }).map(e => {
                return (
                    <>
                        <Card style={{width: "100%", borderRadius: 12, border: "none", cursor: "pointer"}}
                              className="hightlight"
                              tabindex={counter + 1}
                              onClick={() => handleGetMessageMobile(e.id, e.user_name, e.is_ended, e.user_id)}
                              bodyStyle={{padding: 16}}>
                            <Space size={8} direction="vertical">
                                <Space size={4} direction="vertical">
                                    <Text style={{color: "#222729", fontWeight: "700"}}>{e.user_name}</Text>
                                    <Text style={{color: "#4B4B4B"}}>{e.last_messages}</Text>
                                </Space>
                                <h5 style={{color: "#979595"}}>{e.last_messages_time} WIB</h5>
                            </Space>
                        </Card>
                    </>
                )
            })}
        </>
    )

    return (
        <>
            <div className="container-profile">
                <Space size={16} direction="vertical" style={{width: "100%"}}>
                    <InputText placeholder="Cari nama client" value={q} onChange={(e) => setQ(e.target.value)}/>
                    <Space size={8} direction="vertical" style={{width: "100%"}}>
                        <Row>
                            <Col xs={{span: 0,}} sm={{span: 0}} lg={{span: 24}}>
                                {dataMessage}
                            </Col>
                            <Col xs={{span: 24}} sm={{span: 24}} lg={{span: 0}}>
                                {dataMessageMobile}
                            </Col>
                        </Row>
                    </Space>
                </Space>
            </div>
        </>
    )
}

export default ListContact