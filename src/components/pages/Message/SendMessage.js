import React from "react";
import {Card, Input} from 'antd';
import {Typography, Space, Button} from 'antd';
import {Layout} from 'antd';

const {Header, Footer, Sider, Content} = Layout;
const {Text, Link} = Typography;

const SendMessage = () => {

    return (
        <>
            <Layout style={{backgroundColor: "white"}}>
                <Content style={{backgroundColor: "white", padding: 24}}>
                    <Space direction="vertical" size={24} style={{width: "100%", minHeight: "100vh"}}>
                        <Card style={{
                            width: "80%",
                            border: "none",
                            borderRadius: "12px 12px 12px 0",
                            backgroundColor: "#F4F4F4"
                        }}
                              bodyStyle={{padding: "8px 16px 8px 16px"}}>
                            <Text>Selamat siang mas Fatih, saya ingin meminta bantuan untuk perancangan topologi
                                jaringan di perusahaan saya.</Text>
                        </Card>
                        <Card style={{
                            float: "right",
                            border: "none",
                            borderRadius: "12px 12px 0 12px",
                            backgroundColor: "#3B85FA"
                        }}
                              bodyStyle={{padding: "8px 16px 8px 16px"}}>
                            <Text style={{color: "white"}}>Selamat siang mas Fatih, saya Himma Filangga, konsultan Anda.
                                Ada yang bisa saya bantu ?</Text>
                        </Card>
                        <Card style={{
                            width: "80%",
                            border: "none",
                            borderRadius: "12px 12px 12px 0",
                            backgroundColor: "#F4F4F4"
                        }}
                              bodyStyle={{padding: "8px 16px 8px 16px"}}>
                            <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                                exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure
                                dolor in reprehenderit in voluptate... </Text>
                        </Card>
                        <Card style={{
                            float: "right",
                            border: "none",
                            borderRadius: "12px 12px 0 12px",
                            backgroundColor: "#3B85FA"
                        }}
                              bodyStyle={{padding: "8px 16px 8px 16px"}}>
                            <Text style={{color: "white"}}>Lorem Ipsum dolor sit amet</Text>
                        </Card>
                    </Space>
                </Content>
                <Footer style={{position: "sticky", bottom: "0", backgroundColor: "white"}}>
                    <Input style={{height: 56, borderRadius: 28, width: "100%"}}/>
                </Footer>
            </Layout>
        </>
    )
}

export default SendMessage