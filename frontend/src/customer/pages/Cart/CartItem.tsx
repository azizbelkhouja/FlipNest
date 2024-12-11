import React from 'react'

const CartItem = () => {
  return (
    <div className='border rounded-md relative'>
      
      <div className="p-5 flex gap-3">

        <div>
          <img className='w-[90px] rounded-md' src="" alt="" />
        </div>

        <div className='space-y-2'>
        <h1 className="font-semibold text-lg">Iphone 16</h1>
        <p>
          The iPhone 16 features a stunning new design, advanced camera system, and the latest A16 Bionic chip for unparalleled  performance.
        </p>
        <p><strong>Sold By: </strong>Aziz</p>
        <p>3 days return available</p>
        <p><strong>Quantity :</strong>3</p>
        </div>

      </div>

    </div>
  )
}

export default CartItem