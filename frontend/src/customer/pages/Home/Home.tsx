import React from 'react'
import ElectronicsCategory from './ElectronicsCategory/ElectronicsCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'
import { Button } from '@mui/material'
import StorefrontIcon from '@mui/icons-material/Storefront';

const Home = () => {
  return (
    <>

    <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectronicsCategory/>
        <CategoryGrid/>

        <div className='pt-20'>
          <h1 className='text-lg lg:text-4xl font-bold pb-5 lg:pb-20 text-center'>TODAY'S TOP DEALS</h1>
        <Deal/>
        </div>

        <section className='py-20'>
          <h1 className='text-lg lg:text-4xl font-bold pb-5 lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </section>

        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full' src="https://images.pexels.com/photos/24740473/pexels-photo-24740473/free-photo-of-smiling-woman-lying-down-with-laptop-in-bed.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
          <div className='absolute top-1/2 left-4 lg:left-[15rem] transform -translate-y-1/2 font-semibold lg:text-4xl space-y-3'>
            <h1>Sell Your Product</h1>
            <p className='text-lg md:text-2xl'>On <span className='logo'>FlipNest</span></p>
            <div className='pt-6 flex justify-center'>
              <Button 
                startIcon={<StorefrontIcon />} 
                variant="contained" 
                sx={{
                  color: 'white', 
                  borderColor: 'white', 
                  backgroundColor: '#77BDC3',
                  '&:hover': {
                    borderColor: 'white',
                    backgroundColor: '#048690',
                  },
                  '&:active': {
                    transform: 'scale(0.97)',
                  },
                }}
              >
                Become a Seller Now
              </Button>

            </div>
          </div>
        </section>




    </div>
    
    </>
  )
}

export default Home