import React from 'react'
import { useState,useEffect } from 'react'

function PetsImg() {
    const [images,setImages] = useState([])

    useEffect(() => {
        const URL = "https://api.thecatapi.com/v1/images/search?limit=10"
        const petList = async () => {
            const res = await fetch(URL)
            const result = await res.json()
            setImages(result)
        }
        petList()
    },[])

    useEffect(() => {
        let scrollAmount = 0
        let leftScroll = 400
        const scrollInterval = setInterval(() => {
            contenedorAds.scrollBy({ left: leftScroll, behavior: 'smooth' })
            scrollAmount += leftScroll
            if (scrollAmount > (800 + picturesContainer.scrollWidth - picturesContainer.clientWidth)) {
                picturesContainer.scrollTo({ left: 0, behavior: 'smooth' })
                scrollAmount = 0
            }
        },2000)   
    })

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