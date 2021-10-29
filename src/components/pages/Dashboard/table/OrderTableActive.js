import React, {useEffect, useContext} from "react"
import {Table, Tag} from 'antd';
import {ActiveOrderContext} from "../../../context/ActiveOrderContext";

const OrderTableActive = () => {
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
            title: 'Waktu Konsultasi',
            dataIndex: ['time', 'date'],
            sorter: (a, b) => new Date(a.date) - new Date(b.date),
            defaultSortOrder: 'descend',
            render: (text,row) => <div >{row["date"]} {row["time"]}</div>,
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
                columns={columns}
                dataSource={data.slice(-5)}
                pagination={false}
                />
        </>
    )
}

export default OrderTableActive