import React from "react"
import OrderTableIncoming from "../../table/OrderTableIncoming";
import Nav from "../../../../layout/Header";

function OrderIncoming() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <OrderTableIncoming/>
            </div>
        </>
    )
}

export default OrderIncoming