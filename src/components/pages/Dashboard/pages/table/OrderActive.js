import React from "react"
import Nav from "../../../../layout/Header";
import OrderTableActive from "../../table/OrderTableActive";

function OrderActive() {

    return (
        <>
            <Nav title="Konsultasi Aktif"/>
            <div className="dashboard-container">
                <OrderTableActive />
            </div>
        </>
    )
}

export default OrderActive