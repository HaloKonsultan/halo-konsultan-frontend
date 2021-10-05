import React from "react"
import { Result, Button } from 'antd';
import Nav from "../../layout/Header";
import HistoryTable from "./HistoryTable";

function History() {

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