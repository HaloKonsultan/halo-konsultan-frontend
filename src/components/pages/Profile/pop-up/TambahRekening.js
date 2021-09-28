import React from "react";
import { Card } from 'antd';
import { AutoComplete } from 'antd';
import { Input } from 'antd';
import { Button } from 'antd';
import { Row, Col } from 'antd';
import {Link} from "react-router-dom";
import {CloseOutlined} from '@ant-design/icons';

const TambahRekening = () => {
    const { TextArea } = Input;
    return (
        <>
            <Card style={{ width: 528, height:444, borderRadius:8 }}>
                  <Row className="center">
                        <Col span={23}><h2>
                             <b>Tambahkan Rekening</b> 
                             </h2></Col>
                        <Col span={25}><CloseOutlined /></Col>
                 </Row>
                  <h4 style={{color:"gray"}}>Nama Bank</h4>
                      <Input style={{borderRadius:8}}/><br/><br/>   
                  <h4 style={{color:"gray"}}>Nomor Rekening</h4>
                      <Input style={{borderRadius:8}}/><br/><br/> 
                  <h4 style={{color:"gray"}}>Nama Pemegang Rekening</h4>
                      <Input style={{borderRadius:8}}/><br/><br/><br/>
                      <Link to="/edit-biodata"> <Button size="large" className="button" type="primary" block 
                  style={{borderRadius:8, backgroundColor:"#3B85FA"}}>
                        Tambahkan Rekening
                    </Button></Link> 
                  
            </Card>,
        </>
    )
}

export default TambahRekening