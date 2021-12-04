import React from "react"
import {Row, Col, Badge} from 'antd';
import OrderTableIncoming from "./table/OrderTableIncoming";
import OrderTableActive from "./table/OrderTableActive";
import OrderTableWaiting from "./table/OrderTableWaiting";
import OrderToday from "./table/OrderToday";
import ProfileNotifications from "./ProfileNotifications";
import "../../../assets/css/dashboard.css"
import Nav from "../../layout/Header";
import {Typography} from 'antd';
import TableHeader from "../../global/TableHeader";

const {Title} = Typography;

function Dashboard() {

    return (
        <>
            <Nav title="Dashboard"/>
            <Row>
                <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 14, order: 1}}>
                <div className="dashboard-container">
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 14}}>
                        <div className="table">
                            <ProfileNotifications/>
                        </div>
                    </Col>
                        <div className="table">
                            <TableHeader link="/incoming-order"
                                         title="Konsultasi Masuk "
                                         badge={<Badge style={{backgroundColor: '#3B85FA'}} count={5}/>}/>
                            <OrderTableIncoming/>
                        </div>
                        <div className="table">
                            <TableHeader link="/order"
                                         title="Konsultasi Aktif"/>
                            <OrderTableActive/>
                        </div>
                        <div className="table">
                            <TableHeader link="/waiting-payment"
                                         title="Menunggu Pembayaran"/>
                            <OrderTableWaiting/>
                        </div>
                     </div>
                </Col>
                <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 10}}>
                    <div className="table today-container" style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                        <OrderToday/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard