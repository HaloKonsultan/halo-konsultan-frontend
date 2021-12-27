import React, {useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {Card} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';
import {ContextProfile} from "../../context/ContextProfile";
import ImageBank from "../../global/ImageBank";
import LabelText from "../../global/LabelText";

const {Title, Text} = Typography;

const ConsultationProfile = () => {
    let history = useHistory()

    const {input, functions} = useContext(ContextProfile)
    const {fetchData, functionFormatRupiah} = functions

    useEffect(() => {
        fetchData(1)
    }, [])

    const formatRupiah = (angka) => {
        console.log("angka ", angka)
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');

        input.consultation_price = "Rp " + ribuan
        return "Rp " + ribuan
    }

    const handleDetail = () => {
        history.push('/edit-profile')
    }

    return (
        <>
            <Card style={{width: "100%", borderRadius: 8, boxShadow: "0px 5px 10px 0px #F1F2FA", border: "none"}}
                  title={
                      <>
                          <Row>
                              <Col span={12}> <Title level={4}> Profil Konsultasi </Title></Col>
                              <Col span={12}>
                                  <Button onClick={handleDetail} type="primary" ghost
                                          style={{borderRadius: 8, float: "right", height: "100%"}}>
                                      Edit Profil Konsultasi</Button>
                              </Col>
                          </Row>
                      </>
                  }>
                <Space size={24} direction="vertical" style={{width: "100%"}}>
                    <Space size={4} direction="vertical" style={{width: "100%"}}>
                        <LabelText text="Rekening"/>
                        {
                            input.consultant_virtual_account && (
                                <>
                                    {input.consultant_virtual_account.map((e, index) => {
                                        return (
                                            <>
                                                <Row>
                                                    <Col lg={3} md={3} xs={4}><ImageBank bank={e.bank}/></Col>
                                                    <Col lg={19} md={18} xs={16}>
                                                        <Text strong>{e.name}</Text>
                                                        <br/>
                                                        <Text type="secondary">{e.bank} - {e.card_number}</Text>
                                                    </Col>
                                                </Row>
                                            </>
                                        )
                                    })}
                                </>
                            )
                        }
                    </Space>
                    <Space size={4} direction="vertical">
                        <LabelText text="Harga Jasa Diskusi"/>
                        <Text strong>{input.chat_price ? "Rp. " + input.chat_price.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('') : ""}</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <LabelText text="Harga Jasa Konsultasi"/>
                        <Text strong>{input.consultation_price ? "Rp. " + input.consultation_price.toString().split('').reverse().join('').match(/\d{1,3}/g).join('.').split('').reverse().join('') : ""}</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <LabelText text="Dokumentasi Kerja"/>
                        <ul>
                            <Space size={[8, 8]} wrap>
                                {
                                    input.consultant_documentation && (
                                        <>
                                            {input.consultant_documentation.map((e, index) => {
                                                return (
                                                    <>
                                                        <li>
                                                            <img src={e.photo}
                                                                 alt="" style={{
                                                                width: 168,
                                                                height: 168,
                                                                objectFit: "cover",
                                                                borderRadius: 8,
                                                                boxShadow: "0 0 0 1px #CED4DA"
                                                            }}/>
                                                        </li>
                                                    </>
                                                )
                                            })}
                                        </>
                                    )
                                }
                            </Space>
                        </ul>
                    </Space>
                </Space>
            </Card>
        </>
    )
}

export default ConsultationProfile