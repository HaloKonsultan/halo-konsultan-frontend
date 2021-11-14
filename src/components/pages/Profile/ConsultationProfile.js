import React, {useContext, useEffect} from "react";
import {useHistory} from "react-router";
import {Card} from 'antd';
import {Button} from 'antd';
import {Row, Col} from 'antd';
import {Typography, Space} from 'antd';
import {ContextProfile} from "../../context/ContextProfile";

const {Title, Text} = Typography;

const ConsultationProfile = () => {
    let history = useHistory()

    const {input, functions} = useContext(ContextProfile)
    const {fetchData} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = () => {
        history.push('/edit-profile')
    }

    const handleLogo = (bank) => {
        switch (bank) {
            case "BRI":
                return ("https://i.pinimg.com/originals/f8/0a/ac/f80aac3c5591e45f0d1da6b07a801b7c.png")
                break;
            case "BNI":
                return ("https://i.pinimg.com/originals/36/38/43/36384348ef9d7bfff66da6da9e975d56.png")
                break;
            case "BCA":
                return ("https://pngimage.net/wp-content/uploads/2018/05/bank-bca-png-4.png")
                break;
            case "BSI":
                return ("https://1.bp.blogspot.com/-4qkYYe_sQoI/YBvH0NmYCjI/AAAAAAAAab0/DpiJkew5pPg2kZeoYp3uLqAuoBs7wwldwCLcBGAsYHQ/s1280/Download%2BLogo%2BBANK%2BSYARIAH%2BINDONESIA%2BCDR%2Bdan%2BPNG.png")
                break;
            case "MANDIRI":
                return ("https://kinetic.id/wp-content/uploads/2018/07/mandiri.png")
                break;
            case "MAYBANK":
                return ("https://images.squarespace-cdn.com/content/v1/5c756c67e5f7d15021008390/1563961660176-L5DY9LBJBNI1ET9VFMD2/ke17ZwdGBToddI8pDm48kJK4Mm1kch8SFO9ZNkN1NT97gQa3H78H3Y0txjaiv_0fDoOvxcdMmMKkDsyUqMSsMWxHk725yiiHCCLfrh8O1z5QHyNOqBUUEtDDsRWrJLTmN9YSRtfoTLg6dUq-6F17A0FFZK5fArcnK1IqGweyunyWChwIwkIJ_P7MaZif-uMs/03-Maybank.png")
                break;
            case "CITIBANK":
                return ("https://lh3.googleusercontent.com/proxy/cz7GXD75bzQngamG_qvKJH2v7nC5mqZi5wLQPiRk8iOvGj5iOrR5rTjehImWCYK6hGrDa8XpKU6AUWNCkJDQOxsDyT1eaEw_ZOgCTWTIR5GF")
                break;
        }
    }

    return (
        <>
            <Card style={{borderRadius: 8, width: 406, boxShadow: "0 0 0 1px #CED4DA"}} title={
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
                <Space size={24} direction="vertical" style={{width: "100%"}}>
                    <Space size={4} direction="vertical" style={{width: "100%"}}>
                        <Text type="secondary">Rekening</Text>
                        {
                            input.consultant_virtual_account && (
                                <>
                                    {input.consultant_virtual_account.map((e, index) => {
                                        return (
                                            <>
                                                <Row>
                                                    <Col span={2}><img src={handleLogo(e.bank)} alt="" style={{
                                                        width: 40,
                                                        height: 40,
                                                        objectFit: "cover",
                                                        borderRadius: 4,
                                                    }}/>
                                                    </Col>
                                                    <Col span={1}/>
                                                    <Col span={20}>
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
                        <Text type="secondary">Harga Jasa Diskusi</Text>
                        <Text strong>{input.chat_price}</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Harga Jasa Konsultasi</Text>
                        <Text strong>{input.consultation_price}</Text>
                    </Space>
                    <Space size={4} direction="vertical">
                        <Text type="secondary">Dokumentasi Kerja</Text>
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