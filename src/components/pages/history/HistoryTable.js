import React, {useContext, useEffect} from 'react';
import {Table, Tag} from 'antd';
import {ContextHistory} from "../../context/ContextHistory";

const HistoryTable = () => {
    const {dataHistory, functions} = useContext(ContextHistory)
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
            render: (status, data) => {
                let color = status === 'done' && data.is_confirmed === 1 ?  '#3B85FA' : '#F63131';
                let fontColor = status === 'done' && data.is_confirmed === 1 ? '#FDD6D6' : '#D8E7FE';
                let consultationStatus = status === 'done' && data.is_confirmed === 1 ? 'Selesai' : 'Ditolak'
                {console.log(status)}
                {console.log("confirm dibawah")}
                {console.log(data.is_confirmed)}
                return (
                    <>
                        <Tag style={{borderRadius: 20, fontWeight: "bold"}} color={color}>
                            {consultationStatus}
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