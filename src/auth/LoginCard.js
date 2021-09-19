import React, { useState } from "react"
import { Card, Button, Checkbox } from 'antd';
import axios from "axios"
import "../assets/css/register.css"
import Logo from "../assets/img/logo.png"
import { useHistory } from "react-router-dom"

const LoginCard = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <div className="container">
                <Card className="card">
                    <form>
                        <br/>
                        <img className="logo" src={Logo}/>
                        <br/><br/>
                        <p className="label">Masukkan Email Anda</p>
                        <input type="text" placeholder="Email" className="input" name="email" />
                        <p className="label">Masukkan Password Anda</p>
                        <input type="password" placeholder="Password" className="input-password" name="password" />
                        <Checkbox onChange={onChange}>Tunjukkan Password</Checkbox>

                        <Button style={{
                            borderRadius: 8,
                            height: 44,
                            backgroundColor: "#3B85FA",
                            marginTop: 40,
                            marginBottom:32,
                        }} size="large" className="button" type="primary" htmlType="submit" block>
                            Daftar
                        </Button>

                        <p className="sign-in" >Belum punya akun ? <a href="">Daftar</a></p>
                    </form>
                </Card>
            </div>
        </>
    )
}

export default LoginCard