import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextOrderIncoming = createContext()

export const IncomingOrderProvider = props => {
    let history = useHistory()
    const [loading, setLoading] = useState(false)
    const [dataIncomingOrder, setDataIncomingOrder] = useState([])
    const [input, setInput] = useState({
        title: "",
        name:"",
        date: "",
        time: "",
        status: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        let result = await API.get(
            `consultants/consultations/user/${Cookies.get('id')}/incoming`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data
        console.log(data)
        setDataIncomingOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date_created,
                time: e.time,
                status: e.status,
            }
        }))
        setLoading(false)
    }

    const functionDetail = (idClient) => {
        history.push(`/incoming-order/detail/${idClient}`)
    }

    const functions = {
        fetchData,
        functionDetail
    }

    return (
        <ContextOrderIncoming.Provider value = {{
            loading,
            setLoading,
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
        </ContextOrderIncoming.Provider>
    )

}