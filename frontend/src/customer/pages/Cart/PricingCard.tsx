import { Divider } from '@mui/material'
import React from 'react'

const PricingCard = () => {
  return (
    <>
      <div className='space-y-3 p-5'>

        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Subtotal</span>
          <span className='font-medium'>1400€</span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Discount</span>
          <span className='font-medium'>900€</span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Shipping</span>
          <span className='font-medium'>50€</span>
        </div>

        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Platform Fee</span>
          <span className='font-medium'>Free</span>
        </div>

        <Divider />

        <div className='flex justify-between items-center'>
          <span className='text-gray-400'>Total</span>
          <span className='font-medium'>950€</span>
        </div>

      </div>
    </>
  )
}

export default PricingCard