import React from "react";
import { Row, Col, List} from 'antd';
import Nav from "../../layout/Header";
import HomeMessage from "./HomeMessage";
import SendMessage from "./SendMessage";
import NavMessage from "../../layout/HeaderMessage";

const Message = () => {

    return (
        <>
            <Row className="center"> 
            <Col span={12}>
            <Nav title="Pesan" />
                    <div className="container-profile">   
                        <HomeMessage/>
                    </div>
                </Col>
                <Col span={12}>
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