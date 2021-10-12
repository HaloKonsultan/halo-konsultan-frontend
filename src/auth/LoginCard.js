import React, {useContext, useState} from "react"
import {Card, Button, Checkbox} from 'antd';
import Cookies from "js-cookie"
import axios from "axios"
import "../assets/css/auth.css"
import Logo from "../assets/img/logo.png"
import {Link, useHistory} from "react-router-dom"
import {UserContext} from "../components/context/UserContext";

const LoginCard = () => {
    let history = useHistory()

    const {setLoginStatus} = useContext(UserContext)

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
        axios.post(`http://localhost:8000/api/consultant/login`, {
            email: input.email,
            password: input.password
        }).then((res) => {
            let token = res.data.access_token
            let id = res.data.data.id
            let location = res.data.data.location

            Cookies.set('token', token, {expires: 1})
            Cookies.set('id', id, {expires: 1})
            Cookies.set('location', location, {expires: 1})
            history.push('/')
        })
    }

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <div className="container">
                <Card className="card">
                    <form onSubmit={handleSubmit}>
                        <br/>
                        <img className="logo1" src={Logo}/>
                        <br/><br/>

                        <p className="label">Masukkan Email Anda</p>
                        <input type="text"
                               placeholder="Email"
                               className="input"
                               name="email"
                               value={input.email}
                               onChange={handleChange} required/>

                        <p className="label">Masukkan Password Anda</p>
                        <input type="password"
                               placeholder="Password"
                               className="input-password"
                               name="password" value={input.password}
                               onChange={handleChange} required/>
                        <Checkbox onChange={onChange}>Tunjukkan Password</Checkbox>

                        <Button style={{
                            borderRadius: 8,
                            height: 44,
                            backgroundColor: "#3B85FA",
                            marginTop: 40,
                            marginBottom: 32,
                        }} size="large" className="button" type="primary" htmlType="submit" block>
                            Masuk
                        </Button>

                        <Link to="/register"><p className="sign-in">Belum punya akun ? <a href="">Daftar</a></p></Link>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default LoginCard