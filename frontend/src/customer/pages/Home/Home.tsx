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
        <Deal/>

        <div>
          <h1 className='text-lg lg:text-4xl font-bold pb-5 lg:pb-20'>SHOP BY CATEGORY</h1>
          <ShopByCategory/>
        </div>

    </div>
    
    </>
  )
}

export default Home