import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import {message} from "antd";
import Cookies from "js-cookie";

export const WaitingPaymentContext = createContext()

export const WaitingPaymentProvider = props => {
    let history = useHistory()
    const [dataPayment, setDataPayment] = useState([])
    const [input, setInput] = useState({
        title: "",
        date: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(
            `http://localhost:8000/api/consultant/consultations/user/${Cookies.get('id')}/waiting`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log(data)
        setDataPayment(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date
            }
        }))
    }

    const functions = {
        fetchData
    }

    return (
        <WaitingPaymentContext.Provider value = {{
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
        </WaitingPaymentContext.Provider>
    )

}