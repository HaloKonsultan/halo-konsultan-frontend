import React, {useContext, useEffect} from 'react';
import {Table, Tag} from 'antd';
import {ContextHistory} from "../../context/ContextHistory";
import OrderTable from "../../global/OrderTable";

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
            title: 'Tanggal Konsultasi Masuk',
            dataIndex: 'consultations_created',
            key: 'consultations_created',
        },
        {
            title: 'Tanggal Konsultasi Selesai',
            dataIndex: 'consultations_date',
            key: 'consultations_date',
        },
        {
            title: 'Tanggal Transaksi',
            dataIndex: 'transactions_date',
            key: 'transactions_date',
        },
        {
            title: 'Nominal Transaksi',
            dataIndex: 'income',
            key: 'income',
            render: (income) => {
                return(
                    <>
                        {income ? "Rp. " + income.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('') : "-"}
                    </>
                )
            }
        },
        {
            title: 'Status',
            key: 'status',
            dataIndex: 'status',
            render: (status, data) => {
                let color = status === 'done' && data.is_confirmed === 1 ? '#D8E7FE' : '#FDD6D6';
                return (
                    <>
                        <Tag style={{
                            borderRadius: 20,
                            color: status === 'done' && data.is_confirmed === 1 ? '#3B85FA' : '#F63131',
                            fontWeight: "bold"
                        }} color={color}>
                            {status === 'done' && data.is_confirmed === 1 ? 'Selesai' : 'Ditolak'}
                        </Tag>
                    </>
                )
            },
        },
    ];

    const data = dataHistory;

    return (
        <>
            <OrderTable
                onRow={(record, rowIndex) => {
                    return {
                        onClick: event => {
                            handleDetail(record.id)
                        }, // click row
                    };
                }}
                columns={columns} dataSource={data} pagination={{position: ['bottomCenter'], pageSize: 10}}/>
        </>
    )
}

export default HistoryTable