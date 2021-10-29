import React, {useEffect, useContext} from "react"
import {Table} from 'antd';
import {WaitingPaymentContext} from "../../../context/WaitingPaymentContext";

const OrderTableWaiting = () => {
    const {dataPayment, functions} = useContext(WaitingPaymentContext)
    const {fetchData, functionDetail} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = (event) => {
        let idClient = event

        functionDetail(idClient)
    }

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
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleDetail(record.id)
                        }, // click row
                    };
                }}
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA"
                }}
                rowKey={"waiting"}
                columns={columns} dataSource={data} pagination={false}/>
        </>
    )
}

export default OrderTableWaiting