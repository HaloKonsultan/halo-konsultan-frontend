import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API from "./API"

export const ContextConsultationDetail = createContext()

export const ConsultationDetailProvider = props => {
    let history = useHistory()
    const [dataConsultation, setDataConsultation] = useState([])
    const [input, setInput] = useState({
        title: "",
        user_name: "",
        description: "",
        preference: "",
        location: "",
        status: "",
        consultation_price: "",
        is_confirmed: "",
        message: "",
        date: "",
        conference_link: "",
        bank_name: "",
        card_name: "",
        card_number: "",
        consultation_preference_date: [{
            id: "",
            date: ""
        }],
        consultation_document: [{
            id: "",
            name: "",
            description: "",
            file: ""
        }]
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchDataById = async (consultation_id) => {
        let result = await API.get(`consultants/consultations/${consultation_id}`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data
        setInput({
            id: data.id,
            title: data.title,
            user_name: data.user_name,
            description: data.description,
            preference: data.preference,
            location: data.location,
            message: data.message,
            status: data.status,
            bank_name: "",
            card_name: "",
            card_number: "",
            consultation_price: data.consultation_price,
            is_confirmed: data.is_confirmed,
            date: data.date,
            conference_link: data.conference_link,
            consultation_preference_date: data.consultation_preference_date.map(key => {
                return {
                    id: key.id}
            }),
            consultation_document: data.consultation_document.map(key => {
                return {
                    id: key.id,
                    name: key.name,
                    file: key.file}
            })
        })
        console.log("ini detail konsultasi " + JSON.stringify(input))
        setCurrentId(data.id)
    }

    const functionAccept = (consultation_id) => {
        API.patch(`consultants/consultations/${consultation_id}/accept`, {
                confirmed: 1,
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                console.log(data)
                setDataConsultation([...dataConsultation, {
                    is_confirmed: data.is_confirmed,
                }])
                history.push(`/incoming-order/detail/accept/${consultation_id}`)
            })
    }

    const functionDecline = (consultation_id) => {
        API.patch(`consultants/consultations/${consultation_id}/decline`, {
                confirmed: 0,
                message: input.message
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                console.log("data di api decline")
                console.log(data)
                setDataConsultation([...dataConsultation, {
                    is_confirmed: data.is_confirmed,
                    message: data.message
                }])
                history.push(`/history`)
            })
    }

    const functionSubmit = (consultation_id) => {
        API.patch(`consultants/consultations/${consultation_id}/send-link`, {
                link: input.conference_link
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                setDataConsultation([...dataConsultation, {
                    id: data.id,
                    conference_link: data.conference_link
                }])
                history.push("/")
            })
    }

    // const functionUpdateStatus = (consultation_id) => {
    //     API.patch(`consultants/consultations/${consultation_id}/end`, {
    //
    //         },
    //         { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
    //     )
    //         .then((res) => {
    //             history.push("/")
    //         })
    // }

    const funtionEndConsultation = (consultation_id) => {
        API.post(`consultants/transaction/withdraw/${consultation_id}`, {
                bank_code: input.bank_name,
                account_holder_name: input.card_name,
                account_number: input.card_number
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                history.push("/")
            })
    }

    const functions = {
        fetchDataById,
        functionAccept,
        functionSubmit,
        functionDecline,
        funtionEndConsultation
    }

    return (
        <ContextConsultationDetail.Provider value = {{
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
        </ContextConsultationDetail.Provider>
    )
}