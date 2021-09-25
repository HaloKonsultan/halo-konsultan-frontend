import React from "react"
import Nav from "../../../layout/Header";
import OrderTable from "../OrderTable";

function Order() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <OrderTable />
            </div>
        </>
    )
}

export default Order