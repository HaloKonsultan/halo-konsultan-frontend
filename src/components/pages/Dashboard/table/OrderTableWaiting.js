import React, {useEffect, useContext} from "react"
import {ContextOrderWaiting} from "../../../context/ContextOrderWaiting";
import OrderTable from "../../../global/OrderTable";

const OrderTableWaiting = (props) => {
    const {dataPayment, functions} = useContext(ContextOrderWaiting)
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
            title: 'Nama Klien',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: 'Tanggal Pesanan Masuk',
            key: 'date',
            dataIndex: 'date',
        },
    ];

    const data = dataPayment;

    let emptyTable = {
        emptyText: 'Tidak ada konsultasi masuk',
    };

    return (
        <>
            <OrderTable
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleDetail(record.id)
                        }, // click row
                    };
                }}
                columns={columns} dataSource={data.slice(-5)}/>
        </>
    )
}

export default OrderTableWaiting