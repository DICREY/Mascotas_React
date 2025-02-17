import React from 'react'
import '../styles/dynamicStyles/global.css'

const Nav = () => {
  return (
    <nav id="var-nav" className="var-nav">
      <ol>
        <span className="main-search">
          <input className="search" type="search" placeholder="¿What do you search?" />
          <i className='bx bx-search-alt'></i>
        </span>
        <span className="span-btn-menu">
          <i id="btn-menu" className='bx bx-menu btn-menu'></i>
        </span>
        <ol id="menu-deploy" className="menu-deploy inactive">
          <li><a className="btn-link" href="/pets.html">Pets</a></li>
          <li><a className="btn-link" href="/citas.html">Citas</a></li>
          <li><a className="btn-link" href="/services.html">Services</a></li>
          <li><a className="btn-link" href="#">Dogs</a></li>
          <li><a className="btn-link" href="#">Cats</a></li>
          <li>
            <a className="btn-link" href="#">Other Species</a>
            <ol className="deploying">
              <li><a className="btn-link" href="#">Hamsters</a></li>
              <li><a className="btn-link" href="#">Fish</a></li>
              <li><a className="btn-link" href="#">Rabbits</a></li>
              <li><a className="btn-link" href="#">Birds</a></li>
            </ol>
          </li>
        </ol>
      </ol>
    </nav>
  )
}

export default Nav