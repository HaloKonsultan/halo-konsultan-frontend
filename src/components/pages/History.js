import React from "react"
import { Result, Button } from 'antd';

function History() {

    return (
        <>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, the history page is currently not available"
                extra={<Button type="primary">Back Home</Button>}
            />
        </>
    )
}

export default History