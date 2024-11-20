import React from 'react'
import ElectronicsCategory from './ElectronicsCategory/ElectronicsCategory'
import CategoryGrid from './CategoryGrid/CategoryGrid'

const Home = () => {
  return (
    <>

    <div className='space-y-5 lg:space-y-10 relative'>

        <ElectronicsCategory/>
        <CategoryGrid/>

    </div>
    
    </>
  )
}

export default Home