import React, {useContext, useEffect} from "react"
import {Button, Card, Typography} from 'antd';
import {ExclamationCircleOutlined} from '@ant-design/icons';
import {ContextProfile} from "../../context/ContextProfile";
import {useHistory} from "react-router";

const {Title} = Typography;

function ProfileNotifications() {
    let history = useHistory()
    const {input, functions} = useContext(ContextProfile)
    const {fetchData} = functions

    useEffect(() => {
        fetchData()
    }, [])

    const handleDetail = () => {
        history.push(`/profile`)
    }

    return (
        <>
            {
                input.description === null &&

                <Card style={{borderRadius: 8, boxShadow: "0 0 0 1px #CED4DA", width: 416, backgroundColor: "#112A44"}}>
                    <Title level={5} style={{color: "white"}}><ExclamationCircleOutlined/> Silakan lengkapi profil anda
                        terlebih dahulu.</Title>
                    <Button onClick={handleDetail} ghost style={{width: 336, borderRadius: 8}}>Pergi ke Profil</Button>
                </Card>
            }
        </>
    )
}

export default ProfileNotifications