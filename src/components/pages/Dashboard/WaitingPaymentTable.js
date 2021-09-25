import React from 'react';
import {Button, PageHeader} from 'antd';
import { Row, Col } from 'antd';

import { Table, Tag, Space } from 'antd';

const WaitingPaymentTable = () => {

    const columns = [
        {
          title: 'Judul Konsultasi',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Tanggal Pesanan Masuk',
          key: 'tags',
          dataIndex: 'tags',
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'Konsultasi#3',
          action : ['Belum ada link'],
          tags: '15-Sept-2021, 15.00',
        },
        {
          key: '2',
          name: 'Konsultasi#2',
          action : ['Belum ada link'],
          tags: '15-Sept-2021, 15.00',
        },
        {
          key: '3',
          name: 'Konsultasi#1',
          action : ['Belum ada link'],
          tags: '15-Sept-2021, 15.00',
        },
      ];

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

export default WaitingPaymentTable