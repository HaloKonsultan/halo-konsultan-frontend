import React from "react";
import {Row, Col} from 'antd';
import Nav from "../../layout/Header";
import HomeMessage from "./HomeMessage";
import SendMessage from "./SendMessage";
import NavMessage from "../../layout/HeaderMessage";

const Message = () => {

    return (
        <>
            <Row>
                <Col span={12} style={{borderRight: "1px solid #CED4DA", minHeight: "100vh"}}>
                    <Nav title="Pesan" mobileTitle="Pesan" mobile="true"/>
                    <HomeMessage/>
                </Col>
                <Col span={12}>
                    <SendMessage/>
                </Col>
            </Row>
        </>
    )
}

export default Message