import React, {useContext, useEffect} from "react"
import {ContextOrderWaiting} from "../../../../context/ContextOrderWaiting";
import OrderTable from "../../../../global/OrderTable";

const OrderTableWaiting = (props) => {
    const {dataPayment, loading, functions} = useContext(ContextOrderWaiting)
    const {fetchData, functionDetail} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = (event) => {
        functionDetail(event)
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

    return (
        <>
            <OrderTable
                loading={loading}
                // onRow={(record, rowIndex) => {
                //     return {
                //         onClick: event => {
                //             handleDetail(record.id)
                //         }, // click row
                //     };
                // }}
                columns={columns} dataSource={data.slice(-5)}/>
        </>
    )
}

export default OrderTableWaiting