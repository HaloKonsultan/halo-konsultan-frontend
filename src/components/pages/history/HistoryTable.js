import React, {useContext, useEffect} from 'react';
import {Table, Tag} from 'antd';
import {HistoryContext} from "../../context/HistoryContext";

const HistoryTable = () => {
    const {dataHistory, functions} = useContext(HistoryContext)
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
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Nama Klien',
            dataIndex: 'name',
            key: 'name',
        },
        {
            title: 'Tanggal Konsultasi',
            dataIndex: 'date',
            key: 'date',
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: status => {
                let color
                let fontColor
                if (status === 'active') {
                    color = '#D8E7FE'
                    fontColor = '#3B85FA'
                } else if (status === 'done'){
                    color = '#D8E7FE'
                    fontColor = '#3B85FA'
                }
                return (
                    <>
                        <Tag style={{borderRadius: 20, color: {fontColor}, fontWeight: "bold"}} color={color}>
                            {status}
                        </Tag>
                    </>
                )
            },
        },
    ];

    const data = dataHistory;

    return (
        <>
            <Table
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleDetail(record.id)
                        },
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