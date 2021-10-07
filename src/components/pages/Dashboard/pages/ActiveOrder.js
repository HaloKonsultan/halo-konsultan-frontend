import React from "react"
import Nav from "../../../layout/Header";
import OrderTable from "../table/OrderTable";

function ActiveOrder() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <OrderTable />
            </div>
        </>
    )
}

export default ActiveOrder