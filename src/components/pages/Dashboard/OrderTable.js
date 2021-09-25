import React from 'react';
import {Table, Tag, Space, PageHeader, Button} from 'antd';

const OrderTable = () => {

    const columns = [
        {
          title: 'Judul Konsultasi',
          dataIndex: 'name',
          key: 'name',
        },
        {
            title: '',
            dataIndex: 'action',
            key: 'action',
            align: 'right',
            render: tags => (
                <>
                  {tags.map(tag => {
                    let color;
                    if (tag === 'Belum ada link') {
                      color = '#FDD6D6';
                    } else
                        return null
                    return (
                      <Tag style={{borderRadius: 20, color: "#F63131", fontWeight: "bold"}} color={color} key={tag}>
                        {tag}
                      </Tag>
                    );
                  })}
                </>
              ),
          },
        {
            title: 'Tanggal Konsultasi',
            key: 'date',
            dataIndex: 'date',
        },
      ];
      
      const data = [
        {
            key: '1',
            name: 'Konsultasi#3',
            action : ['ada link'],
            date: '15-Sept-2021, 15.00',
        },
        {
            key: '2',
            name: 'Konsultasi#2',
            action : ['ada link'],
            date: '15-Sept-2021, 15.00',
        },
        {
            key: '3',
            name: 'Konsultasi#1',
            action : ['Belum ada link'],
            date: '15-Sept-2021, 15.00',
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

export default OrderTable