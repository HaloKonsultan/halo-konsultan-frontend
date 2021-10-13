import React, {useState, createContext} from "react";
import axios from "axios";
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie";

export const HistoryContext = createContext()

export const HistoryProvider = props => {
    let history = useHistory()
    const [dataHistory, setDataHistory] = useState([])
    const [input, setInput] = useState({
        title: "",
        user_name: "",
        date: "",
        status: "",
        is_confirmed: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(
            `http://localhost:8000/api/consultant/${Cookies.get('id')}/history`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        console.log(data)
        setDataHistory(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                user_name: e.user_name,
                date: e.date,
                status: e.status,
                is_confirmed: e.is_confirmed
            }
        }))
    }

    const fetchDataById = async (id) => {
        let result = await axios.get(
            `http://localhost:8000/api/consultant/history`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data
        setInput({
            id: data.id,
            title: data.title,
            user_name: data.user_name,
            date: data.date,
            status: data.status,
            is_confirmed: data.is_confirmed
        })
        setCurrentId(data.id)
    }

    const functionDetail = (idClient) => {
        history.push(`/history/detail/${idClient}`)
    }

    const functions = {
        fetchData,
        fetchDataById,
        functionDetail
    }

    return (
        <HistoryContext.Provider value={{
            dataHistory,
            setDataHistory,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </HistoryContext.Provider>
    )

}