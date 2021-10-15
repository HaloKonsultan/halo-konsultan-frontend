import React, {useState} from "react"
import {Card, Button, Checkbox} from 'antd';
import axios from "axios"
import "../assets/css/auth.css"
import Logo from "../assets/img/logo.png"
import {Link, useHistory} from "react-router-dom"

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
        axios.post(`http://localhost:8000/api/consultant/register`, {
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
            <div className="container">
                <Card className="card">
                    <form onSubmit={handleSubmit}>
                        <br/>
                        <img className="logo1" src={Logo}/>
                        <br/><br/>
                        <p className="label">Masukkan Nama Lengkap Anda</p>
                        <input
                            type="text" placeholder="Nama Lengkap"
                            className="input"
                            name="name"
                            value={input.name}
                            onChange={handleChange} required/>
                        <p className="label">Masukkan Email Anda</p>
                        <input
                            type="text" placeholder="Email" className="input" name="email" value={input.email}
                               onChange={handleChange} required/>
                        <p className="label">Masukkan Password Anda</p>
                        <input
                            type="password"
                            placeholder="Password"
                            className="input-password"
                            name="password"
                            id="password"
                            value={input.password}
                            onChange={handleChange} required min={8}/>
                        <Checkbox onClick={handleShowPassword}>Tunjukkan Password</Checkbox>

                        <Button style={{
                            borderRadius: 8,
                            height: 44,
                            backgroundColor: "#3B85FA",
                            marginTop: 40,
                            marginBottom: 32,
                        }} size="large" className="button" type="primary" htmlType="submit" block>
                            Daftar
                        </Button>

                        <Link to="/"><p className="sign-in">Sudah punya akun ? <a href="">Masuk</a></p></Link>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default RegisterCard