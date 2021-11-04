import React, {useEffect, useContext} from "react"
import {Table} from 'antd';
import {ContextOrderWaiting} from "../../../context/ContextOrderWaiting";

const OrderTableWaiting = () => {
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