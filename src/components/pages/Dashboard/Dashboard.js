import React from "react"
import {Row, Col, Button, PageHeader} from 'antd';
import IncomingOrderTable from "./table/IncomingOrderTable";
import OrderTable from "./table/OrderTable";
import WaitingPaymentTable from "./table/WaitingPaymentTable";
import Schedule from "./table/Schedule";
import "../../../assets/css/dashboard.css"
import Nav from "../../layout/Header";
import {Link} from "react-router-dom";
import Cookies from "js-cookie";

function Dashboard() {
    let page = 'Dashboard';
    Cookies.set('page', page, {expires: 1})

    return (
        <>
            <Nav/>
            <Row>
                <Col span={14}>
                    <div className="incoming-order-table">
                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0}}
                            ghost={false}
                            title="Konsultasi Masuk"
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
                            title="Konsultasi Aktif"
                            extra={[
                                <Link to="/order"><Button style={{color: "#3B85FA"}} type="text">
                                    <b>Lihat Semua</b>
                                </Button></Link>,
                            ]}/>
                        <OrderTable/>
                    </div>
                    <div className="waiting-for-payment-table">
                        <PageHeader
                            style={{backgroundColor: "transparent", padding: 0}}
                            ghost={false}
                            title="Menunggu Pembayaran"
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
                        <Schedule/>
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard