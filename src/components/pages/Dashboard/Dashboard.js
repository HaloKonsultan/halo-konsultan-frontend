import React from "react"
import {Row, Col, Button, PageHeader, Badge} from 'antd';
import IncomingOrderTable from "./table/IncomingOrderTable";
import ActiveOrderTable from "./table/ActiveOrderTable";
import WaitingPaymentTable from "./table/WaitingPaymentTable";
import TodayOrder from "./table/TodayOrder";
import ProfileNotifications from "./ProfileNotifications";
import "../../../assets/css/dashboard.css"
import Nav from "../../layout/Header";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";
import {Typography} from 'antd';

const {Title} = Typography;

function Dashboard() {
    let page = 'Dashboard';
    Cookies.set('page', page, {expires: 1})

    return (
        <>
            <Nav/>
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
                        <IncomingOrderTable/>
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
                        <ActiveOrderTable/>
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
                        <WaitingPaymentTable/>
                    </div>
                </Col>
                <Col span={10}>
                    <div className="schedule">
                        <TodayOrder/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard