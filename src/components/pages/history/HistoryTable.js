import React, {useContext, useEffect} from 'react';
import {Table, Tag, Space} from 'antd';
import {HistoryContext} from "../../context/HistoryContext";

const HistoryTable = () => {
    const {dataHistory, functions, fetchStatus, setFetchStatus} = useContext(HistoryContext)
    const {fetchData, functionDetail} = functions

    useEffect(() => {

        fetchData()

    }, [])

    const handleDetail = (event) => {
        let idClient = event

        functionDetail(idClient)
    }

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
                        let fontColor = 'geekblue'
                        if (tag === 'Ditolak') {
                            color = 'volcano';
                            fontColor = '#F63131'
                        }
                        return (
                            <Tag style={{borderRadius: 20, color: {fontColor}, fontWeight: "bold"}} color={color}
                                 key={tag}>
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
            id: '1231',
            key: '1',
            name: 'Strategi Marketing menggunakan',
            address: 'Muhammad Ridlo',
            action: '15-Sept-2021, 15.00',
            tags: ['Selesai'],
            status: 'Selesai'
        },
        {
            key: '2',
            name: 'Konsultasi cinta yang rumit nan membingungkan',
            address: 'Faza Ghulam Ahmad',
            action: '17-Sept-2021, 15.00',
            tags: ['Ditolak'],
        },
        {
            key: '3',
            name: 'Cara kerja Non-Disclosure agreement secara detail',
            address: 'Caesar Jalu Ananta',
            action: '19-Sept-2021, 15.00',
            tags: ['Selesai'],
        },
    ];

    // const data = dataHistory;

    return (
        <>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleDetail(record.id)
                        }, // click row
                    };
                }}
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA"
                }}
                columns={columns} dataSource={data} pagination={false}/>
        </>
    )
}

export default HistoryTable