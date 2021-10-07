import React, { createContext,  useState } from "react";
import axios from "axios";
import { useHistory } from "react-router";

export const ConsultantProfileContext = createContext()

export const ConsultantProfileProvider = props => {
    let history = useHistory()
    const [dataProfile, setDataProfile] = useState([])
    const [input, setInput] = useState({
        name: "",
        email: "",
        photo: "",
        gender: "",
        location: "",
        description: "",
        chat_price: "",
        consultant_price: "",
        consultant_doc: [{
            consultant_id:"",
            photo:"",
        
        }],
        consultant_experience:[{
            consultant_id:"",
            position: "",
            start_year: "",
            end_year:""
        }],
        consultant_educations:[{
            consultant_id:"",
            institution_name:"",
            major:"",
            start_year: "",
            end_year:""
        }],
        consultant_skills:[{
            consultant_id:"",
            skills:"",
        }],
        consultant_virtual_account:[{
            consultant_id:"",
            card_number:"",
            bank:""
        }]
     })
     const [currentId, setCurrentId] = useState(-1)
     const [fetchStatus, setFetchStatus] = useState (false)

     const fetchData = async () => {
        let result = await axios.get(`menunggu api`)
        let data = result.data
        console.log(data)
        setDataProfile(data.map((e) => {
            return {
                id: e.id,
                name: e.name,
                email: e.email,
                photo: e.photo,
                gender: e.gender,
                location: e.location,
                description: e.description,
                chat_price: e.chat_price,
                consultant_price: e.consultant_price,
                consultant_doc: [{
                    consultant_id: e.consultant_id,
                    photo: e.photo,
                }],
                consultant_experience:[{
                    consultant_id: e.consultant_id,
                    position: e.position,
                    start_year: e.start_year,
                    end_year: e.end_year
                }],
                consultant_educations:[{
                    consultant_id: e.consultant_id,
                    institution_name: e.institution_name,
                    major: e.major,
                    start_year: e.start_year,
                    end_year: e.end_year
                }],
                consultant_skills:[{
                    consultant_id: e.consultant_id,
                    skills: e.skills,
                }],
                consultant_virtual_account:[{
                    consultant_id: e.consultant_id,
                    card_number: e.card_number,
                    bank: e.bank
                }]
            }
        }))
     }

     const fetchDataById = async (id) => {
        let result = await axios.get(`menunggu api/${id}`)
        let data = result.data
        setInput({
            id: e.id,
            name: e.name,
            email: e.email,
            photo: e.photo,
            gender: e.gender,
            location: e.location,
            description: e.description,
            chat_price: e.chat_price,
            consultant_price: e.consultant_price,
            consultant_doc: [{
                consultant_id: e.consultant_id,
                photo: e.photo,
            }],
            consultant_experience:[{
                consultant_id: e.consultant_id,
                position: e.position,
                start_year: e.start_year,
                end_year: e.end_year
            }],
            consultant_educations:[{
                consultant_id: e.consultant_id,
                institution_name: e.institution_name,
                major: e.major,
                start_year: e.start_year,
                end_year: e.end_year
            }],
            consultant_skills:[{
                consultant_id: e.consultant_id,
                skills: e.skills,
            }],
            consultant_virtual_account:[{
                consultant_id: e.consultant_id,
                card_number: e.card_number,
                bank: e.bank
            }]
         })
        setCurrentId(data.id)
     }
     const functions = {
        fetchData,
        fetchDataById,
     }

     return (
         <ConsultantProfileContext.Provider value ={{
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
         </ConsultantProfileContext.Provider>
     )

}