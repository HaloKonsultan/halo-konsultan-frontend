import React, {useContext, useEffect} from "react";
import {Card, Typography} from 'antd';
import Title from "antd/es/typography/Title";
import {ContextOrderToday} from "../../../context/ContextOrderToday";

const {Text, Link} = Typography;
const {Meta} = Card;
const OrderToday = () => {
    const {dataTodayOrder, functions} = useContext(ContextOrderToday)
    const {fetchData, functionDetail} = functions
    let arrbulan = ["Januari","Februari","Maret","April","Mei","Juni","Juli","Agustus","September","Oktober","November","Desember"];
    let arrhari = ["Minggu", "Senin","Selasa","Rabu","Kamis","Jumat","Sabtu"];
    let date = new Date();
    let hari = date.getDay();
    let tanggal = date.getDate();
    let bulan = date.getMonth();
    let tahun = date.getFullYear();

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = (event) => {
        functionDetail(event)
    }

    return (
        <>
            <Card
                className="schedule-card"
                style={{width: "100%", borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA", backgroundColor: "#F4F4F4"}}
                title={
                    <>
                        <Meta
                            title={<Title style={{color: "white", margin: 0}} level={4}>Konsultasi hari ini</Title>}
                            description={<p style={{color: "white", margin: 0}}>{arrhari[hari]+", "+tanggal+" "+arrbulan[bulan]+" "+tahun}</p>}
                        />
                    </>
                }
            >
                <>
                    {
                        dataTodayOrder.length === 0 &&
                        <Text type="secondary" style={{
                            minHeight: 100,
                            display: "flex",
                            justifyContent: "center",
                            alignItems: "center"
                        }}>
                            Tidak ada konsultasi hari ini
                        </Text>
                    }
                    {
                        dataTodayOrder && (
                            <>
                                {dataTodayOrder.map((e, index) => {
                                    return (
                                        <>
                                            <Card
                                                onClick={() => {
                                                    handleDetail(e.id)
                                                }}
                                                style={{
                                                    marginBottom: 20,
                                                    width: "100%",
                                                    borderRadius: 8,
                                                    boxShadow: "0 0 0 1px #CED4DA"
                                                }}
                                                type="inner"
                                            >
                                                <Meta
                                                    title={<Title style={{margin: 0}}
                                                                  level={5}>{e.title}</Title>}
                                                    description={e.date}/>
                                            </Card>
                                        </>
                                    )
                                })}
                            </>
                        )}
                </>
            </Card>
        </>
    )
}

export default OrderToday