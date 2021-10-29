import React from "react"
import {Row, Col, Button, PageHeader, Badge} from 'antd';
import OrderTableIncoming from "./table/OrderTableIncoming";
import OrderTableActive from "./table/OrderTableActive";
import OrderTableWaiting from "./table/OrderTableWaiting";
import OrderToday from "./table/OrderToday";
import ProfileNotifications from "./ProfileNotifications";
import "../../../assets/css/dashboard.css"
import Nav from "../../layout/Header";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import {Typography} from 'antd';

const {Title} = Typography;

function Dashboard() {

    return (
        <>
            <Nav title="Dashboard"/>
            <Row>
                <Col span={14}>
                    <div className="incoming-order-table">
                        <ProfileNotifications/>
                    </div>
                    <div className="incoming-order-table">
                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0}}
                            ghost={false}
                            title={<Title level={4}>Konsultasi Masuk <Badge style={{backgroundColor: '#3B85FA'}}
                                                                            count={5}/></Title>}
                            extra={[
                                <Link to="/incoming-order"><Button style={{color: "#3B85FA"}} type="text">
                                    <b>Lihat Semua</b>
                                </Button></Link>,
                            ]}/>
                        <OrderTableIncoming/>
                    </div>
                    <div className="order-table">
                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0}}
                            ghost={false}
                            title={<Title level={4}>Konsultasi Aktif</Title>}
                            extra={[
                                <Link to="/order"><Button style={{color: "#3B85FA"}} type="text">
                                    <b>Lihat Semua</b>
                                </Button></Link>,
                            ]}/>
                        <OrderTableActive/>
                    </div>
                    <div className="waiting-for-payment-table">
                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0}}
                            ghost={false}
                            title={<Title level={4}>Menunggu Pembayaran</Title>}
                            extra={[
                                <Link to="/waiting-payment"><Button style={{color: "#3B85FA"}} type="text">
                                    <b>Lihat Semua</b>
                                </Button></Link>,
                            ]}/>
                        <OrderTableWaiting/>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="schedule">
                        <OrderToday/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard