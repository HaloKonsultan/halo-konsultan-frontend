import React, {useEffect, useContext} from "react"
import {Table, Tag} from 'antd';
import {ActiveOrderContext} from "../../../context/ActiveOrderContext";

const ActiveOrderTable = () => {
    const {dataOrder, functions} = useContext(ActiveOrderContext)
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
            title: 'Judul Konsultasi',
            dataIndex: 'title',
            key: 'title',
        },
        {
            title: 'Nama Klien',
            key: 'name',
            dataIndex: 'name',
        },
        {
            title: '',
            dataIndex: 'conference_link',
            key: 'conference_link',
            align: 'right',
            render: (conference_link) => {
                console.log(conference_link)
                if (conference_link === null){
                    return (
                        <>
                            <Tag style={{borderRadius: 20, color: "#F63131", fontWeight: "bold"}} color='#FDD6D6'>
                                Belum ada link
                            </Tag>
                        </>
                    )
                }
            },
        },
        {
            title: 'Tanggal Konsultasi',
            key: 'date',
            dataIndex: 'date',
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            defaultSortOrder: 'descend'
        },
        {
            title: 'Waktu Konsultasi',
            key: 'time',
            dataIndex: 'time'
        }
    ];

    const data = dataOrder;

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
                rowKey={"active"}
                columns={columns} dataSource={data} pagination={false}/>
        </>
    )
}

export default ActiveOrderTable