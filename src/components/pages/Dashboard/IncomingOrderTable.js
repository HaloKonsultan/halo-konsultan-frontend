import React from "react";
import { Table, Button } from 'antd';
import { PageHeader } from 'antd';

const IncomingOrderTable = () => {
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
          render: buttons => (
            <>
                <Button type="primary" ghost style={{borderRadius: 8}}>Lihat Detail</Button>
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

    return (
        <>
            <PageHeader
                style={{backgroundColor: "transparent", padding: 0}}
                ghost={false}
                title="Konsultasi Masuk"
                extra={[
                    <Button style={{color: "#3B85FA"}} type="text">
                        <b>Lihat Semua</b>
                    </Button>,
                ]}/>
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