import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const AfterBookingContext = createContext()

export const AfterBookingProvider = props => {
    let history = useHistory()
    const [dataAfterBooking, setDataAfterBooking] = useState([])
    const [input, setInput] = useState({
        preference: "",
        price: "",
        date: [],
        document: []
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const functionSubmit = (consultation_id) => {
        console.log(input.conference_link)
        axios.patch(`http://localhost:8000/api/consultants/consultation/${consultation_id}/send-link`, {
                link: input.conference_link
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                console.log('kauwdhiauwd' + data)
                setDataAfterBooking([...dataAfterBooking, {
                    id: data.id,
                    conference_link: data.conference_link
                }])
                history.push("/")
            })
    }

    const functions = {
        functionSubmit,
    }

    return (
        <AfterBookingContext.Provider value = {{
            dataAfterBooking,
            setDataAfterBooking,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </AfterBookingContext.Provider>
    )
}