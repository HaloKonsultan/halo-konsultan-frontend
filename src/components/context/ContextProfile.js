import React, {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import API from "./API"

export const ContextProfile = createContext()

export const ProfileProvider = props => {
    let history = useHistory()
    const [dataProfile, setDataProfile] = useState([])
    const [arrayInput, setArrayInput] = useState({
        consultant_virtual_account: [],
        consultant_documentation: []
    })
    const [input, setInput] = useState([])
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
            consultant_virtual_account: data.consultant_virtual_account.map(key => {
                return {
                    id: key.id,
                    name: key.name,
                    card_number: key.card_number,
                    bank: key.bank
                }
            }),
        })
        setCurrentId(data.id)
    }

    const functionEditProfile = () => {
        console.log("input save")
        API.put(`consultants/profile/consultation/${Cookies.get('id')}`, {
                chat_price: input.chat_price,
                consultation_price: input.consultation_price,
                consultation_virtual_account: input.consultant_virtual_account,
                consultation_doc: input.consultant_documentation
            },
            { headers: { "Authorization": "Bearer " + Cookies.get('token') }}
        )
            .then((res) => {
                console.log(res)
                history.push(`/profile`)
            })
    }

    const dataProvinces =  async () => {
        let result = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
        let data = result.data.provinsi
        console.log(data)
        setInput({
            provinces: data.map(key => {
                return {
                    id: key.id,
                    name: key.nama,
                }
            }),
        })
    }

    const dataCity =  async () => {
        let resultCity = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=32`)
        let data = resultCity.data.kota_kabupaten
        console.log(data)
        setInput({
            city: data.map(key => {
                return {
                    id: key.id,
                    id_provinces: key.id_provinsi,
                    name: key.nama,
                }
            }),
        })
    }

    const functionEditBiodata = () => {
        history.push(`/edit-biodata`)
    }

    const functions = {
        fetchData,
        functionEditBiodata,
        functionEditProfile,
        dataProvinces,
        dataCity
    }

    return (
        <ContextProfile.Provider value={{
            dataProfile,
            setDataProfile,
            input,
            setInput,
            arrayInput,
            setArrayInput,
            currentId,
            setCurrentId,
            functions,
            fetchStatus,
            setFetchStatus
        }}>
            {props.children}
        </ContextProfile.Provider>
    )
}