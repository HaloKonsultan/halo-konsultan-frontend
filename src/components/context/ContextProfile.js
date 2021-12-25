import React, {createContext, useState} from "react";
import axios from "axios";
import {useHistory} from "react-router";
import Cookies from "js-cookie";
import {message} from "antd";
import API, {SERVER_NAME} from "./API"

export const ContextProfile = createContext()

export const ProfileProvider = props => {
    let history = useHistory()
    const [loading, setLoading] = useState(true)
    const [dataProfile, setDataProfile] = useState([])
    const [input, setInput] = useState([])
    const [inputProvince, setInputProvince] = useState([])
    const [inputCategories, setInputCategories] = useState([])
    const [errorMessage, setErrorMessage] = useState(true)
    const [price, setPrice] = useState("")
    const [currentId, setCurrentId] = useState(-1)
    const [fetchStatus, setFetchStatus] = useState(false)

    const fetchData = async (format) => {
        let result = await API.get(`consultants/profile/${Cookies.get('id')}`,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}})
        let data = result.data.data
        setInput({
            id: data.id,
            name: data.name,
            email: data.email,
            photo: SERVER_NAME + data.photo,
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
                    photo: SERVER_NAME + key.photo,
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
        setPrice(input.consultation_price)
        await dataProvinces()
        await dataCategories()
        if (format === 1) {
            functionFormatRupiah()
        }
        setLoading(false)
    }

    const functionFormatRupiah = () => {
        setInput({
            ...input,
            chat_price: formatRupiah(input.chat_price),
            consultation_price: formatRupiah(input.consultation_price)
        })
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
                            photo: SERVER_NAME + key.photo,
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

    const functionDeleteConsultantDoc = (idDoc) => {
        API.delete(`consultants/profile/documentation/${idDoc}`, {
            headers: {
                "Authorization": "Bearer " + Cookies.get('token')
            }
        })
            .then(() => {
                setInput({
                    ...input, consultant_documentation: input.consultant_documentation.filter((res) => {
                        return res.id !== idDoc
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
                history.push(`/profile`)
            })
            .catch(err => {
                message.error('Mohon isi semua data', 3);
                history.push("/edit-biodata")
            })
    }

    const functionUploadImage = (formdata) => {
        API.post(`consultants/profile/upload/${Cookies.get('id')}`, formdata,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
            })
    }

    const functionUploadDocumentation = (formdata) => {
        API.post(`consultants/profile/documentation/${Cookies.get('id')}`, formdata,
            {headers: {"Authorization": "Bearer " + Cookies.get('token')}}
        )
            .then((res) => {
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
        let result = await axios.get(`https://api.binderbyte.com/wilayah/provinsi?api_key=079fc527c1d3fdf63c64cc384bc51b9e6fff9b7552c8eb493db7b2035d70c421`)
        let data = result.data.value
        setInputProvince({
            province: data.map(key => {
                return {
                    id: key.id,
                    name: key.name,
                }
            }),
        })
    }

    const dataCity = async (id) => {
        let resultCity = await axios.get(`https://api.binderbyte.com/wilayah/kabupaten?api_key=079fc527c1d3fdf63c64cc384bc51b9e6fff9b7552c8eb493db7b2035d70c421&id_provinsi=${id}`)
        let data = resultCity.data.value
        setInputProvince({
            ...inputProvince,
            cities: data.map(key => {
                return {
                    id: key.id,
                    id_province: key.id_provinsi,
                    name: key.name,
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
        functionDeleteConsultantDoc,
        dataProvinces,
        dataCity,
        dataCategories,
        formatRupiah,
        functionFormatRupiah
    }

    return (
        <ContextProfile.Provider value={{
            dataProfile,
            setDataProfile,
            loading,
            setLoading,
            price,
            setPrice,
            input,
            setInput,
            errorMessage,
            setErrorMessage,
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