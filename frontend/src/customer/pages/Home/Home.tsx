import React from 'react'
import ElectronicsCategory from './ElectronicsCategory/ElectronicsCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'
import Deal from './Deal/Deal'

const Home = () => {
  return (
    <>

    <div className='space-y-5 lg:space-y-10 relative pb-20'>

        <ElectronicsCategory/>
        <CategoryGrid/>
        <Deal/>

    </div>
    
    </>
  )
}

export default Home