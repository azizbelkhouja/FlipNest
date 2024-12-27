import React, { useState } from 'react'
import CartItem from './CartItem'
import { Close, LocalOffer } from '@mui/icons-material'
import { Button, dividerClasses, IconButton, TextField } from '@mui/material';

const primaryblue = '#048690'; // Define the primaryblue color

const Cart = () => {
  const [couponCode, setCouponCode] = useState('');
  const handleChange = (e:any) => {
    setCouponCode(e.target.value);
  }
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-60 min-h-screen'>

      <div className='grid grid-cols-1 lg:grid-cols-3 gap-5'>

        <div className='cartItemSection lg:col-span-2 space-y-3'>

          {[1,1,1,1,1,1,1].map((item) => <CartItem />)}

        </div>

        <div className='col-span-1 text-sm space-y-3'>

          <div className='border rounded-md px-5 py-3 space-y-5'>

              <div className="flex gap-3 text-sm items-center">

                <div className="flex gap-3 text-sm items-center">

                <LocalOffer sx={{color:primaryblue, fontSize:"17px" }}/>

                </div>

                <span>Apply Coupons</span>

              </div>

              {true ? <div className='flex justify-between items-center'>
                        <TextField
                          onChange={handleChange}
                          id="outlined-basic"
                          placeholder="Coupon Code"
                          size="small"
                          variant="outlined"
                          sx={{
                            '& .MuiOutlinedInput-root': {
                              '&.Mui-focused .MuiOutlinedInput-notchedOutline': {
                                borderColor: primaryblue,
                              },
                            },
                          }}
                        />
                        <Button
                          variant="outlined"
                          size="small"
                          sx={{
                            color: primaryblue,
                            border: 'hidden',
                          }}
                        >
                          Apply
                        </Button>
                       </div>
                  : <div className='flex'>
                    <div className='p-1 pl-5 pr-3 border rounded-md flex gap-2 items-center'>
                        <span className=''>AZIZ30 Applied</span>
                        <IconButton size='small'>
                          <Close className='text-red-600'/>
                        </IconButton>
                    </div>
                  </div>
              
              }

          </div>

        </div>

      </div>

    </div>
  )
}

export default Cart