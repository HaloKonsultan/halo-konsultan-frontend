import React from "react"
import Nav from "../../../../layout/Header";
import OrderTableWaiting from "../../table/OrderTableWaiting";

function IncomingOrder() {

    return (
        <>
            <Nav title="Menunggu Pembayaran"/>
            <div className="incoming-order-table">
                <OrderTableWaiting/>
            </div>
        </>
    )
}

export default IncomingOrder