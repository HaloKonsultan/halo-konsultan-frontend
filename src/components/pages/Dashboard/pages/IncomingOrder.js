import React from "react"
import IncomingOrderTable from "../IncomingOrderTable";
import Nav from "../../../layout/Header";

function IncomingOrder() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <IncomingOrderTable/>
            </div>
        </>
    )
}

export default IncomingOrder