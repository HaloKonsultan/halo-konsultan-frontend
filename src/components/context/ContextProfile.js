import React, {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import {message} from "antd";
import API from "./API"

export const ContextProfile = createContext()

export const ProfileProvider = props => {
    let history = useHistory()
    const [dataProfile, setDataProfile] = useState([])
    const [input, setInput] = useState([])
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async () => {
        let result = await API.get(`consultants/profile/${Cookies.get('id')}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
        setInput({
            id: data.id,
            name: data.name,
            email: data.email,
            photo: data.photo,
            city: data.city,
            province: data.province,
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
        console.log(result)
    }

    const functionEditProfile = () => {
        API.put(`consultants/profile/consultation/${Cookies.get('id')}`, {
                chat_price: input.chat_price,
                consultation_price: input.consultation_price,
                consultation_virtual_account: input.consultant_virtual_account,
                consultation_doc: input.consultant_documentation
            },
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
                console.log(res)
                let data = res.data.data
                setInput({
                    name: input.name,
                    email: input.email,
                    photo: input.photo,
                    city: input.city,
                    province: input.province,
                    position: input.position,
                    gender: input.gender,
                    description: input.description,
                    chat_price: input.chat_price,
                    consultation_price: input.consultation_price,
                    consultant_documentation: input.consultant_documentation.map(key => {
                        return {
                            id: key.id,
                            photo: key.photo,
                        }
                    }),
                    consultant_experience: input.consultant_experience.map(key => {
                        return {
                            id: key.id,
                            position: key.position,
                            start_year: key.start_year,
                            end_year: key.end_year
                        }
                    }),
                    consultant_education: input.consultant_education.map(key => {
                        return {
                            id: key.id,
                            institution_name: key.institution_name,
                            major: key.major,
                            start_year: key.start_year,
                            end_year: key.end_year
                        }
                    }),
                    consultant_skill: input.consultant_skill.map(key => {
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
            })
    }

    const functionDeleteVirtualAccount = (idVA) => {
        API.delete(`consultants/profile/virtual_account/${idVA}`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
            .then(() => {
                setInput({
                    ...input, consultant_virtual_account: input.consultant_virtual_account.filter((res) => {
                        return res.id !== idVA
                    }),
                })
                message.success('Data telah dihapus!', 3);
            })
    }

    const functionEditBiodata = () => {
         console.log("input save")
        API.patch(`consultants/profile/consultation/${Cookies.get('id')}`, {
            name: input.name,
            description: input.description,
            photo: input.photo,
            gender: input.gender,
            province: input.province,
            city: input.city,
            consultant_type: input.position,
            consultant_experience: input.consultant_experience,
            consultant_skills: input.consultant_skill,
            consultant_educations: input.consultant_education
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
            cities: data.map(key => {
                return {
                    id: key.id,
                    id_provinces: key.id_provinsi,
                    name: key.nama,
                }
            }),
        })
    }

    const functions = {
        fetchData,
        functionEditBiodata,
        functionEditProfile,
        functionDeleteVirtualAccount,
        dataProvinces,
        dataCity
    }

    return (
        <ContextProfile.Provider value={{
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
        </ContextProfile.Provider>
    )
}