import React, { useState } from 'react'
import '../styles/register.css'
import '../styles/dynamicStyles/global.css'

const RegisterForm = () => {
  const [currentSection, setCurrentSection] = useState('primary')
  const [formData, setFormData] = useState({
    name: '',
    lastName: '',
    city: '',
    address: '',
    email: '',
    password: '',
    tel: '',
    terms: false,
    policy: false,
  })

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value
    })
  }

  const handleNext = () => {
    setCurrentSection('secondary')
  }

  const handleBack = () => {
    setCurrentSection('primary')
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // console.log('Formulario enviado:', formData)
  }

  return (
    <main>
      <form onSubmit={handleSubmit}>
        <h1 className="name-corp" translate="no">Pets Paradise</h1>
        <h1>Register</h1>

        {/* Primary Section */}
        <section className={`sections primary-section ${currentSection === 'primary' ? '' : 'inactive'}`}>
          <div className="names">
            <span>
              <input
                className="input name"
                name="name"
                type="text"
                placeholder="Name"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <i className='bx bx-user icon'></i>
            </span>
            <span>
              <input
                className="input last-name"
                name="lastName"
                type="text"
                placeholder="Last Name"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
              <i className='bx bxs-user icon'></i>
            </span>
          </div>
          <span>
            <input
              className="input city"
              name="city"
              type="text"
              placeholder="City"
              value={formData.city}
              onChange={handleChange}
              required
            />
            <i className='bx bxs-business icon'></i>
          </span>
          <span>
            <input
              className="input address"
              name="address"
              type="text"
              placeholder="Address"
              value={formData.address}
              onChange={handleChange}
              required
            />
            <i className='bx bx-home icon'></i>
          </span>
          <div className="names terms-policy">
            <p className="link">Terms and Conditions</p>
            <p className="link">Policy Privacy</p>
          </div>
          <button type="button" className="btn-send btn-next" onClick={handleNext}>
            Next
          </button>
          <p>¿Do you have account? <a className="link" href="../template/login.html">Login</a></p>
        </section>

        {/* Secondary Section */}
        <section className={`sections secondary-section ${currentSection === 'secondary' ? '' : 'inactive'}`}>
          <span>
            <input
              className="input email"
              name="email"
              type="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
            <i className='bx bxl-gmail icon'></i>
          </span>
          <span className="span-password">
            <input
              className="input password"
              type="password"
              name="password"
              placeholder="Password"
              value={formData.password}
              onChange={handleChange}
              required
            />
            <i className='bx bx-lock icon i-password'></i>
          </span>
          <span>
            <input
              className="input tel"
              name="tel"
              type="tel"
              placeholder="Tel"
              value={formData.tel}
              onChange={handleChange}
              required
            />
            <i className='bx bx-phone icon'></i>
          </span>
          <div className="names terms-policy">
            <span>
              <input
                type="checkbox"
                name="terms"
                checked={formData.terms}
                onChange={handleChange}
                required
              />
              <p className="link">Terms and Conditions</p>
            </span>
            <span>
              <input
                type="checkbox"
                name="policy"
                checked={formData.policy}
                onChange={handleChange}
                required
              />
              <p className="link">Policy Privacy</p>
            </span>
          </div>
          <div className="names">
            <button type="button" className="btn-send btn-back" onClick={handleBack}>
              Back
            </button>
            <button type="submit" className="btn-send">
              Send
            </button>
          </div>
          <p>¿Do you have account? <a className="link" href="/login.html">Login</a></p>
        </section>
      </form>

      <span className="btn-home">
        <a href="../../index.html">
          <i className='bx bx-home'></i>
        </a>
      </span>
    </main>
  )
}

export default RegisterForm