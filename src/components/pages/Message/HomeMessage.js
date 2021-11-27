import React from "react";
import Nav from "../../layout/Header";
import { Input, Space, Card, Typography } from 'antd';
import {SearchOutlined} from '@ant-design/icons';
import {MagnifyingGlass} from "phosphor-react";
const { Search } = Input;
const { Text} = Typography;
const onSearch = value => console.log(value);

const HomeMessage = () => {

    return (
        <>
     <Space size={0} direction="vertical" style={{width: "100%", borderRight: " 1px solid #CED4DA"}}>
     <Input style={{borderRadius: 8, width:436, height: 48, backgroundColor: "#F4F4F4" }}  
            prefix={<MagnifyingGlass size={24} color="#979595" />}
                    placeholder="Cari nama client" /><br/>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            <Card style={{ width: 436, height:134, borderRadius: 12 }}>
            <Space size={5} direction="vertical"> 
                 <Text strong>Muhammad Ridlo</Text>
                 <Text>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt...</Text>
                 <h5 style={{color: "gray"}}>
                                Hari ini, 16:45 WIB
                            </h5>
                            </Space>
            </Card>
            
            </Space>
           
        </>
    )
}

export default HomeMessage