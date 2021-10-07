import React, { useEffect, useState, useContext } from "react"
import {Table, Tag, Space, PageHeader, Button} from 'antd';
import {OrderContext} from "../../../context/OrderContext";

const OrderTable = () => {
    const{ dataOrder, functions, fetchStatus, setFetchStatus} = useContext(OrderContext)
    const { fetchData, functionDetail } = functions

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
            id:5,
            key: '1',
            name: 'Konsultasi#3',
            action : ['ada link'],
            date: '15-Sept-2021, 15.00',
        },
        {
            id:7,
            key: '2',
            name: 'Konsultasi#2',
            action : ['ada link'],
            date: '15-Sept-2021, 15.00',
        },
        {
            id:9,
            key: '3',
            name: 'Konsultasi#1',
            action : ['Belum ada link'],
            date: '15-Sept-2021, 15.00',
        },
      ];

      // data = dataOrder;

    return (
        <>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {handleDetail(record.id)}, // click row
                    };
                }}
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