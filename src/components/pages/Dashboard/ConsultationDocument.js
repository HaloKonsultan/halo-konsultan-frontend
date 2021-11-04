import React, {useContext, useEffect} from "react"
import {Card, Typography} from 'antd';
import 'antd/dist/antd.css';
import {useParams} from "react-router-dom";
import {ContextConsultationDetail} from "../../context/ContextConsultationDetail";
import {Row, Col} from 'antd';
import {FileTextOutlined} from '@ant-design/icons';

const {Title, Link} = Typography;

const SendLink = () => {
    let {Id} = useParams()
    console.log(Id)

    const {input, functions} = useContext(ContextConsultationDetail)
    const {fetchDataById} = functions

    useEffect(() => {
        if (Id !== undefined) {
            fetchDataById(Id)
        }
    }, []);

    return (
        <>
            {
                input.consultation_document && (
                    <>
                        <Card title={<Title style={{color: "black", margin: 0}} level={4}>Dokumen Klien</Title>}
                              style={{width: 438, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}>
                            {input.consultation_document.map((e, index) => {
                                return (
                                    <>
                                        <Row>
                                            <Col span={12}>
                                                <p>
                                                    <FileTextOutlined style={{fontSize: '20px', paddingRight: 16}}/>
                                                    {e.name}</p>
                                            </Col>
                                            <Col span={12}>
                                                <Link
                                                    style={{display: "flex", float: "right"}}
                                                    href={e.file}>
                                                    Download</Link>
                                            </Col>
                                        </Row>
                                    </>
                                )
                            })}
                        </Card>
                    </>
                )}
        </>
    )
}

export default SendLink