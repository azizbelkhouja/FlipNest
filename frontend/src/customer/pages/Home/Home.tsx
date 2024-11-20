import React from 'react'
import ElectronicsCategory from './ElectronicsCategory/ElectronicsCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'
import ShopByCategory from './ShopByCategory/ShopByCategory'

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

        <section className='pt-20'>
          <h1 className='text-lg lg:text-4xl font-bold pb-5 lg:pb-20 text-center'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </section>

        <section className='lg:px-20 relative h-[200px] lg:h-[450px] object-cover'>
          <img className='w-full h-full' src="https://images.pexels.com/photos/4458554/pexels-photo-4458554.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" />
        </section>




    </div>
    
    </>
  )
}

export default Home