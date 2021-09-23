import React, {useContext, useEffect} from "react"
import { Row, Col } from 'antd';
import TabelMasuk from "./TabelMasuk";
import TabelAktif from "./TabelAktif";
import TabelMenungguBayar from "./TabelMenungguBayar";
import JadwalCard from "./JadwalCard";
import "../../assets/css/dashboard.css"

function Dashboard() {

    return (
        <>
            <Row>
                <Col span={14}>
                    <div className="incoming-order-table">
                        <TabelMasuk/>
                    </div>
                    <div className="order-table">
                        <TabelAktif/>
                    </div>
                    <div className="waiting-for-payment-table">
                        <TabelMenungguBayar/>
                    </div>
                </Col>
                <Col span={10}>
                    <JadwalCard/>
                </Col>
            </Row>
        </>
    )
}

export default Dashboard