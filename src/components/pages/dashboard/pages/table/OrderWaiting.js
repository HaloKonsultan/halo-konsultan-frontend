import React, {useContext, useEffect} from "react"
import Nav from "../../../../layout/Header";
import {ContextOrderWaiting} from "../../../../context/ContextOrderWaiting";
import OrderTable from "../../../../global/OrderTable";

function IncomingOrder() {

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
            <Nav title="Menunggu Pembayaran" onBack={() => window.history.back()}/>
            <div className="dashboard-container">
                <OrderTable
                    loading={loading}
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {
                                handleDetail(record.id)
                            }, // click row
                        };
                    }}
                    columns={columns} dataSource={data} pagination={{position: ['bottomCenter'], pageSize: 10}}/>
            </div>
        </>
    )
}

export default IncomingOrder