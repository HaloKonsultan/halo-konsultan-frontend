import React, {useState, createContext} from "react";
import API, {SERVER_NAME} from "./API";
import Cookies from "js-cookie";

export const ContextMessage = createContext()

export const MessageProvider = props => {
    const [input, setInput] = useState([])
    const [inputMessage, setInputMessage] = useState([])
    const [messageId, setMessageId] = useState("")
    const [message, setMessage] = useState("")
    const [userName, setUserName] = useState("")
    const [isEnded, setIsEnded] = useState("")
    const [clientId, setClientId] = useState("")
    const [loading, setLoading] = useState(false)

    const fetchDataById = async () => {
        let result = await API.get(`consultants/forums/get-all-conversation/${Cookies.get('id')}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
        setInput({
            data: data.data.map(key => {
                return {
                    id: key.id,
                    user_name: key.user_name,
                    user_id: key.user_id,
                    last_messages: key.last_messages,
                    last_messages_time: key.last_messages_time,
                    is_ended: key.is_ended,
                    last_messages_is_read: key.last_messages_is_read
                }
            }),
        })
    }
    
    const fetchMessageById = async (id_message) => {
        setLoading(true)
        let result = await API.get(`consultants/forums/get-all-messages/${id_message}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data
        setInputMessage({
            data: data.data.map(key => {
                return {
                    id: key.id,
                    sender: key.sender,
                    forum_id: key.forum_id,
                    message: key.message,
                    is_read: key.is_read,
                    time: key.time
                }
            }),
        })
        setLoading(false)
    }
    
    const functionSendMessage = () => {
        API.post(`consultants/forums/send/${messageId}`, {
                consultant_id: Cookies.get('id'),
                message : message
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
            })
    }

    const functionEndForum = () => {
        API.patch(`consultants/forums/end-conversation/${messageId}`, {},
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                window.location.reload();
            })
    }

    const functions = {
        fetchDataById,
        fetchMessageById,
        functionSendMessage,
        functionEndForum
    }

    return (
        <ContextMessage.Provider value = {{
            clientId,
            setClientId,
            loading,
            setLoading,
            input,
            setInput,
            inputMessage,
            setInputMessage,
            isEnded,
            setIsEnded,
            message,
            setMessage,
            userName,
            setUserName,
            messageId,
            setMessageId,
            functions,
        }}>
            {props.children}
        </ContextMessage.Provider>
    )
}