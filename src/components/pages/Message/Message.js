import React from "react";
import {Row, Col} from 'antd';
import Nav from "../../layout/Header";
import HomeMessage from "./HomeMessage";
import SendMessage from "./SendMessage";
import NavMessage from "../../layout/HeaderMessage";

const Message = () => {

    return (
        <>
            <Row style={{backgroundColor: "white"}}>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}}  lg={{span: 15, order: 1}}>
                    <Nav title="Pesan"/>
                    <div className="container-profile">
                        <HomeMessage/>
                    </div>
                </Col>
                <Col  xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 9, order: 2}}>
                    <NavMessage title="Name"/>
                    <div className="container-profile">
                        <SendMessage/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Message