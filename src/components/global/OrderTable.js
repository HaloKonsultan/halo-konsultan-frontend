import React, {useContext} from "react"
import {Table, Spin} from "antd";
import {ContextOrderActive} from "../context/ContextOrderActive";

function OrderTable(props) {
    const {functions} = useContext(ContextOrderActive)
    const {functionDetail} = functions

    let emptyTable = {
        emptyText: 'Tidak ada konsultasi aktif',
    };

    return (
        <>
            <Table
                locale={emptyTable}
                onRow={props.onRow}
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA"
                }}
                loading={{
                    indicator: <div><Spin /></div>,
                    spinning: false
                }}
                rowKey={"active"}
                columns={props.columns}
                dataSource={props.dataSource}
                pagination={false}
            />
        </>
    )
}

export default OrderTable