import React from "react";
import {Row, Col} from 'antd';
import Nav from "../../layout/Header";
import ListContact from "./components/ListContact";
import SendMessage from "./components/SendMessage";

const Message = () => {

    return (
        <>
            <Row>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 12, order: 1}} style={{borderRight: "1px solid #CED4DA", minHeight: "100vh"}}>
                    <Nav title="Pesan" mobileTitle="Pesan" mobile="true"/>
                    <ListContact/>
                </Col>
                <Col xs={{span: 0, order: 2}} sm={{span: 0, order: 2}} lg={{span: 12, order: 2}}>
                    <SendMessage/>
                </Col>
            </Row>
        </>
    )
}

export default Message