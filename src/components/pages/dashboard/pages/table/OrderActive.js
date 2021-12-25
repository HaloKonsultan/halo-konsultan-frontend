import React, {useContext, useEffect} from "react"
import Nav from "../../../../layout/Header";
import OrderTableActive from "../../components/table/OrderTableActive";
import {ContextOrderActive} from "../../../../context/ContextOrderActive";
import {Tag} from "antd";
import {Danger, DangerBackground} from "../../../../global/Constants";
import OrderTable from "../../../../global/OrderTable";

function OrderActive() {
    const {loading, dataOrder, functions} = useContext(ContextOrderActive)
    const {fetchData, functionDetail} = functions

    useEffect(() => {
        fetchData()
    }, [])

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
                if (conference_link === null) {
                    return (
                        <>
                            <Tag style={{borderRadius: 20, fontColor: Danger, fontWeight: "bold"}} color={DangerBackground}>
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
            render: (text, row) => <div>{row["date"]} {row["time"]}</div>,
        }
    ];

    const data = dataOrder;

    const handleDetail = (event) => {
        functionDetail(event)
    }

    return (
        <>
            <Nav title="Konsultasi Aktif"/>
            <div className="dashboard-container">
                <OrderTable
                    onRow={(record, rowIndex) => {
                        return {
                            onClick: event => {
                                handleDetail(record.id)
                            }, // click row
                        };
                    }}
                    loading={loading}
                    columns={columns} dataSource={data} pagination={{position: ['bottomCenter'], pageSize: 10}}/>
            </div>
        </>
    )
}

export default OrderActive