import React from 'react'
import CartItem from './CartItem'
import { LocalOffer } from '@mui/icons-material'

const primaryblue = '#048690'; // Define the primaryblue color

const Cart = () => {
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>
      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

        <div className='cartItemSection lg:col-span-2 space-y-3'>
          {[1,1,1,1,1,1,1].map((item) => <CartItem />)}
        </div>

        <div className='col-span-1 text-sm space-y-3'>

          <div className='border rounded-md px-5 py-3 space-y-5'>
            <div>

              <div className="flex gap-3 text-sm items-center">

                <LocalOffer sx={{color:primaryblue, fontSize:"17px" }}/>

              </div>
              
              <span>Apply Coupons</span>

            </div>
          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart