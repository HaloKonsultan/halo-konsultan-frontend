import React, {useContext, useState} from "react"
import {Card, Button, Checkbox, Input} from 'antd';
import Cookies from "js-cookie"
import axios from "axios"
import "../assets/css/auth.css"
import Logo from "../assets/img/logo.png"
import {Link, useHistory} from "react-router-dom"
import {ContextUser} from "../components/context/ContextUser";
import {message, Space} from 'antd';

const LoginCard = () => {
    let history = useHistory()
    let showPassword = document.getElementById("password");

    const {setLoginStatus} = useContext(ContextUser)

    const [input, setInput] = useState({
        email: "",
        password: ""
    })

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name]: value})
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
        let inOneHours = new Date(new Date().getTime() + 60 * 60 * 1000);

        axios.post(`http://localhost:8000/api/consultants/login`, {
            email: input.email,
            password: input.password
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
        console.log(showPassword)
    }

    return (
        <>
            <div className="container">
                <Card className="card">
                    <form onSubmit={handleSubmit}>
                        <Space size={24} direction="vertical" style={{width: "100%"}}>
                            <br/>
                            <img className="logo1" src={Logo}/>
                            <br/>
                            <Space size={1} direction="vertical" style={{width: "100%"}}>
                                <p>Masukkan Email Anda</p>
                                <Input style={{borderRadius: 8, height: 48}}
                                       name="email"
                                       onChange={handleChange}
                                       placeholder="Email"
                                       required/>
                            </Space>
                            <Space size={1} direction="vertical" style={{width: "100%"}}>
                                <p>Masukkan Password Anda</p>
                                <Input style={{borderRadius: 8, height: 48}}
                                       name="password"
                                       type="password"
                                       onChange={handleChange}
                                       placeholder="Password"
                                       id="password"
                                       required/>
                                <Checkbox style={{marginTop: 12}} onClick={handleShowPassword}>Tunjukkan Password</Checkbox>
                            </Space>

                            <Button style={{
                                borderRadius: 8,
                                height: 44,
                                backgroundColor: "#3B85FA",
                            }} size="large" className="button" type="primary" htmlType="submit" block>
                                Masuk
                            </Button>
                            <Link to="/register"><p className="sign-in">Belum punya akun ? <a href="">Daftar</a></p>
                            </Link>
                        </Space>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default LoginCard