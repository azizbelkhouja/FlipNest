import Box from '@mui/material/Box';
import React, { useState } from 'react';
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';
import CategorySheet from './CategorySheet';
import { mainCategory } from '../../data/category/mainCategory';

const Navbar = () => {
  const theme = useTheme();
  const isLarge = useMediaQuery(theme.breakpoints.up('lg'));
  const [selectedCategory, setSelectedCategory] = useState("study_resources");
  const [showCategorySheet, setShowCategorySheet] = useState(false);

  const handleMouseEnter = (categoryId: string) => {
    setSelectedCategory(categoryId.toLowerCase());
    setShowCategorySheet(true);
  };

  const handleMouseLeave = () => {
    setShowCategorySheet(false);
  };

  return (
    <>
      <Box className="sticky top-0 left-0 right-0 bg-white" sx={{ zIndex: 2 }}>
        <div className="flex items-center justify-between px-5 lg:px-20 h-[70px] bg-primaryblue">
          <div className="flex items-center gap-9">
            <div className="flex items-center gap-2">
              {!isLarge && (
                <IconButton>
                  <MenuIcon sx={{ color: 'white' }} />
                </IconButton>
              )}
              <h1 className="logo cursor-pointer text-lg font-bold md:text-2xl text-white">FlipNest</h1>
            </div>
            <ul className="flex items-center text-white font-light">
              {mainCategory.map((item) => (
                <li
                  key={item.categoryId}
                  onMouseEnter={() => handleMouseEnter(item.categoryId)}
                  className={`mainCategories px-4 flex items-center cursor-pointer ${
                    item.isHighlighted ? "text-darkblue font-bold hover:underline" : "hover:underline"
                  }`}
                >
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div className="flex gap-1 lg:gap-4 items-center">
            <IconButton>
              <SearchIcon sx={{ color: 'white' }} />
            </IconButton>
            <Button className="flex items-center gap-2">
              <Avatar
                sx={{ width: 29, height: 29 }}
                src="https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg"
              />
              <h1 className="font-semibold hidden lg:block text-white">Aziz</h1>
            </Button>
            <IconButton>
              <FavoriteBorderIcon sx={{ fontSize: 29, color: 'white' }} />
            </IconButton>
            <IconButton>
              <AddShoppingCartIcon sx={{ fontSize: 29, color: 'white' }} />
            </IconButton>
            {isLarge && (
              <Button
                startIcon={<StorefrontIcon />}
                variant="outlined"
                sx={{
                  color: 'white',
                  borderColor: 'white',
                  '&:hover': { borderColor: 'white', backgroundColor: '#77BDC3' },
                }}
              >
                Become a Seller
              </Button>
            )}
          </div>
        </div>

        <div
          onMouseEnter={() => setShowCategorySheet(true)}
          onMouseLeave={handleMouseLeave}
           className="categorySheet absolute top-[4.41rem] left-20 right-20 border"
        >
          {showCategorySheet && (
            <div>
              <CategorySheet selectedCategory={selectedCategory} />
            </div>
          )}
        </div>
      </Box>
    </>
  );
};

export default Navbar;
