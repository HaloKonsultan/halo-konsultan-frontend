import React from "react"
import { Result, Button } from 'antd';
import Cookies from "js-cookie";
import Nav from "../layout/Header";

function Message() {

    return (
        <>
            <Nav title="Pesan"/>
            <Result
                status="403"
                title="403"
                subTitle="Sorry, the message page is currently not available"
                extra={<Button type="primary">Back Home</Button>}
            />
        </>
    )
}

export default Message