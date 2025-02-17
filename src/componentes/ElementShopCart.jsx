import React from "react"
import '../styles/dynamicStyles/global.css'

function ElementShopCart({productElements,delElement}) {
    return (
        <section className = "card-shop-product">   
            <img src={productElements.img} alt={productElements.name} />
            <span>
                <p>Name: ${productElements.name}</p>
                <p>Price: $${productElements.price}</p>
            </span>
            <button onClick={delElement}>
                <i className='bx bx-x'></i>
            </button>
        </section>
    )
}

export default ElementShopCart