import React,{ useState } from "react";

function FormLoginUser({onForgotPass}) {
    const [email,setEmail] = useState('')
    const [password,setPassword] = useState('')
    const [message,setMessage] = useState('')

    const handleSubmit = (e) => {
        e.prevenDefault()
        setMessage('login...')
    }

    return (
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
            <a id="forgot-password" className="link" href="#" onClick={onForgotPass}>
                ¿Do you forgot password?
            </a>
            <button id="btn-send" className="btn-send" type="submit">Send</button>
            <span className="span-register">
                <p>¿you don't have account?</p>
                <a className="link" href="/register.html">Register</a>
            </span>
        </form>
    )
}

export default FormLoginUser