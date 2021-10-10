import React from "react"
import Nav from "../../layout/Header";
import HistoryTable from "./HistoryTable";
import Cookies from "js-cookie";

function History() {
    let page = 'Riwayat';
    Cookies.set('page', page, {expires: 1})

    return (
        <>
            <Nav/>
            <div className="incoming-order-table">
                <HistoryTable/>
            </div>
        </>
    )
}

export default History