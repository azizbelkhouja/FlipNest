import React from 'react'
import { studyresourcesleveltwo } from '../../data/category/level-two/studyresourcesleveltwo'
import { electronicsleveltwo } from '../../data/category/level-two/electronicsleveltwo'
import { clothingleveltwo } from '../../data/category/level-two/clothingleveltwo'
import { furnituresleveltwo } from '../../data/category/level-two/furnituresleveltwo'
import { studyResourcesItems } from '../../data/category/level-three/studyresourceslevelthree'
import { electronicsItems } from '../../data/category/level-three/electronicslevelthree'
import { clothingItems } from '../../data/category/level-three/clothinglevelthree'
import { furnitureAndDormItems } from '../../data/category/level-three/furnitureslevelthree'
import { Box } from '@mui/material'

const categoryTwo = {
    resources: studyresourcesleveltwo,
    electronics: electronicsleveltwo,
    clothing: clothingleveltwo,
    furnitures: furnituresleveltwo
}
const categoryThree = {
    resources: studyResourcesItems,
    electronics: electronicsItems,
    clothing: clothingItems,
    furnitures: furnitureAndDormItems
}

const childCategory = (category:any, parentCategoryId:any) => {
    return category.filter((child:any) => child.parentCategoryId == parentCategoryId)
}

const CategorySheet = () => {
  return (
    <Box sx={
        {zIndex: 1}
    } className='bg-white shadow-lg lg:h-[500px] overflow-y-auto'>
        <div className='flex text-sm flex-wrap'>
            {
                categoryTwo["resources"]?.map((item) => 
                    <div>
                        <p className='text-primaryblue mb-5 font-semibold'>{item.name}</p>

                        <ul className='space-y-3'>

                            {childCategory(categoryThree["resources"], item.categoryId).map((item:any) =>
                                <div>
                                    <li className='hover:text-darkblue cursor-pointer text-black'>
                                        {item.name}
                                    </li>
                                </div>
                            )}
                        </ul>
                    </div>)
            }
        </div>
    </Box>
  )
}

export default CategorySheet