import React from "react"
import { Row, Col } from 'antd';
import { Card } from 'antd';
import { Button } from 'antd';
import "../assets/css/register.css"
import Logo from "../assets/img/logo.png"

const RegisterCard = () => {

    return (
        <>
            <div className="container">
                <Card className="card">
                    <br/><br/>
                    <img className="logo" src={Logo}/>
                    <br/><br/>
                    <p className="label">Masukkan Nama Lengkap Anda</p>
                    <input type="text" placeholder="Nama Lengkap" className="input"/>
                    <p className="label">Masukkan Email Anda</p>
                    <input type="text" placeholder="Email" className="input"/>
                    <p className="label">Masukkan Password Anda</p>
                    <input type="text" placeholder="Password" className="input"/>

                    <Button size="large" className="button" type="primary" block>
                        Daftar
                    </Button>
                    <br/><br/>

                    <p className="sign-in" >Sudah punya akun ? <a href="">Masuk</a></p>
                </Card>
            </div>
        </>
    )
}

export default RegisterCard