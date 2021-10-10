import React from "react";
import {useHistory} from "react-router";
import {Card} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';

const {Title, Text, Link} = Typography;

const ConsultationProfile = () => {
    let history = useHistory()

    const handleDetail = () => {
        history.push('/edit-profile')
    }

    return (
        <>
            <Card style={{borderRadius: 8, width: 406}} title={
                <>
                    <Row>
                        <Col span={12}> <Title level={4}> Profil Konsultasi </Title></Col>
                        <Col span={25}>
                            <Button onClick={handleDetail} type="primary" ghost style={{borderRadius: 8}}>Edit Profil
                                Konsultasi</Button>
                        </Col>
                    </Row>
                </>
            }>
                <Space size={24} direction="vertical">
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Rekening</Text>
                        <Text strong>Himma Filangga Sutopo</Text>
                        <Text type="secondary">BNI - 72121217233</Text>
                        <Text strong>Fatih Khoiri</Text>
                        <Text type="secondary">BCA - 81726781233</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Harga Jasa Diskusi</Text>
                        <Text strong>Rp. 30.000</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Harga Jasa Konsultasi</Text>
                        <Text strong>Rp. 730.000</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Dokumentasi Kerja</Text>
                        <ul>
                            <Space size={[8, 8]} wrap>
                                <li>
                                    <img src="https://bagianpbj.kutaibaratkab.go.id/wp-content/uploads/2020/07/1.png"
                                         alt="" style={{width: 168, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                                </li>
                                <li>
                                    <img src="https://bagianpbj.kutaibaratkab.go.id/wp-content/uploads/2020/07/1.png"
                                         alt="" style={{width: 168, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                                </li>
                                <li>
                                    <img src="https://bagianpbj.kutaibaratkab.go.id/wp-content/uploads/2020/07/1.png"
                                         alt="" style={{width: 168, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                                </li>
                                <li>
                                    <img src="https://bagianpbj.kutaibaratkab.go.id/wp-content/uploads/2020/07/1.png"
                                         alt="" style={{width: 168, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA"}}/>
                                </li>
                            </Space>
                        </ul>
                    </Space>
                </Space>
            </Card>
        </>
    )
}

export default ConsultationProfile