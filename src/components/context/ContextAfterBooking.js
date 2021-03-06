import React, {useState, createContext, useContext} from "react";
import { useHistory } from "react-router-dom"
import Cookies from "js-cookie";
import API, {SERVER_NAME} from "./API"
import {ContextConsultationDetail} from "./ContextConsultationDetail";

export const ContextAfterBooking = createContext()

export const AfterBookingProvider = props => {
    let history = useHistory()
    const {functionAccept} = useContext(ContextConsultationDetail)
    const [dataAfterBooking, setDataAfterBooking] = useState([])
    const [price, setPrice] = useState("")
    const [inputDocument, setInputDocument] = useState({
        title: "",
        description: ""
    })
    const [input, setInput] = useState({
        title: "",
        description: "",
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

    const fetchData = async () => {
        let result = await API.get(`consultants/profile/${Cookies.get('id')}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
        setPrice(data.consultation_price)
    }

    const fetchDataById = async (consultation_id) => {
        let result = await API.get(`consultants/consultations/${consultation_id}`,
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }})
        let data = result.data.data
        setInput({
            ...input,
            preference: data.preference,
        })
        setCurrentId(data.id)
        await fetchData()
    }

    const functionSubmit = async (consultation_id) => {
        await functionAccept(consultation_id)
        API.patch(`consultants/consultations/${consultation_id}/after-book`, {
                preference: input.preference,
                price: input.price,
                date: input.date,
                document: input.document
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                setPrefDate({date: []})
                setPrefTime({time: []})
                let data = res.data
                setDataAfterBooking([...dataAfterBooking, {
                    id: data.id,
                    preference: data.preference,
                    consultation_price: data.price,
                    consultation_preference_date: data.date,
                    consultation_document: data.document
                }])
                history.push("/success")
            })
            .catch(err => {
                console.log("error after booking", err)
            })
    }

    const functions = {
        fetchData,
        fetchDataById,
        functionSubmit
    }

    return (
        <ContextAfterBooking.Provider value = {{
            price,
            setPrice,
            dataAfterBooking,
            setDataAfterBooking,
            prefDate,
            setPrefDate,
            prefTime,
            setPrefTime,
            input,
            setInput,
            inputDocument,
            setInputDocument,
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