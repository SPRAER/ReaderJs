import React, {useEffect, useState} from "react";
import './css/Login.scss';
import {Link} from "react-router-dom";
import {Button} from "@mui/material";

const Login = () => {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [emailDirty, setEmailDirty] = useState(false)
    const [passwordDirty, setPasswordDirty] = useState(false)
    const [emailError, setEmailError] = useState('Email не может быть пустым')
    const [passwordError, setPasswordError] = useState('Пароль не может быть пустым')
    const [fromValid, setFormValid] = useState(false)

    useEffect(() => {
        if (emailError || passwordError) {
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, passwordError])

    const emailHandler = (e) => {
        setEmail(e.target.value)
        const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
        if(!re.test(String(e.target.value).toLowerCase())) {
            setEmailError('Некоректный email')
        } else {
            setEmailError('')
        }
    }

    const passwordHandler = (e) => {
        setPassword(e.target.value)
        if (e.target.value.length < 3 || e.target.value.length > 8) {
            setPasswordError('Пароль не должен быть меньше 3 или больше 8 символов')
            if (!e.target.value) {
                setPasswordError('Пароль не должен пустым')
            }
        } else {
            setPasswordError("")
        }
    }

    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'password':
                setPasswordDirty(true)
                break
        }
    }

    return (
        <section id="main" className={"main-row-text"}>
            <h1 className="LoginTitle">Войти</h1>
            {(emailDirty && emailError) && <div style={{color: '#fff', marginBottom: '10px'}}>{emailError}</div>}
            <input onChange={e => emailHandler(e)} value={email} onBlur={e => blurHandler(e)} name="email" className="LoginInput" type="text" placeholder="email..."/>
            {(passwordDirty && passwordError) && <div style={{color: '#fff', marginBottom: '10px'}}>{passwordError}</div>}
            <input onChange={e => passwordHandler(e)} value={password} onBlur={e => blurHandler(e)} name="password" className="LoginInput" type="password" placeholder="password..."/>
            <Button disabled={!fromValid}>
                <Link disabled={!fromValid} to={"/home"} className="btn">
                    Войти
                </Link>
            </Button>
        </section>
    );
}

export default Login;