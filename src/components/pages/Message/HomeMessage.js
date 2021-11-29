import React, {useContext, useEffect, useState} from "react";
import {Space, Card, Typography} from 'antd';
import {MagnifyingGlass} from "phosphor-react";
import InputText from "../../global/InputText";
import 'antd/dist/antd.css';
import "../../../assets/css/message.css"

const {Text} = Typography;

const HomeMessage = () => {
    const [background, setBackground] = useState("white");

    return (
        <>
            <Space size={16} direction="vertical" style={{width: "100%"}}>
                <InputText placeholder="Cari nama client"/>
                <Space size={8} direction="vertical" style={{width: "100%"}}>
                    <Card style={{width: "100%", borderRadius: 12, border: "none"}}
                          className="hightlight"
                          bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                    <Card style={{width: "100%", borderRadius: 12, border: "none", backgroundColor: "#F8F8F8"}} bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                    <Card style={{width: "100%", borderRadius: 12, border: "none"}} bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                    <Card style={{width: "100%", borderRadius: 12, border: "none"}} bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                    <Card style={{width: "100%", borderRadius: 12, border: "none"}} bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                    <Card style={{width: "100%", borderRadius: 12, border: "none"}} bodyStyle={{padding: 16}}>
                        <Space size={8} direction="vertical">
                            <Space size={4} direction="vertical">
                                <Text strong>Muhammad Ridlo</Text>
                                <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                                    incididunt...</Text>
                            </Space>
                            <h5 style={{color: "#979595"}}>Hari ini, 16:45 WIB</h5>
                        </Space>
                    </Card>
                </Space>
            </Space>
        </>
    )
}

export default HomeMessage