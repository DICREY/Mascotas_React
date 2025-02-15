import React,{ useState } from "react";

function FormLoginUser({OnForgotPass}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = (e) => {
        e.prevenDefault()
        setMessage('login...')
    }

    return (
        <>
        <head>
            <meta charset="UTF-8"></meta>
            <meta name="viewport" content="width=device-width, initial-scale=1.0"></meta>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
            <meta http-equiv="X-UA-Compatible" content="ie=edge"></meta>
            <meta http-equiv="X-UA-Compatible" content="IE=7"></meta>
            <meta http-equiv="Content-Type" content="text/html;charset=UTF-8"></meta>
            <meta name="description" content=""></meta>
            <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
            <link rel="shortcut icon" href="https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/PetsParadiseLogo.png?raw=true" type="image/x-icon"></link>
            <link rel="stylesheet" href="../css/login.css"></link>
            <title>Login Pets Paradise</title>
        </head>
        <form id="form-login" onSubmit={handleSubmit}>
            <h1 className="name-corp" translate="no">Pets Paradise</h1>
            <h1 translate="no">Login</h1>
            <div>
                <input
                id="email"
                name="email"
                className="input email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                />
                <i className='bx bxs-user icon'></i>
                <span className="span-input email">Email</span>
            </div>
            <div>
                <input
                id="password"
                name="password"
                className="input password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
                />
                <i className='bx bx-lock icon i-password'></i>
                <span className="span-input password">Password</span>
            </div>
            <p id="message" className="message">{message}</p>
            <a id="forgot-password" className="link" href="#" onClick={OnForgotPass}>
                ¿Do you forgot password?
            </a>
            <button id="btn-send" className="btn-send" type="submit">Send</button>
            <span className="span-register">
                <p>¿you don't have account?</p>
                <a className="link" href="../template/register.html">Register</a>
            </span>
        </form>
        </>
    )
}

export default FormLoginUser