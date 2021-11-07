import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextAfterBooking = createContext()

export const AfterBookingProvider = props => {
    let history = useHistory()
    const [dataAfterBooking, setDataAfterBooking] = useState([])
    const [input, setInput] = useState({
        preference: "",
        price: "",
        date: [],
        document: []
    })
    const [prefDate, setPrefDate] = useState({
        date: []
    })
    const [prefTime, setPrefTime] = useState({
        time: []
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const functionSubmit = (consultation_id) => {
        console.log(input)
        API.patch(`consultants/consultations/${consultation_id}/after-book`, {
                preference: input.preference,
                price: input.price,
                date: input.date,
                document: input.document
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                console.log(data)
                setDataAfterBooking([...dataAfterBooking, {
                    id: data.id,
                    preference: data.preference,
                    consultation_price: data.price,
                    consultation_preference_date: data.date,
                    consultation_document: data.document
                }])
                history.push("/success")
            })
    }

    const functions = {
        functionSubmit
    }

    return (
        <ContextAfterBooking.Provider value = {{
            dataAfterBooking,
            setDataAfterBooking,
            prefDate,
            setPrefDate,
            prefTime,
            setPrefTime,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ContextAfterBooking.Provider>
    )
}