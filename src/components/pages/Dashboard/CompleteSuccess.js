import React from "react";
import {Result, Button} from 'antd';
import {CheckCircleFilled} from "@ant-design/icons";
import {Link} from "react-router-dom";
import Nav from "../../layout/Header";

const CompleteSuccess = () => {
    return (
        <>
            <Nav/>
            <Result
                icon={<CheckCircleFilled/>}
                title="Perlengkapan Konsultasi Berhasil Dikirim"
                extra={[
                    <Link to="/"><Button style={{borderRadius: 8}}>Kembali ke Beranda </Button></Link>
                ]}
            />,
        </>
    )
}

export default CompleteSuccess