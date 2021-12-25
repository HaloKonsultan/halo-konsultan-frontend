import React, {useState, createContext} from "react";
import {useHistory} from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextHistory = createContext()

export const HistoryProvider = props => {
    let history = useHistory()
    const [dataHistory, setDataHistory] = useState([])
    const [input, setInput] = useState([])
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await API.get(
            `consultants/${Cookies.get('id')}/history`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data.data
        setDataHistory(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                name: e.name,
                date: e.date,
                status: e.status,
                is_confirmed: e.is_confirmed,
                date_updated: e.date_updated
            }
        }))
    }

    const fetchDataById = async (id) => {
        let result = await API.get(
            `consultants/history`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data
        setInput({
            id: data.id,
            title: data.title,
            name: data.name,
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
        <ContextHistory.Provider value={{
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
        </ContextHistory.Provider>
    )

}