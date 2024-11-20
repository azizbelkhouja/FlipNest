import React from 'react'

const CategoryGrid = () => {
  return (
    <div className='grid gap-4 grid-rows-12 grid-cols-12 lg:h-[600px] px-5 lg:px-20'>
        <div className='col-span-3 row-span-12 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/2826131/pexels-photo-2826131.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/4069290/pexels-photo-4069290.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='col-span-4 row-span-6 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/1462630/pexels-photo-1462630.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='col-span-3 row-span-12 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/1848731/pexels-photo-1848731.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='col-span-4 row-span-6 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/4145197/pexels-photo-4145197.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
        <div className='col-span-2 row-span-6 text-white'>
            <img className='w-full h-full object-fill object-top rounded-md' src="https://images.pexels.com/photos/3414792/pexels-photo-3414792.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </div>
    </div>
  )
}

export default CategoryGrid