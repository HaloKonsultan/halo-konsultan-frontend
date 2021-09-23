import React, {useContext, useEffect} from "react"
import { Row, Col } from 'antd';
import IncomingOrderTable from "./IncomingOrderTable";
import OrderTable from "./OrderTable";
import WaitingPaymentTable from "./WaitingPaymentTable";
import Schedule from "./Schedule";
import "../../../assets/css/dashboard.css"

function Dashboard() {

    return (
        <>
            <Row>
                <Col span={14}>
                    <div className="incoming-order-table">
                        <IncomingOrderTable/>
                    </div>
                    <div className="order-table">
                        <OrderTable/>
                    </div>
                    <div className="waiting-for-payment-table">
                        <WaitingPaymentTable/>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="schedule">
                        <Schedule/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard