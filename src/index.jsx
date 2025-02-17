import React from 'react'
import { createRoot } from 'react-dom/client'
import Header from './componentes/MainHeader'
import MainContent from './componentes/MainContent'
import Footer from './componentes/Footer'
import './styles/index.css'
import './styles/dynamicStyles/global.css'
import './styles/dynamicStyles/var.css'


const root = createRoot(document.getElementById('root'))

root.render(
  <React.StrictMode>
      <Header/>
      <MainContent/>
      <Footer/>
  </React.StrictMode>
)

