import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const IncomingOrderContext = createContext()

export const IncomingOrderProvider = props => {
    let history = useHistory()
    const [dataIncomingOrder, setDataIncomingOrder] = useState([])
    const [input, setInput] = useState({
        title: "",
        date: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(
            `http://localhost:8000/api/consultant/consultations/user/${Cookies.get('id')}/incoming`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log(data)
        setDataIncomingOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date
            }
        }))
    }

    const functionDetail = (idClient) => {
        history.push(`/incoming-order/detail/${idClient}`)
    }

    const functions = {
        fetchData,
        functionDetail
    }

    return (
        <IncomingOrderContext.Provider value = {{
            dataIncomingOrder,
            setDataIncomingOrder,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </IncomingOrderContext.Provider>
    )

}