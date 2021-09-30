import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import {message} from "antd";
import Cookies from "js-cookie";

export const ConsultationDetailContext = createContext()

export const ConsultationDetailProvider = props => {
    let history = useHistory()
    const [dataConsultation, setDataConsultation] = useState([])
    const [input, setInput] = useState({
        title: "",
        description: "",
        preference: "",
        location: ""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(`menunggu api`)
        let data = result.data
        console.log(data)
        setDataConsultation(data.map((e) => {
            return {
                id: e.id,
                title: e.title,
                description: e.description,
                preference: e.preference,
                location: e.location
            }
        }))
    }

    const fetchDataById = async (id) => {
        let result = await axios.get(`menunggu api/${id}`)
        let data = result.data
        setInput({
            id: data.id,
            title: data.title,
            description: data.description,
            preference: data.preference,
            location: data.location
        })
        setCurrentId(data.id)
    }

    const functions = {
        fetchData,
        fetchDataById
    }

    return (
        <ConsultationDetailContext.Provider value = {{
            dataConsultation,
            setDataConsultation,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ConsultationDetailContext.Provider>
    )
}