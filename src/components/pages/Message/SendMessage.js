import React, {useContext, useEffect} from "react";
import {Card, Input, Row, Col, Tag} from 'antd';
import {Typography, Space, Button} from 'antd';
import {Layout} from 'antd';
import {PaperPlaneRight} from "phosphor-react";
import NavMessage from "../../layout/HeaderMessage";
import {ContextMessage} from "../../context/ContextMessage";

const {Footer, Content} = Layout;
const {Text, Link} = Typography;

const SendMessage = () => {
    const {input, inputMessage, setInputMessage, userName, messageId, isEnded, message, setMessage, functions} = useContext(ContextMessage)
    const {fetchMessageById, functionSendMessage, fetchDataById} = functions

    useEffect(() => {
        fetchMessageById(messageId)
    }, [messageId])

    const createMessage = (event) => {
        let typeOfValue = event.currentTarget.value
        setMessage(typeOfValue)
    }

    const sendMessage = (event) => {
        event.preventDefault()

        functionSendMessage()
        fetchMessageById(messageId)
        fetchDataById()
        setMessage("")
    }

    return (
        <>
            {
                messageId &&
                <>
                    <NavMessage title={userName}/>
                    <Layout style={{backgroundColor: "white"}}>
                        <Content style={{backgroundColor: "white", padding: 24}}>
                            <Space direction="vertical" size={24} style={{width: "100%", minHeight: "80vh"}}>
                                {
                                    inputMessage.data && (
                                        <>
                                            {inputMessage.data.map((e, index) => {
                                                return (
                                                    <>
                                                        {
                                                            e.sender === "client" &&
                                                            <Card style={{
                                                                float: "left",
                                                                border: "none",
                                                                borderRadius: "12px 12px 12px 0",
                                                                backgroundColor: "#F4F4F4"
                                                            }}
                                                                  bodyStyle={{padding: "8px 16px 8px 16px"}}>
                                                                <Text>{e.message}</Text>
                                                            </Card>
                                                        }
                                                        {
                                                            e.sender === "consultant" &&
                                                            <Card style={{
                                                                float: "right",
                                                                border: "none",
                                                                borderRadius: "12px 12px 0 12px",
                                                                backgroundColor: "#3B85FA"
                                                            }}
                                                                  bodyStyle={{padding: "8px 16px 8px 16px"}}>
                                                                <Text style={{color: "white"}}>{e.message}</Text>
                                                            </Card>
                                                        }

                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </Space>
                        </Content>
                        {
                            isEnded === 0 &&
                            <Footer style={{position: "sticky", bottom: "0", backgroundColor: "white"}}>
                                <Row gutter={8}>
                                    <Col span={23}>
                                        <Input style={{height: 56, borderRadius: 28, width: "100%"}} value={message}
                                               onChange={createMessage}/>
                                    </Col>
                                    <Col span={1}>
                                        <Button onClick={sendMessage} type="primary"
                                                style={{height: 56, width: 56, padding: 12}} shape="circle" size="large"
                                                icon={<PaperPlaneRight size={32} style={{color: "white"}}
                                                                       weight="fill"/>}/>
                                    </Col>
                                </Row>
                            </Footer>
                        }
                        {
                            isEnded === 1 &&
                            <Footer style={{position: "sticky", bottom: "0", backgroundColor: "white"}}>
                                <Row>
                                    <Col span={24}>
                                        <Space direction="horizontal" style={{width: '100%', justifyContent: 'center'}}>
                                            <Tag style={{borderRadius: 20, color: "#F63131", fontWeight: "bold"}}
                                                 color='#FDD6D6'>
                                                Diskusi telah diakhiri
                                            </Tag>
                                        </Space>
                                    </Col>
                                </Row>
                            </Footer>
                        }

                    </Layout>
                </>
            }
        </>
    )
}

export default SendMessage