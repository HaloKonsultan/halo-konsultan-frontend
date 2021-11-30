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
    const [inputProvince, setInputProvince] = useState([])
    const [inputCategories, setInputCategories] = useState([])
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
            photo: "http://localhost:8000/" + data.photo,
            city: data.city,
            province: data.province,
            position: data.position,
            category_id: data.category_id,
            gender: data.gender,
            description: data.description,
            chat_price: data.chat_price,
            consultation_price: data.consultation_price,
            consultant_documentation: data.consultant_documentation.map(key => {
                return {
                    id: key.id,
                    photo: "http://localhost:8000/" + key.photo,
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
        await dataProvinces()
        await dataCategories()
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
                let data = res.data.data
                setInput({
                    name: input.name,
                    photo: input.photo,
                    position: input.position,
                    chat_price: input.chat_price,
                    consultation_price: input.consultation_price,
                    consultant_documentation: data.consultant_documentation.map(key => {
                        return {
                            id: key.id,
                            photo: "http://localhost:8000/" + key.photo,
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
        API.patch(`consultants/profile/biodata/${Cookies.get('id')}`, {
                name: input.name,
                description: input.description,
                gender: input.gender,
                province: input.province,
                city: input.city,
                consultant_type: input.category_id,
                consultant_experience: input.consultant_experience,
                consultant_skills: input.consultant_skill,
                consultant_educations: input.consultant_education
            },
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
                let data = res.data.data
                setInput({
                    name: input.name,
                    description: input.description,
                    photo: "http://localhost:8000/" + input.photo,
                    gender: input.gender,
                    province: input.province,
                    city: input.city,
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
                })
            })
            .catch(err => {
                message.error('Mohon isi semua data', 3);
            })
    }

    const functionUploadImage = (formdata) => {
        API.post(`consultants/profile/upload/${Cookies.get('id')}`, formdata,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
                console.log(res)
            })
    }

    const functionUploadDocumentation = (formdata) => {
        API.post(`consultants/profile/upload/${Cookies.get('id')}`, formdata,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
                console.log(res)
            })
    }

    const functionDeleteExperience = (idVA) => {
        API.delete(`consultants/profile/experience/${idVA}`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
            .then(() => {
                setInput({
                    ...input, consultant_experience: input.consultant_experience.filter((res) => {
                        return res.id !== idVA
                    }),
                })
                message.success('Data telah dihapus!', 3);
            })
    }

    const functionDeleteSkill = (idVA) => {
        API.delete(`consultants/profile/skill/${idVA}`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
            .then(() => {
                setInput({
                    ...input, consultant_skill: input.consultant_skill.filter((res) => {
                        return res.id !== idVA
                    }),
                })
                message.success('Data telah dihapus!', 3);
            })
    }

    const functionDeleteEducation = (idVA) => {
        API.delete(`consultants/profile/education/${idVA}`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
            .then(() => {
                setInput({
                    ...input, consultant_education: input.consultant_education.filter((res) => {
                        return res.id !== idVA
                    }),
                })
                message.success('Data telah dihapus!', 3);
            })
    }

    const dataCategories = async () => {
        let result = await API.get(`consultants/categories`)
        let data = result.data.data
        setInputCategories({
            categories: data.map(key => {
                return {
                    id: key.id,
                    name: key.name,
                }
            }),
        })
    }

    const dataProvinces = async () => {
        let result = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/provinsi`)
        let data = result.data.provinsi
        setInputProvince({
            province: data.map(key => {
                return {
                    id: key.id,
                    name: key.nama,
                }
            }),
        })
    }

    const dataCity = async (id) => {
        let resultCity = await axios.get(`https://dev.farizdotid.com/api/daerahindonesia/kota?id_provinsi=${id}`)
        let data = resultCity.data.kota_kabupaten
        setInputProvince({
            ...inputProvince,
            cities: data.map(key => {
                return {
                    id: key.id,
                    id_province: key.id_provinsi,
                    name: key.nama,
                }
            }),
        })
    }

    const formatRupiah = (angka) => {
        var reverse = angka.toString().split('').reverse().join(''),
            ribuan = reverse.match(/\d{1,3}/g);
        ribuan = ribuan.join('.').split('').reverse().join('');

        return "Rp " + ribuan
    }

    const functions = {
        fetchData,
        functionEditBiodata,
        functionUploadImage,
        functionEditProfile,
        functionUploadDocumentation,
        functionDeleteVirtualAccount,
        functionDeleteExperience,
        functionDeleteSkill,
        functionDeleteEducation,
        dataProvinces,
        dataCity,
        formatRupiah
    }

    return (
        <ContextProfile.Provider value={{
            dataProfile,
            setDataProfile,
            input,
            setInput,
            inputProvince,
            setInputProvince,
            inputCategories,
            setInputCategories,
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