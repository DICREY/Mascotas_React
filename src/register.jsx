import React from 'react'
import { createRoot } from 'react-dom/client'
import RegisterForm from './componentes/RegisterForm'

const root = createRoot(document.getElementById("root"))

root.render(
    <React.StrictMode>
        <RegisterForm />
    </React.StrictMode>
)