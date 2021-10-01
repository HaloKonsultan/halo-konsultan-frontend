import React, { useEffect, useState, useContext } from "react"
import { Table, Button } from 'antd';
import {Link} from "react-router-dom";
import {IncomingOrderContext} from "../../context/IncomingOrderContext";

const IncomingOrderTable = () => {
    const{ dataIncomingOrder, functions, fetchStatus, setFetchStatus} = useContext(IncomingOrderContext)
    const { fetchData, functionDetail } = functions

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
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tanggal Masuk',
            dataIndex: 'address',
            key: 'address',
        },
        {
            title: '',
            key: 'buttons',
            dataIndex: 'buttons',
            align: 'center',
          render: (buttons) => (
            <>
                {/*<Button onClick={handleDetail} value={buttons.id} type="primary" ghost style={{borderRadius: 8}}>Lihat Detail</Button>*/}
                <Button onClick={handleDetail} type="primary" ghost style={{borderRadius: 8}}>Lihat Detail</Button>
            </>
          ),
        },
      ];

      const data = [
        {
            key: '1',
            name: 'Konsultasi#3',
            address: '15-Sept-2021, 15.00',
            action : '',
        },
        {
            key: '2',
            name: 'Konsultasi#2',
            address: '17-Sept-2021, 15.00',
            action : '',
        },
        {
            key: '3',
            name: 'Konsultasi#1',
            address: '19-Sept-2021, 15.00',
            action : '',
        },
      ];

      // data = dataIncomingOrder;

    return (
        <>
            <Table
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA"
                }}
                columns={columns} dataSource={data} pagination={false} />
        </>
    )
}

export default IncomingOrderTable