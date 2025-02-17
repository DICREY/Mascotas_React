import React from 'react'
import Nav from"./Nav"
import ProductsTarget from"./ProductsTarget"
import PetsImg from './PetsImg'

const MainContent = () => {
  return (
    <main id="main">
      <Nav />
      <PetsImg />
      <section id="section-info" className="section-info">
        <p translate="no" className="titles">Pets Paradise</p>
        <img src="https://github.com/DICREY/Multimedia-Mascotas/blob/main/imgs/PetsParadiseLogo.png?raw=true" alt="Pets Paradise Logo" />
        <p>We have more than 2 years of experience dedicated to the care, well-being and health of our furry friends; We are a work team committed to providing quality and excellence every day. Our staff is characterized by providing love, respect and affection towards all our clients.</p>
      </section>
      <section className="section-products">
        <p className="titles">Pet Store</p>
        <aside>
          <div>
            <p className="sub-title">Products</p>
            <ul>
              <li>Food</li>
              <li>Toys and accessories</li>
              <li>personalized plates</li>
              <li>Clothes</li>
              <li>Beds</li>
              <li>Toilet</li>
              <li>Dewormers</li>
            </ul>
          </div>
          <picture>
            <img className="imgs" src="https://raw.githubusercontent.com/DICREY/Multimedia-Mascotas/refs/heads/main/imgs/catSupermarket.webp" alt="an adorable cat pushing a shopping cart in a supermarket." title="CatWithShopCart" />
          </picture>
        </aside>
        <p className="titles">Pet Products</p>
        <ProductsTarget />
      </section>
      
    </main>
  )
}

export default MainContent