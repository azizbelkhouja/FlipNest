import React, { useState } from 'react'
import './ProductCard.css'

const images = [
  "https://store.storeimages.cdn-apple.com/4668/as-images.apple.com/is/MA7F4?wid=1144&hei=1144&fmt=jpeg&qlt=90&.v=1723162550519",
  "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRK0X6vsKIE0WfiAp4Hsmc6iIF0YpN-R2WPLA&s"
]

const ProductCard = () => {

  const [currentImage, setCurrentImage] = useState(0)
  const [isHovered, setIsHovered] = useState(false)
  

  return (
    <>
      <div className='group px-4 relative'>

        <div className='card'>
          {images.map((item, index) => <img className='card-media object-top' src={item} alt="" 
          style={{transform: `translateX(${(index-1)*100}%)`}}/>)}
        </div>

      </div>
    </>
  )
}

export default ProductCard