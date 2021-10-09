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
<<<<<<< HEAD
            consultant_id: e.consultant_id,
            card_number: e.card_number,
            bank: e.bank
        })
=======
            name: data.name,
            email: data.email,
            photo: data.photo,
            gender: data.gender,
            location: data.location,
            description: data.description,
            chat_price: data.chat_price,
            consultant_price: data.consultant_price,
            consultant_doc: [{
                consultant_id: data.consultant_id,
                photo: data.photo,
            }],
            consultant_experience:[{
                consultant_id: data.consultant_id,
                position: data.position,
                start_year: data.start_year,
                end_year: data.end_year
            }],
            consultant_educations:[{
                consultant_id: data.consultant_id,
                institution_name: data.institution_name,
                major: data.major,
                start_year: data.start_year,
                end_year: data.end_year
            }],
            consultant_skills:[{
                consultant_id: data.consultant_id,
                skills: data.skills,
            }],
            consultant_virtual_account:[{
                consultant_id: data.consultant_id,
                card_number: data.card_number,
                bank: data.bank
            }]
         })
>>>>>>> 06c7226fc0d9e76dd9f07985990353944352184a
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

<<<<<<< HEAD
    return (
        <ConsultantProfileContext.Provider value={{
=======
     return (
         <ConsultantProfileContext.Provider value ={{
>>>>>>> 06c7226fc0d9e76dd9f07985990353944352184a
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