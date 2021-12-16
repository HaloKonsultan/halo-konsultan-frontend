import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextOrderActive = createContext()

export const OrderProvider = props => {
    let history = useHistory()
    const [loading, setLoading] = useState(false)
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
        setLoading(true)
        let result = await API.get(
            `consultants/consultations/user/${Cookies.get('id')}/active`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        setDataOrder(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date,
                time: e.time,
                status: e.status,
                conference_link: e.conference_link
            }
        }))
        setLoading(false)
    }

    const functionDetail = (idClient) => {
        history.push(`/order/detail/${idClient}`)
    }

    const functions = {
        fetchData,
        functionDetail
    }

    return (
        <ContextOrderActive.Provider value = {{
            loading,
            setLoading,
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
        </ContextOrderActive.Provider>
    )
}