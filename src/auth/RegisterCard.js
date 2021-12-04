import React, {useState} from "react"
import {Card, Button, Checkbox, Space, Typography} from 'antd';
import axios from "axios"
import "../assets/css/auth.css"
import Logo from "../assets/img/logo.png"
import {Link, useHistory} from "react-router-dom"
import InputText from "../components/global/InputText";
import ButtonPrimary from "../components/global/ButtonPrimary";
import API from "../components/context/API";

const {Text} = Typography;

const RegisterCard = () => {
    let history = useHistory()
    let showPassword = document.getElementById("password");

    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    function handleShowPassword(e) {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked === true) {
            showPassword.type = "text";
        } else {
            showPassword.type = "password";
        }
        console.log(showPassword)
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
        API.post(`consultants/register`, {
            name: input.name,
            email: input.email,
            password: input.password
        }).then(() => {
            history.push(`/`)
        })
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name]: value})
    }

    return (
        <>
            <div className="container" style={{padding: 20}}>
                <Card style={{boxShadow: "0 0 8px 0 rgba(34,34,34,0.16)", borderRadius: 8, width: 408}}>
                    <form onSubmit={handleSubmit}>
                        <br/>
                        <img className="logo1" src={Logo}/>
                        <br/><br/>
                        <Space direction="vertical" style={{width: "100%"}} size={40}>
                            <Space direction="vertical" style={{width: "100%"}} size={24}>
                                <Space direction="vertical" style={{width: "100%"}}>
                                    <Text type="secondary">Masukkan Nama Lengkap Anda</Text>
                                    <InputText placeholder="Nama Lengkap" name="name" value={input.name}
                                               onChange={handleChange}/>
                                </Space>
                                <Space direction="vertical" style={{width: "100%"}}>
                                    <Text type="secondary">Masukkan Email Anda</Text>
                                    <InputText placeholder="Email" name="email" value={input.email}
                                               onChange={handleChange}/>
                                </Space>
                                <Space direction="vertical" style={{width: "100%"}}>
                                    <Text type="secondary">Masukkan Password Anda</Text>
                                    <InputText id="password" type="password" placeholder="Password" name="password"
                                               value={input.password} onChange={handleChange}/>
                                    <Checkbox onClick={handleShowPassword}>Tunjukkan Password</Checkbox>
                                </Space>
                            </Space>
                            <Space direction="vertical" style={{width: "100%"}} size={32}>
                                <ButtonPrimary text="Daftar" htmlType="submit"/>
                                <Link to="/login"><p className="sign-in">Sudah punya akun ? <a href="">Masuk</a></p>
                                </Link>
                            </Space>
                        </Space>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default RegisterCard