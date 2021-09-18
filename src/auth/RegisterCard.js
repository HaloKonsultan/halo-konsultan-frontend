import React from "react"
import { Card, Button, Checkbox } from 'antd';
import "../assets/css/register.css"
import Logo from "../assets/img/logo.png"

const RegisterCard = () => {

    function onChange(e) {
        console.log(`checked = ${e.target.checked}`);
    }

    return (
        <>
            <div className="container">
                <Card className="card">
                    <br/>
                    <img className="logo" src={Logo}/>
                    <br/><br/>
                    <p className="label">Masukkan Nama Lengkap Anda</p>
                    <input type="text" placeholder="Nama Lengkap" className="input"/>
                    <p className="label">Masukkan Email Anda</p>
                    <input type="text" placeholder="Email" className="input"/>
                    <p className="label">Masukkan Password Anda</p>
                    <input type="password" placeholder="Password" className="input-password"/>
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
                </Card>
            </div>
        </>
    )
}

export default RegisterCard