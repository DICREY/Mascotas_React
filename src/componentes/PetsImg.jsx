import React from 'react'
import { useState,useEffect } from 'react'

function PetsImg() {
    const [images,setImages] = useState([])

    const petList = () => {
        const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
        fetch(URL)
        .then(res => res.json())
        .then(data => setImages(data))
    }

    useEffect(() => petList())

    return (
        <section id="section-pictures" className="section-ads-offers">
            <picture id="ads-offers" className="ads-offers">
                {images.map((i,index) => (
                    <img key={index} src={i.url} alt={`Pet ${index + 1}`}className="pet-picture" />
                ))}
            </picture>
        </section>
    )
}

export default PetsImg