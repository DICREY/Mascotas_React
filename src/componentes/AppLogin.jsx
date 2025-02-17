import React, { useState } from 'react'
import FormLoginUser from './LoginForm.jsx'
import ForgotPasswordForm from './ForgotPassForm.jsx'
import '../styles/login.css'


const App = () => {
  const [showForgotPassword, setShowForgotPassword] = useState(false)

  const handleForgotPassword = () => {
    // preventDefault()
    setShowForgotPassword(true)
  }

  const handleRememberPassword = () => {
    setShowForgotPassword(false)
  }

  return (
    <div>
      {!showForgotPassword ? (
        <FormLoginUser onForgotPass={handleForgotPassword} />
      ) : (
        <ForgotPasswordForm onRememberPassword={handleRememberPassword} />
      )}
      <span className="btn-home">
        <a href="index.html">
          <i className='bx bx-home'></i>
        </a>
      </span>
    </div>
  )
}

export default App