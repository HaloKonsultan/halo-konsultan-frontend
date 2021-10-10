import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const OrderContext = createContext()

export const OrderProvider = props => {
    let history = useHistory()
    const [dataOrder, setDataOrder] = useState([])
    const [input, setInput] = useState({
        title: "",
        date: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(
            `http://localhost:8000/api/consultant/consultations/user/${Cookies.get('id')}/active`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log(data)
        setDataOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date
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
        <OrderContext.Provider value = {{
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
        </OrderContext.Provider>
    )

}