import React from "react"
import Nav from "../../../../layout/Header";
import OrderTableActive from "../../table/OrderTableActive";

function OrderActive() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <OrderTableActive />
            </div>
        </>
    )
}

export default OrderActive