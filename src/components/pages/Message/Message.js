import React, {useContext} from "react";
import {Row, Col} from 'antd';
import Nav from "../../layout/Header";
import HomeMessage from "./HomeMessage";
import SendMessage from "./SendMessage";
import NavMessage from "../../layout/HeaderMessage";
import {ContextMessage} from "../../context/ContextMessage";

const Message = () => {

const {userName} = useContext(ContextMessage)
    return (
        <>
            {/* <Nav title="Pesan" mobileTitle="Pesan" mobile="true"/> */}
            {/* <SendMessage/> */}

            <Row style={{backgroundColor: "white"}}>
            <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 12, order: 1}}>
                   <Nav title="Pesan" mobileTitle="Pesan" mobile="true" />
                   <div className="container-profile" style={{alignItems: "center", display: "flex"}}>
                       <HomeMessage/>
                     </div>
               </Col>
               <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 12, order: 1}}>
               <NavMessage title={userName} mobileTitle="Name" mobile="true"/>
                   <div className="container-profile"  style={{alignItems: "center", display: "flex"}}>
                       <SendMessage/>
                   </div>
                   </Col>
               {/* <Col  xs={{span: 24, order: 3}} sm={{span: 24, order: 3}} lg={{span: 2, order: 3}}/> */}
            </Row>
        </>
    )
}

export default Message