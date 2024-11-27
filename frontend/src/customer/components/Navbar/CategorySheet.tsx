import React from 'react';
import { studyresourcesleveltwo } from '../../data/category/level-two/studyresourcesleveltwo';
import { electronicsleveltwo } from '../../data/category/level-two/electronicsleveltwo';
import { clothingleveltwo } from '../../data/category/level-two/clothingleveltwo';
import { furnituresleveltwo } from '../../data/category/level-two/furnituresleveltwo';
import { studyResourcesItems } from '../../data/category/level-three/studyresourceslevelthree';
import { electronicsItems } from '../../data/category/level-three/electronicslevelthree';
import { clothingItems } from '../../data/category/level-three/clothinglevelthree';
import { furnitureAndDormItems } from '../../data/category/level-three/furnitureslevelthree';
import { Box } from '@mui/material';

const categoryTwo: { [key: string]: any[] } = {
  study_resources: studyresourcesleveltwo,
  electronics: electronicsleveltwo,
  clothing: clothingleveltwo,
  furniture_dorm: furnituresleveltwo,
};

const categoryThree: { [key: string]: any[] } = {
  study_resources: studyResourcesItems,
  electronics: electronicsItems,
  clothing: clothingItems,
  furniture_dorm: furnitureAndDormItems,
};

const CategorySheet = ({ selectedCategory }: { selectedCategory: string }) => {
  const levelTwoCategories = categoryTwo[selectedCategory] || [];
  const levelThreeCategories = categoryThree[selectedCategory] || [];

  if (!levelTwoCategories.length) {
    console.warn(`No level-two categories found for "${selectedCategory}"`);
    return null; // Don't render if there are no categories
  }

  const childCategory = (category: any, parentCategoryId: any) =>
    category.filter((child: any) => child.parentCategoryId === parentCategoryId);

  return (
    <Box sx={{ zIndex: 2 }} className="bg-white shadow-lg lg:h-[500px] overflow-y-auto">
      <div className="flex text-sm flex-wrap">
        {levelTwoCategories.map((item: any, index: number) => (
          <div
            key={item.categoryId}
            className={`p-8 lg:w-[20%] ${index % 2 === 0 ? 'bg-slate-50' : 'bg-white'}`}
          >
            <p className="text-primaryblue mb-5 font-semibold">{item.name}</p>
            <ul className="space-y-3">
              {childCategory(levelThreeCategories, item.categoryId).map((subItem: any) => (
                <li
                  key={subItem.categoryId}
                  className="hover:text-darkblue cursor-pointer text-black"
                >
                  {subItem.name}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </Box>
  );
};

export default CategorySheet;
