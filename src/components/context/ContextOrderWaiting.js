import React, { useState, createContext } from "react";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextOrderWaiting = createContext()

export const WaitingPaymentProvider = props => {
    let history = useHistory()
    const [loading, setLoading] = useState(false)
    const [dataPayment, setDataPayment] = useState([])
    const [input, setInput] = useState({
        title: "",
        name: "",
        date: "",
        time: "",
        status: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        setLoading(true)
        let result = await API.get(
            `consultants/consultations/user/${Cookies.get('id')}/waiting`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        setDataPayment(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date_created,
                time: e.time,
                status: e.status
            }
        }))
        setLoading(false)
    }

    const functionDetail = (consultation_id) => {
        history.push(`/incoming-order/detail/accept/${consultation_id}`)
    }

    const functions = {
        fetchData,
        functionDetail
    }

    return (
        <ContextOrderWaiting.Provider value = {{
            loading,
            setLoading,
            dataPayment,
            setDataPayment,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ContextOrderWaiting.Provider>
    )

}