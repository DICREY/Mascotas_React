import React from 'react'
import ReactDOM from 'react-dom/client'
import './styles/index.css'
import './styles/dynamicStyles/bem.css'
import './styles/dynamicStyles/var.css'
import App from './App'

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)

