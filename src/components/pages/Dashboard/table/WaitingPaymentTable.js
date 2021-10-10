import React, {useEffect, useState, useContext} from "react"

import {Table} from 'antd';
import {WaitingPaymentContext} from "../../../context/WaitingPaymentContext";

const WaitingPaymentTable = () => {
    const {dataPayment, functions} = useContext(WaitingPaymentContext)
    const {fetchData} = functions

    useEffect(() => {

        fetchData()

    }, [])

    const columns = [
        {
            title: 'Judul Konsultasi',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Tanggal Pesanan Masuk',
            key: 'date',
            dataIndex: 'date',
        },
    ];

    const data = dataPayment;

    return (
        <>
            <Table
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA"
                }}
                columns={columns} dataSource={data} pagination={false}/>
        </>
    )
}

export default WaitingPaymentTable