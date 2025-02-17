import React from 'react'
import { useState,useEffect } from 'react-dom/client'
import '../styles/dynamicStyles/header.css'

const Header = () => {
  // const [cartMessage,setCartMessage] = useState('')
  // const [cartElements,setCartElements] = useState([])

  // const updaterCartMessage = () => {
  //   if (cartElements.length > 0) {
  //     setCartMessage('')
  //   } else setCartMessage("You don't have products on the cart")
  // }

  // useEffect(() => {
  //   updaterCartMessage()
  // })

  return (
    <header id="header" className="header">
      <picture>
        <img className="logo" src="https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/PetsParadiseLogo.png?raw=true" alt="logo" />
      </picture>
      <p translate="no" className="name-corp">Pets Paradise</p>
      <span>
        <ol>
          <li>
            <a className="btn-link" href="#"><i class='bx bx-user-circle'></i>User</a>
            <ol className="deploying access">
              <li><a className="btn-link" href="/login.html">Login</a></li>
              <li><a className="btn-link" href="/register.html">Register</a></li>
            </ol>
          </li>
          <li className="container-shop-cart">
            <p id="shop-cant" className="shop-cant">0</p>
            <a className="btn-link cart-shop" href="#"><i class='bx bx-cart-alt'></i>Cart</a>
            <ol className="Shoping-Cart">
              <ol id="Shoping-Cart"></ol>
              <p id="total-price"></p>
            </ol>
          </li>
        </ol>
      </span>
    </header>
  )
}

export default Header