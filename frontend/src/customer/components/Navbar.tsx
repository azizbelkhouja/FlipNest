import Box from '@mui/material/Box'
import React from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { IconButton } from '@mui/material';

const Navbar = () => {
  return (
    <div>
        <Box>
            <div>
                <div>
                    <div className='flex items-center gap-2 bg-[#048690]'>
                        <IconButton>
                            <MenuIcon style={{ color: 'white' }} />
                        </IconButton>
                        <h1 className='logo cursor-pointer text-lg md:text-2xl text-white'>
                            FlipNest 
                        </h1>
                    </div>
                </div>
            </div>
        </Box>
    </div>
  )
}

export default Navbar