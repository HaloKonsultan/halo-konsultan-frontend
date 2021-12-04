import React from "react";
import Nav from "../../layout/Header";
import { Input, Space, Card, Typography, Layout} from 'antd';
import {SendOutlined} from "@ant-design/icons";
import Cookies from "js-cookie";


const { Footer } = Layout;
const { Text} = Typography;
const SendMessage = () => {

    return (
        <>
        <Layout>
        <Footer style={{backgroundColor: "white"}}>
        <Card style={{ width: 92, height:40, borderRadius: 20 }}>
                 <h5 style={{color: "gray"}}>
                              6/6/21
                            </h5>
        </Card>
            <Input style={{borderRadius: 26, height: 48 }}
                    placeholder="Tulis Pesanmu disini"
                     /></Footer>
        </Layout>
         
          
        </>
    )
}

export default SendMessage