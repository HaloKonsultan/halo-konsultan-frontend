import React, {useContext, useEffect} from 'react';
import { Table, Tag, Space } from 'antd';
import {HistoryContext} from "../../context/HistoryContext";

const HistoryTable = () => {
    // const{ dataHistory, functions, fetchStatus, setFetchStatus} = useContext(HistoryContext)
    // const { fetchData } = functions
    //
    // useEffect(() => {
    //
    //     fetchData()
    //
    // }, [])

    const columns = [
        {
          title: 'Masalah Konsultasi',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Nama Klien',
          dataIndex: 'address',
          key: 'address',
        },
        {
            title: 'Tanggal Konsultasi',
            dataIndex: 'action',
            key: 'action',
          },
        {
          title: 'Status',
          key: 'tags',
          dataIndex: 'tags',
          render: tags => (
            <>
              {tags.map(tag => {
                let color = tag.length > 5 ? 'geekblue' : 'green';
                if (tag === 'Ditolak') {
                  color = 'volcano';
                }
                return (
                  <Tag color={color} key={tag}>
                    {tag.toUpperCase()}
                  </Tag>
                );
              })}
            </>
          ),
        },
      ];
      
      const data = [
        {
          key: '1',
          name: 'Strategi Marketing menggunakan',
          address: 'Muhammad Ridlo',
          action : '15-Sept-2021, 15.00',
          tags: ['Selesai'],
        },
        {
          key: '2',
          name: 'Konsultasi cinta yang rumit nan membingungkan',
          address: 'Faza Ghulam Ahmad',
          action : '17-Sept-2021, 15.00',
          tags: ['Ditolak'],
        },
        {
          key: '3',
          name: 'Cara kerja Non-Disclosure agreement secara detail',
          address: 'Caesar Jalu Ananta',
          action : '19-Sept-2021, 15.00',
          tags: ['Selesai'],
        },
      ];

      // const data = dataHistory;

    return (
        <>
            <Table columns={columns} dataSource={data} />
        </>
    )
}

export default HistoryTable