import React from "react"
import Nav from "../../../layout/Header";
import WaitingPaymentTable from "../table/WaitingPaymentTable";

function IncomingOrder() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <WaitingPaymentTable/>
            </div>
        </>
    )
}

export default IncomingOrder