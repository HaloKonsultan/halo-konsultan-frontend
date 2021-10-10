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
          dataIndex: 'title',
          key: 'title',
        },
        {
            title: '',
            dataIndex: 'conference_link',
            align: 'right',
            render: conference_link => conference_link !==null &&
                <>
                    <Tag style={{borderRadius: 20, color: "#F63131", fontWeight: "bold"}} color='#FDD6D6'>
                        Belum ada link
                    </Tag>
                </>
          },
        {
            title: 'Tanggal Konsultasi',
            key: 'date',
            dataIndex: 'date',
        },

      ];

      const data = dataOrder;

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