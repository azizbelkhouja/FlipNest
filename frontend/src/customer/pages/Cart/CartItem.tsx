import { Add, Remove } from '@mui/icons-material'
import { Button, Divider } from '@mui/material'
import React from 'react'

const CartItem = () => {

  const handleUpdateQuantity = () => {
    // Update quantity
  }

  return (
    <div className='border rounded-md relative'>
      
      <div className="p-5 flex gap-3">

        <div>
          <img className='w-[90px] rounded-md' src="" alt="" />
        </div>

        <div className='space-y-2'>
        <h1 className="font-semibold text-lg">Iphone 16</h1>
        <p className='text-gray-600 font-medium text-sm'>
          The iPhone 16 features a stunning new design, advanced camera system, and the latest A16 Bionic chip for unparalleled  performance.
        </p>
        <p className='text-xs text-gray-400'><strong>Sold By: </strong>Aziz</p>
        <p className='text-sm'>3 days return available</p>
        <p className='text-sm text-gray-500'><strong>Quantity :</strong>3</p>
        </div>
        <Divider />
        <div className="px-5 py-2 flex justify-between items-center">

          <div className='flex items-center gap-2 w-[140px] justify-between'>

          <Button disabled={true} onClick={handleUpdateQuantity}>
                <Remove/>
              </Button>
              <span>
                {3}
              </span>
              <Button onClick={handleUpdateQuantity}>
                <Add/>
              </Button>

          </div>

        </div>

      </div>

    </div>
  )
}

export default CartItem