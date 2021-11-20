import React, {useEffect} from "react"
import {Row, Col, Button, PageHeader, Badge} from 'antd';
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
            <div className="dashboard-container">
                <Row>
                    <Col xs={{span: 24, order: 2}} sm={{span: 24, order: 2}} lg={{span: 14, order: 1}}>
                        <div className="table">
                            <ProfileNotifications/>
                        </div>
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
                    </Col>
                    <Col xs={{span: 24, order: 1}} sm={{span: 24, order: 1}} lg={{span: 10}}>
                        <div className="table" style={{alignItems: "center", justifyContent: "center", display: "flex"}}>
                            <OrderToday/>
                        </div>
                    </Col>
                </Row>
            </div>
        </>
    )
}

export default Dashboard