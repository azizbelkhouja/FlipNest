import { Avatar, Box, Grid2 } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid2 container spacing={8}>
        <Grid2 size={{xs: 1}}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor: "#9155FD"}}>
              A
            </Avatar>
          </Box>
        </Grid2>
        <Grid2 size={{xs: 9}}>
          <div className="space-y-2">
            <div>
              <p className='font-semibold text-lg'>Aziz</p>
              <p className='opacity-70'>2024-12-06 5:57pm</p>
            </div>
          </div>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default ReviewCard