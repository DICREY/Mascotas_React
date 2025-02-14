import React from 'react'

const Nav = () => {
  return (
    <nav id="var-nav" className="var-nav">
      <ol>
        <span className="main-search">
          <input className="search" type="search" placeholder="¿What do you search?" />
          <box-icon name='search-alt' color='#ffffff' className='bx bx-search-alt'></box-icon>
        </span>
        <span className="span-btn-menu">
          <box-icon id="btn-menu" name='menu' color='#ffffff' className='bx bx-menu btn-menu'></box-icon>
        </span>
        <ol id="menu-deploy" className="menu-deploy inactive">
          <li><a className="btn-link" href="./template/pets.html">Pets</a></li>
          <li><a className="btn-link" href="./template/citas.html">Citas</a></li>
          <li><a className="btn-link" href="./template/services.html">Services</a></li>
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