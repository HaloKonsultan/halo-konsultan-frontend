import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const ActiveOrderContext = createContext()

export const OrderProvider = props => {
    let history = useHistory()
    const [dataOrder, setDataOrder] = useState([])
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
            `http://localhost:8000/api/consultant/consultation/user/${Cookies.get('id')}/active`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log(data)
        setDataOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                date: e.date,
                time: e.time,
                status: e.status,
                conference_link: e.conference_link
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
        <ActiveOrderContext.Provider value = {{
            dataOrder,
            setDataOrder,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ActiveOrderContext.Provider>
    )
}