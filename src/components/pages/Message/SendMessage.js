import React from "react";
import Nav from "../../layout/Header";
import { Input, Space, Card, Typography, Layout} from 'antd';
import {SendOutlined} from "@ant-design/icons";
import Cookies from "js-cookie";
import {PaperPlaneRight} from "phosphor-react";

const { Footer } = Layout;
const { Text} = Typography;
const SendMessage = () => {

    return (
        <>
        <Layout style={{backgroundColor : "white"}}>
        <Space size={500} direction="vertical"> 
        {/* <div className="profile-label">    */}
        <Card style={{ width: 92, height:40, borderRadius: 20, }}>
                 {/* <h5 style={{color: "gray"}}>
                              6/6/21
                            </h5> */}
            </Card>
           
            <Input style={{borderRadius: 26, height: 56}}
                    placeholder="Tulis Pesanmu disini" 
                    prefix={<PaperPlaneRight size={24} color="#3B85FA"/>}
                     /></Space>
        </Layout>
          
        </>
    )
}

export default SendMessage