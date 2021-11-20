import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextOrderWaiting = createContext()

export const WaitingPaymentProvider = props => {
    let history = useHistory()
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
        let result = await API.get(
            `consultants/consultations/user/${Cookies.get('id')}/waiting`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log("ini data waiting")
        console.log(data)
        setDataPayment(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.created_at,
                time: e.time,
                status: e.status
            }
        }))
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