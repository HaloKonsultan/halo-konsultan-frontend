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
        let result = await axios.get(`menunggu api`)
        let data = result.data
        console.log(data)
        setDataPayment(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                date: e.date
            }
        }))
    }

    const fetchDataById = async (id) => {
        let result = await axios.get(`menunggu api/${id}`)
        let data = result.data
        setInput({
            id: data.id,
            title: data.title,
            date: data.date
        })
        setCurrentId(data.id)
    }

    const functions = {
        fetchData,
        fetchDataById
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