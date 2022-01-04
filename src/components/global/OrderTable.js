import React from "react"
import {Table} from "antd";

function OrderTable(props) {
    let emptyTable = {
        emptyText: 'Tidak ada konsultasi aktif',
    };

    return (
        <>
            <Table
                locale={emptyTable}
                scroll={{ x: 600 }}
                onRow={props.onRow}
                style={{
                    borderRadius: 8,
                    overflow: "hidden",
                    boxShadow: "0 0 0 1px #CED4DA",
                    cursor: "pointer"
                }}
                rowKey={"active"}
                columns={props.columns}
                dataSource={props.dataSource}
                pagination={props.pagination}
                loading={props.loading}
            />
        </>
    )
}

OrderTable.defaultProps = {
    pagination: false,
};

export default OrderTable