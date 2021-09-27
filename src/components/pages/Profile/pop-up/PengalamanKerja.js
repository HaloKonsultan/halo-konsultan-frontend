import React from "react";
import { Card } from 'antd';
import { AutoComplete } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import {CloseOutlined} from '@ant-design/icons';

const PengalamanKerja = () => {
    const { TextArea } = Input;

    return (
        <>
            <Card style={{ width: 528, height:348, borderRadius:8 }}>
                  <Row className="center">
                        <Col span={23}><h2>
                             <b>Tambahkan Pengalaman Kerja</b> 
                             </h2></Col>
                        <Col span={25}><CloseOutlined /></Col>
                 </Row>
                  <h4 style={{color:"gray"}}>Titel Pengalaman Kerja</h4>
                      <Input style={{borderRadius:8}}/><br/><br/>   
                  <h4 style={{color:"gray"}}>Lama Bekerja</h4>
                      <Input style={{borderRadius:8}}/><br/><br/> 
                  <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Tambahkan Pengalaman Kerja
                    </Button>
                  
            </Card>,
        </>
    )
}

export default PengalamanKerja
