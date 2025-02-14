import React from 'react'
import 'boxicons'
import '../styles/dynamicStyles/header.css'

const Header = () => {
  return (
    <header id="header" className="header">
      <picture>
        <img className="logo" src="https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/PetsParadiseLogo.png?raw=true" alt="logo" />
      </picture>
      <p translate="no" className="name-corp">Pets Paradise</p>
      <span>
        <ol>
          <li>
            <a className="btn-link" href="#"><box-icon className="box-icon" name='user-circle' color="var(--lighter-primary)"></box-icon>User</a>
            <ol className="deploying access">
              <li><a className="btn-link" href="./template/login.html">Login</a></li>
              <li><a className="btn-link" href="./template/register.html">Register</a></li>
            </ol>
          </li>
          <li className="container-shop-cart">
            <p id="shop-cant" className="shop-cant"></p>
            <a className="btn-link cart-shop" href="#"><box-icon className="box-icon" name='cart-alt' color="var(--lighter-primary)"></box-icon>Cart</a>
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