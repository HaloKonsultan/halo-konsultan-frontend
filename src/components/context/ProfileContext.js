import React, {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import API from "./API"

export const ProfileContext = createContext()

export const ProfileProvider = props => {
    let history = useHistory()
    const [dataProfile, setDataProfile] = useState([])
    const [input, setInput] = useState({
        name: "",
        email: "",
        photo: "",
        position: "",
        gender: "",
        location: "",
        description: "",
        chat_price: "",
        consultation_price: "",
        consultant_doc: [{
            consultant_id: "",
            photo: "",
        }],
        consultant_experience: [{
            consultant_id: "",
            position: "",
            start_year: "",
            end_year: ""
        }],
        consultant_educations: [{
            consultant_id: "",
            institution_name: "",
            major: "",
            start_year: "",
            end_year: ""
        }],
        consultant_skills: [{
            consultant_id: "",
            skills: "",
        }],
    })
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await API.get(`consultants/profile/${Cookies.get('id')}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
        console.log(data)
        setInput({
            id: data.id,
            name: data.name,
            email: data.email,
            photo: data.photo,
            position: data.position,
            gender: data.gender,
            location: data.location,
            description: data.description,
            chat_price: data.chat_price,
            consultation_price: data.consultation_price,
            consultant_documentation: data.consultant_documentation.map(key => {
                return {
                    id: key.id,
                    photo: key.photo,
                }
            }),
            consultant_experience: data.consultant_experience.map(key => {
                return {
                    id: key.id,
                    position: key.position,
                    start_year: key.start_year,
                    end_year: key.end_year
                }
            }),
            consultant_education: data.consultant_education.map(key => {
                return {
                    id: key.id,
                    institution_name: key.institution_name,
                    major: key.major,
                    start_year: key.start_year,
                    end_year: key.end_year
                }
            }),
            consultant_skill: data.consultant_skill.map(key => {
                return {
                    id: key.id,
                    skills: key.skills,
                }
            }),
            consultant_virtual_accounts: data.consultant_virtual_accounts.map(key => {
                return {
                    id: key.id,
                    card_number: key.card_number,
                    bank: key.bank
                }
            }),
        })
        console.log("ini profil " + JSON.stringify(input))
        setCurrentId(data.id)
    }

    // const handleSubmit = (event) => {
    //     event.preventDefault()
    //     console.log(input)
    //     axios.post(`http://localhost:8000/api/consultants/register`, {
    //         name: input.name,
    //         email: input.email,
    //         password: input.password
    //     }).then(() => {
    //         history.push(`/`)
    //     })
    // }

    const functionEditBiodata = () => {
        history.push(`/edit-biodata`)
    }

    const functions = {
        fetchData,
        functionEditBiodata
    }

    return (
        <ProfileContext.Provider value={{
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
        </ProfileContext.Provider>
    )
}