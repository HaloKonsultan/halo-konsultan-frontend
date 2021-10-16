import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const TodayOrderContext = createContext()

export const TodayOrderProvider = props => {
    let history = useHistory()
    const [dataTodayOrder, setDataTodayOrder] = useState([])
    const [input, setInput] = useState({
        title: "",
        date: "",
        time: "",
        status: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(
            `http://localhost:8000/api/consultants/consultations/user/${Cookies.get('id')}/today`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        setDataTodayOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                date: e.date,
                time: e.time,
                status: e.status
            }
        }))
    }

    const functionDetail = (idClient) => {
        history.push(`/order/detail/${idClient}`)
    }

    const functions = {
        fetchData,
        functionDetail
    }

    return (
        <TodayOrderContext.Provider value = {{
            dataTodayOrder,
            setDataTodayOrder,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </TodayOrderContext.Provider>
    )

}