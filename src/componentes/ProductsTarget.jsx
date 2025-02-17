import React from "react"
import { productList } from "../scripts/dynamicScripts/datas"

function ProductsTarget() {
    // const showDescription = (product) => {

    // }
    // const addCart = (product) => {

    // }
    return (
        <section id="section-products">
            <i className='bx bx-chevron-left btn-ads'></i>
            <i className='bx bx-chevron-right btn-ads'></i>
            { productList.map(i => 
                (<div className="productCard" key={i.id}>
                    <img src={i.img} alt={i.description} />
                    <p>Name: {i.name}</p>
                    <p>Price: ${i.price}</p>
                    <span >
                        <span className="btn-view-description" 
                        // onClick={ () => showDescription({
                        //     name: i.name,
                        //     img: i.img,
                        //     price: i.price,
                        //     description: i.description,
                        //     category: i.categories
                        //     })
                        // }
                        >View Product</span>
                    </span>
                    <button className="btn-add-cart" 
                    // onClick={() => addCart({
                    //         name: i.name,
                    //         img: i.img,
                    //         price: i.price,
                    //         description: i.description,
                    //         category: i.categories
                    //         })
                    //     }
                        >
                        <i className='bx bxs-cart-add'></i>
                    </button>
                </div>))
            }
        </section>
    )
}

export default ProductsTarget