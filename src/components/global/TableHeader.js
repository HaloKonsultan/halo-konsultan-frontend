import React from "react"
import {Button, PageHeader} from "antd";
import {Link} from "react-router-dom";
import {Typography} from 'antd';

const {Title} = Typography;

function TableHeader(props) {

    return (
        <>
            <PageHeader
                style={{backgroundColor: "transparent", padding: 0}}
                ghost={false}
                title={<Title level={4}>{props.title} {props.badge}</Title>}
                extra={[
                    <Link to={props.link}><Button style={{color: "#3B85FA"}} type="text">
                        <b>Lihat Semua</b>
                    </Button></Link>,
                ]}/>
        </>
    )
}

export default TableHeader