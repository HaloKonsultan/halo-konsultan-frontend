import React, { useState, createContext } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";

export const ConsultationDetailContext = createContext()

export const ConsultationDetailProvider = props => {
    let history = useHistory()
    const [dataConsultation, setDataConsultation] = useState([])
    const [input, setInput] = useState({
        title: "",
        consultant_id:"",
        description: "",
        preference: "",
        location: "",
        status:"",
        consultation_price:"",
        is_confirmed:"",
        date:"",
        conference_link:"",
        consultations_pref_date:[{
            date:""
        }],
        consultations_document:[{
            name: "",
            description: "",
            file: ""
        }]
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchDataById = async (consultation_id) => {
        let result = await axios.get(`http://localhost:8000/api/consultant/consultations/${consultation_id}`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data
        setInput({
            id: data.id,
            title: data.title,
            description: data.description,
            preference: data.preference,
            location: data.location,
            status: data.status,
            consultation_price: data.consultation_price,
            is_confirmed: data.is_confirmed,
            date: data.date,
            conference_link: data.conference_link,
            consultations_pref_date:[{
                id: data.id,
                date:data.date
            }],
            consultations_document:[{
                id: data.id,
                name: data.name,
                description: data.description,
                file: data.file
            }]
        })
        setCurrentId(data.id)
    }

    const functionAccept = (idClient) => {
        //hapus bila yang bawah di uncomment
        // history.push(`/incoming-order/detail/accept/${idClient}`)

        //uncomment bila API sudah tersedia karena harus login buat input data
        // axios.post(`menunggu mas backend`, {
        //         status: 1
        //     },
        //     { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        // )
        //     .then((res) => {
        //         let data = res.data
        //         setDataConsultation([...dataConsultation, {
        //             id: data.id,
        //             title: data.title,
        //             description: data.description,
        //             preference: data.preference,
        //             location: data.location,
        //             status: data.status,
        //             consultation_price: data.consultation_price,
        //             is_confirmed: data.is_confirmed,
        //             date: data.date,
        //             conference_link: data.conference_link,
        //             consultations_pref_date:[{
        //                 id: data.id,
        //                 date:data.date
        //             }],
        //             consultations_document:[{
        //                 id: data.id,
        //                 name: data.name,
        //                 description: data.description,
        //                 file: data.file
        //             }]
        //         }])
        //         history.push(`/incoming-order/detail/accept/${idClient}`)
        //     })
    }

    const functionSubmit = () => {
        axios.post(`menunggu mas backend`, {
                id: input.id,
                consultations_document : [{
                    name: input.name,
                    description: input.description
                }]
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                setDataConsultation([...dataConsultation, {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    preference: data.preference,
                    location: data.location,
                    status: data.status,
                    consultation_price: data.consultation_price,
                    is_confirmed: data.is_confirmed,
                    date: data.date,
                    conference_link: data.conference_link,
                    consultations_pref_date:[{
                        id: data.id,
                        date:data.date
                    }],
                    consultations_document:[{
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        file: data.file
                    }]
                }])
                history.push("/")
            })
    }

    const functionSubmitDocument = () => {
        axios.post(`menunggu mas backend`, {
                id: input.id,
                consultations_document : [{
                    name: input.name,
                    description: input.description
                }]
        },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                let data = res.data
                setDataConsultation([...dataConsultation, {
                    id: data.id,
                    title: data.title,
                    description: data.description,
                    preference: data.preference,
                    location: data.location,
                    status: data.status,
                    consultation_price: data.consultation_price,
                    is_confirmed: data.is_confirmed,
                    date: data.date,
                    conference_link: data.conference_link,
                    consultations_pref_date:[{
                        id: data.id,
                        date:data.date
                    }],
                    consultations_document:[{
                        id: data.id,
                        name: data.name,
                        description: data.description,
                        file: data.file
                    }]
                }])
            })
    }

    const functions = {
        fetchDataById,
        functionAccept,
        functionSubmit,
        functionSubmitDocument
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