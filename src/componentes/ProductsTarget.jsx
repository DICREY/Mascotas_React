import React from "react"
import 'boxicons'
import { productList } from "../datas"

function ProductsTarget() {
    const showDescription = () => {

    }
    const addCart = () => {

    }
    return (
        <section id="section-products">
            <box-icon name="chevron-left" className='bx bx-chevron-left btn-ads'></box-icon>
            <box-icon name="chevron-right" className='bx bx-chevron-right btn-ads'></box-icon>
            { productList.map(i => 
                (<div className="productCard" key={i.id}>
                    <img src={i.img} alt={i.description} />
                    <p>Name: {i.name}</p>
                    <p>Price: ${i.price}</p>
                    <span >
                        <span className="btn-view-description" onClick={showDescription}>View Product</span>
                    </span>
                    <button className="btn-add-cart" onClick={addCart}>
                        <box-icon className='bx bxs-cart-add' name='cart-alt'></box-icon>
                    </button>
                </div>))
            }
        </section>
    )
}

export default ProductsTarget