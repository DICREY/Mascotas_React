import React from "react"

function ProductsDescription({product}) {
    return (
        <section className="product-description">
            <button className="btn-exit-description">
                <i className='bx bx-x'></i>
            </button>
            <img src={product.img} alt={product.name} />
            <span>
                <p><strong>Name: </strong>${product.name}</p>
                <p><strong>Price: </strong>${product.price}</p>
                <p><strong>Category: </strong>${product.category}</p>
                <p>{product.description}</p>
            </span>
        </section>
    )
}

export default ProductsDescription