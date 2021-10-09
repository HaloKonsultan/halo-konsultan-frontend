import React, {useState, createContext} from "react";
import axios from "axios";
import { useHistory } from "react-router-dom"


export const ConsultantProfileContext = createContext()

export const ConsultantProfileProvider = props => {
    let history = useHistory()
    const [dataProfile, setDataProfile] = useState([])
    const [input, setInput] = useState({
        consultant_id:"",
        card_number:"",
        bank:""
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await axios.get(`menunggu api`)
        let data = result.data
        console.log(data)
        setDataProfile(data.map((e) => {
            return {
                id: e.id,
                consultant_id: e.consultant_id,
                card_number: e.card_number,
                bank: e.bank
            }
        }))
    }

    const fetchDataById = async (id) => {
        let result = await axios.get(`menunggu api/${id}`)
        let data = result.data
        setInput({
            id: data.id,
            consultant_id: e.consultant_id,
            card_number: e.card_number,
            bank: e.bank
        })
        setCurrentId(data.id)
    }

    // const functionDetail = (idClient) => {
    //     history.push(`/history/detail/${idClient}`)
    // }

    const functions = {
        fetchData,
        fetchDataById,
        // functionDetail
    }

    return (
        <ConsultantProfileContext.Provider value={{
            dataProfile,
            setDataProfile,
            input,
            setInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ConsultantProfileContext.Provider>
    )

}