import React, {useEffect, useContext, useState} from "react"
import {Button} from 'antd';
import {ContextOrderIncoming} from "../../../context/ContextOrderIncoming";
import OrderTable from "../../../global/OrderTable";

const OrderTableIncoming = (props) => {
    const {dataIncomingOrder, functions} = useContext(ContextOrderIncoming)
    const {fetchData, functionDetail} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = (event) => {
        let idClient = parseInt(event.currentTarget.value)

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
            title: 'Tanggal Masuk',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '',
            width: 130,
            key: 'id',
            dataIndex: 'id',
            align: 'center',
            render: (id) => (
                <>
                    <Button onClick={handleDetail} value={id} type="primary" ghost style={{borderRadius: 8}}>Lihat Detail</Button>
                </>
            ),
        },
    ];

    const data = dataIncomingOrder;

    let emptyTable = {
        emptyText: 'Tidak ada konsultasi masuk',
    };

    return (
        <>
            <OrderTable columns={columns} dataSource={data.slice(-5)}/>
        </>
    )
}

export default OrderTableIncoming