import React, { useState } from 'react'

function ForgotPasswordForm({ onRememberPassword }) {
  const [email, setEmail] = useState('')
  const [name, setName] = useState('')
  const [message, setMessage] = useState('')

  const handleSubmit = (e) => {
    e.preventDefault()
    setMessage('Enviando nueva contraseña a ' + email)
    alert(message)
  }

  return (
    <form id="form-data-password" onSubmit={handleSubmit}>
      <h1 className="name-corp" translate="no">Pets Paradise</h1>
      <h1 translate="no">Remember Password</h1>
      <div>
        <input
          id="email-forgot"
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
          id="name-forgot"
          name="name"
          className="input email"
          type="text"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <i className='bx bxs-user icon'></i>
        <span className="span-input email">Name</span>
      </div>
      <button id="send-new-password" className="btn-send" type="submit">Send</button>
      <a id="remember-password" className="link" href="" onClick={onRememberPassword}>
        ¿Remember do you password?
      </a>
    </form>
  )
}

export default ForgotPasswordForm