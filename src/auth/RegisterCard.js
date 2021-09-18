import React, { useState } from "react"
import { Card, Button, Checkbox } from 'antd';
import axios from "axios"
import "../assets/css/register.css"
import Logo from "../assets/img/logo.png"
import { useHistory } from "react-router-dom"

const RegisterCard = () => {
    let history = useHistory()
    const [input, setInput] = useState({
        name: "",
        email: "",
        password: ""
    })

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    const handleSubmit = (event) => {
        event.preventDefault()
        console.log(input)
        axios.post(`api menunggu mas fatih`,{
            name : input.name,
            email : input.email,
            password : input.password
        }).then(() => {
            history.push(`/login`)
        })
    }

    const handleChange = (event) => {
        let value = event.target.value
        let name = event.target.name

        setInput({...input, [name] : value})
    }

    return (
        <>
            <div className="container">
                <Card className="card">
                    <form onSubmit={handleSubmit}>
                        <br/>
                        <img className="logo" src={Logo}/>
                        <br/><br/>
                        <p className="label">Masukkan Nama Lengkap Anda</p>
                        <input type="text" placeholder="Nama Lengkap" className="input" name="name" value={input.name} onChange={handleChange}/>
                        <p className="label">Masukkan Email Anda</p>
                        <input type="text" placeholder="Email" className="input" name="email" value={input.email} onChange={handleChange}/>
                        <p className="label">Masukkan Password Anda</p>
                        <input type="password" placeholder="Password" className="input-password" name="password" value={input.password} onChange={handleChange}/>
                        <Checkbox onChange={onChange}>Tunjukkan Password</Checkbox>

                        <Button style={{
                            borderRadius: 8,
                            height: 44,
                            backgroundColor: "#3B85FA",
                            marginTop: 40,
                            marginBottom:32,
                        }} size="large" className="button" type="primary" block>
                            Daftar
                        </Button>

                        <p className="sign-in" >Sudah punya akun ? <a href="">Masuk</a></p>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default RegisterCard