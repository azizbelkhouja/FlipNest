import { Button } from '@mui/material'
import React from 'react'

const Checkout = () => {
  return (
    <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
        <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
            <div className="col-span-2 space-y-5">
                <div className="flex justify-between items-center">
                    <h1 className="font-semibold">Select Shipping Address</h1>
                    <Button>Add New Address</Button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Checkout