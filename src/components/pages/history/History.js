import React from "react"
import Nav from "../../layout/Header";
import HistoryTable from "./HistoryTable";

function History() {

    return (
        <>
            <Nav title="Riwayat" mobileTitle="Riwayat" mobile="true"/>
            <div className="dashboard-container">
                <div className="table">
                    <HistoryTable/>
                </div>
            </div>
        </>
    )
}

export default History