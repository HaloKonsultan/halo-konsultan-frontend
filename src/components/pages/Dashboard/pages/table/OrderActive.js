import React from "react"
import Nav from "../../../../layout/Header";
import OrderTableActive from "../../table/OrderTableActive";

function OrderActive() {

    return (
        <>
            <Nav title="Konsultasi Aktif"/>
            <div className="incoming-order-table">
                <OrderTableActive dataLimit="tes123" />
            </div>
        </>
    )
}

export default OrderActive