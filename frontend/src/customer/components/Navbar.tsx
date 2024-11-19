import Box from '@mui/material/Box'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Avatar, Button, IconButton, useMediaQuery, useTheme } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import { FavoriteBorder, Storefront } from '@mui/icons-material';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import StorefrontIcon from '@mui/icons-material/Storefront';

const Navbar = () => {
    const theme = useTheme();
    const isLarge = useMediaQuery(theme.breakpoints.up("lg"));

    return (
        <>
            <Box>
                <div className='flex items-center justify-between px-5 lg:px20 h-[70px]  bg-[#048690]'>
                    <div>
                        <div className='flex items-center gap-2'>
                            <IconButton>
                                <MenuIcon sx={{ color: 'white' }} />
                            </IconButton>
                            <h1 className='logo cursor-pointer text-lg md:text-2xl text-white'>
                                FlipNest 
                            </h1>
                        </div>
                    </div>
                    <div className='flex gap-1 lg:gap-6 items-center'>
                        <IconButton>
                            <SearchIcon sx={{ color: 'white' }}/>
                        </IconButton>
                        {
                            true ?  <Button className='flex items-center gap-2'>
                                        <Avatar
                                        sx={{ width: 29, height: 29 }}
                                        src='https://i.pinimg.com/originals/f1/0f/f7/f10ff70a7155e5ab666bcdd1b45b726d.jpg'/>
                                        <h1 className='font-semibold hidden lg:block text-white'>Aziz</h1>
                                    </Button> : 
                                    <Button variant='contained'>Login</Button>
                        }
                        <IconButton>
                            <FavoriteBorderIcon sx={{fontSize: 29, color: 'white'}}/>
                        </IconButton>
                        <IconButton>
                            <AddShoppingCartIcon sx={{fontSize: 29, color: 'white'}}/>
                        </IconButton>
                        {
                            isLarge && 
                            <Button startIcon={<StorefrontIcon/>} variant='outlined' 
                            sx={{color: 'white', borderColor: 'white', 
                                '&:hover': { borderColor: 'white',
                                             backgroundColor: '#77BDC3',
                                           },
                                }}>
                                Become a Seller
                            </Button>
                        }
                    </div>
                </div>
            </Box>
        </>
    )
}

export default Navbar