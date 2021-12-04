import React, {useState, createContext} from "react";
import API from "./API";
import Cookies from "js-cookie";

export const ContextMessage = createContext()

export const MessageProvider = props => {
    const [input, setInput] = useState([])

    const fetchDataById = async (message_id) => {
        let result = await API.get(`consultants/consultations/message/${message_id}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
    }

    const functions = {
        fetchDataById,
    }

    return (
        <ContextMessage.Provider value = {{
            input,
            setInput,
            functions,
        }}>
            {props.children}
        </ContextMessage.Provider>
    )
}