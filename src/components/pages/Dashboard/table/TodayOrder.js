import React, {useContext, useEffect} from "react";
import {Card, Space} from 'antd';
import Title from "antd/es/typography/Title";
import { format } from 'date-fns';
import {TodayOrderContext} from "../../../context/TodayOrderContext";

const {Meta} = Card;
const TodayOrder = () => {
    const {dataTodayOrder, functions} = useContext(TodayOrderContext)
    const {fetchData, functionDetail} = functions
    const today = format(new Date(), 'dd-MM-yyy ')

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
                style={{width: 454, borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA", backgroundColor: "#F4F4F4"}}
                title={
                    <>
                        <Meta
                            title={<Title style={{color: "white", margin: 0}} level={4}>Konsultasi hari ini</Title>}
                            description={<p style={{color: "white", margin: 0}}>{today}</p>}
                        />
                    </>
                }
            >
                <>
                    {
                        dataTodayOrder !== null && (
                            <>
                                {dataTodayOrder.map((e, index) => {
                                    return (
                                        <>
                                            <Card
                                                onClick={() => {
                                                    handleDetail(e.id)
                                                }}
                                                style={{
                                                    width: 407,
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

export default TodayOrder