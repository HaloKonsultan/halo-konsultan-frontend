import React from "react";
import { Card } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const RiwayatPendidikan= () => {
    const { TextArea } = Input;

    return (
        <>
            <Card style={{ width: 528, height:408, borderRadius:8 }}>
                  <Row className="center">
                        <Col span={23}><h2>
                             <b>Tambahkan Pengalaman Kerja</b> 
                             </h2></Col>
                        <Col span={25}><CloseOutlined/></Col>
                 </Row>
                  <h4 style={{color:"gray"}}>Nama Instansi</h4>
                      <Input style={{borderRadius:8}}/><br/><br/>   
                  <h4 style={{color:"gray"}}>Titel</h4>
                      <Input style={{borderRadius:8}}/><br/><br/> 
                      <Row>
                        <Col span={11}> <h4 style={{color:"gray"}}>Tahun Mulai</h4>
                      <Input style={{borderRadius:8}}/><br/><br/></Col>
                        <Col span={11} offset={1}>
                        <h4 style={{color:"gray"}}>Tahun Selesai</h4>
                      <Input style={{borderRadius:8}}/><br/><br/>
                         </Col>
                            </Row>
                  <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Tambahkan Riwayat Pendidikan
                    </Button>
                  
            </Card>,
        </>
    )
}

export default RiwayatPendidikan