import React from 'react'

const images = [
  "",
  ""
]

const ProductCard = () => {
  return (
    <>
      <div className='group px-4 relative'>
        <div className='card'>
          {images.map((item) => <img className='card-media object-top' src={item} alt="" />)}
          
        </div>
      </div>
    </>
  )
}

export default ProductCard