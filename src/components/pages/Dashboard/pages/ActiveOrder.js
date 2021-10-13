import React from "react"
import Nav from "../../../layout/Header";
import ActiveOrderTable from "../table/ActiveOrderTable";

function ActiveOrder() {

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <ActiveOrderTable />
            </div>
        </>
    )
}

export default ActiveOrder