import React from "react"
import OrderTableIncoming from "../../table/OrderTableIncoming";
import Nav from "../../../../layout/Header";

function OrderIncoming() {

    return (
        <>
            <Nav title="Pesanan Masuk"/>
            <div className="incoming-order-table">
                <OrderTableIncoming/>
            </div>
        </>
    )
}

export default OrderIncoming