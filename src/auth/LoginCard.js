import React, {useContext, useEffect, useState} from "react"
import {Card, Button, Checkbox, Space, message, Typography, Divider} from 'antd';
import Cookies from "js-cookie"
import axios from "axios"
import "../assets/css/auth.css"
import Logo from "../assets/img/logo.png"
import {Link, useHistory} from "react-router-dom"
import {ContextUser} from "../components/context/ContextUser";
import InputText from "../components/global/InputText";
import ButtonPrimary from "../components/global/ButtonPrimary";
import {getToken} from "../Firebase";
import API from "../components/context/API";
import {PrimaryBlue} from "../components/global/Constants";

const {Text} = Typography;

const LoginCard = () => {
    const [isTokenFound, setTokenFound] = useState(false);
    let history = useHistory()
    let data = getToken(setTokenFound);
    let showPassword = document.getElementById("password");
    const {setLoginStatus} = useContext(ContextUser)

    const [input, setInput] = useState({
        email: "",
        password: "",
        token: Cookies.get('device_token')
    })

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name]: value})
    }

    const handleSubmit = () => {
        console.log("ini token")
        console.log(input)
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);

        API.post(`consultants/login`, {
            email: input.email,
            password: input.password,
            device_token: input.token
        })
            .then((res) => {
                let token = res.data.access_token
                let id = res.data.data.id
                let location = res.data.data.location

                Cookies.set('token', token, {expires: inOneHours})
                Cookies.set('id', id, {expires: inOneHours})
                Cookies.set('location', location, {expires: inOneHours})
                history.push('/')
            })
            .catch(err => {
                message.error('Email atau password salah', 3);
            })
    }

    function handleShowPassword(e) {
        console.log(`checked = ${e.target.checked}`);
        if (e.target.checked === true) {
            showPassword.type = "text";
        } else {
            showPassword.type = "password";
        }
    }

    function demoAccount() {
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);

        API.post(`consultants/login`, {
            email: "demo@halokonsultan.com",
            password: "password",
            device_token: input.token
        })
            .then((res) => {
                let token = res.data.access_token
                let id = res.data.data.id
                let location = res.data.data.location

                Cookies.set('token', token, {expires: inOneHours})
                Cookies.set('id', id, {expires: inOneHours})
                Cookies.set('location', location, {expires: inOneHours})
                history.push('/')
            })
            .catch(err => {
                message.error('Email atau password salah', 3);
            })
    }

    return (
        <>
            <div className="container" style={{padding: 20}}>
                <Card style={{boxShadow: "0 0 8px 0 rgba(34,34,34,0.16)", borderRadius: 8, width: 408}}>
                    <br/>
                    <img className="logo1" src={Logo} alt="HaloKonsultan Logo"/>
                    <br/><br/>
                    <Space direction="vertical" style={{width: "100%"}} size={40}>
                        <Space direction="vertical" style={{width: "100%"}} size={24}>
                            <Space direction="vertical" style={{width: "100%"}}>
                                <Text type="secondary">Masukkan Email Anda</Text>
                                <InputText placeholder="Email" name="email" type="email" value={input.email}
                                           onChange={handleChange} required/>
                            </Space>
                            <Space direction="vertical" style={{width: "100%"}}>
                                <Text type="secondary">Masukkan Password Anda</Text>
                                <InputText id="password" type="password" placeholder="Password" name="password"
                                           value={input.password} onChange={handleChange} required/>
                                <Checkbox onClick={handleShowPassword}>Tunjukkan Password</Checkbox>
                            </Space>
                        </Space>
                        <Space direction="vertical" style={{width: "100%"}} size={32}>
                            <Space direction="vertical" style={{width: "100%"}} size={0}>
                                <ButtonPrimary text="Masuk" onClick={handleSubmit}/>
                                <Divider plain>atau</Divider>
                                <ButtonPrimary text="Masuk sebagai tamu" backgroundColor="white" textColor={PrimaryBlue}
                                               onClick={demoAccount}/>
                            </Space>
                            <Link to="/register"><p className="sign-in">Belum punya akun ? <a href="">Daftar</a></p>
                            </Link>
                        </Space>
                    </Space>
                </Card>
            </div>
        </>
    )
}

export default LoginCard