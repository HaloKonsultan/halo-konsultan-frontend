import React, {useEffect, useContext} from "react"
import {Table, Button} from 'antd';
import {IncomingOrderContext} from "../../../context/IncomingOrderContext";

const IncomingOrderTable = () => {
    const {dataIncomingOrder, functions} = useContext(IncomingOrderContext)
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
            title: 'Tanggal Masuk',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: '',
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

export default IncomingOrderTable