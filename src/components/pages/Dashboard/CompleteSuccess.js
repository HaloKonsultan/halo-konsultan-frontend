import React from "react";
import { Result, Button } from 'antd';
import {CheckCircleFilled } from "@ant-design/icons";


const CompleteSuccess= () => {
    return (
        <>
        <Result
         icon={<CheckCircleFilled />}
         title="Perlengkapan Konsultasi Berhasil Dikirim"
             extra={[
        <Button style={{borderRadius:8}}>Kembali ke Beranda </Button >
    ]}
  />,
        </>
    )
}

export default  CompleteSuccess