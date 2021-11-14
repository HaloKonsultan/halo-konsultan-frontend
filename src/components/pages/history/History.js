import React from "react"
import Nav from "../../layout/Header";
import HistoryTable from "./HistoryTable";

function History() {

    return (
        <>
            <Nav title="Riwayat"/>
            <div className="dashboard-container">
                <div className="table">
                    <HistoryTable/>
                </div>
            </div>
        </>
    )
}

export default History