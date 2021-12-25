import React, {useContext, useEffect} from "react"
import OrderTableIncoming from "../../components/table/OrderTableIncoming";
import Nav from "../../../../layout/Header";
import {ContextOrderIncoming} from "../../../../context/ContextOrderIncoming";
import {Button} from "antd";
import OrderTable from "../../../../global/OrderTable";

function OrderIncoming() {

    const {loading, dataIncomingOrder, functions} = useContext(ContextOrderIncoming)
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

    return (
        <>
            <Nav title="Konsultasi Masuk"/>
            <div className="dashboard-container">
                <OrderTable loading={loading} columns={columns} dataSource={data} pagination={{position: ['bottomCenter'], pageSize: 10}}/>
            </div>
        </>
    )
}

export default OrderIncoming