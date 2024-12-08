import { Avatar, Box, Grid2 } from '@mui/material'
import React from 'react'

const ReviewCard = () => {
  return (
    <div className='flex justify-between'>
      <Grid2 container spacing={2} gap={3}>
        <Grid2 item xs={1}>
          <Box>
            <Avatar className='text-white' sx={{width:56, height:56, bgcolor: "#9155FD"}}>

            </Avatar>
          </Box>
        </Grid2>
      </Grid2>
    </div>
  )
}

export default ReviewCard