import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'

const FilterSection = () => {
  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>

        <p className="text-lg font-semibold">Filters</p>
        <Button size='small' className='text-primaryblue cursor-pointer font-semibold'>Clear All</Button>

      </div>7
      <Divider/>
      <section>
        <FormControl>
          <FormLabel
            sx={{
              fontSize: '16px',
              fontWeight: 'bold',
              color: '#048690',
              pb: '14px'

            }}
            className='text-2xl font-semibold' id='color'>Color
          </FormLabel>
          <RadioGroup
            aria-labelledby="color"
            defaultValue=""
            name="radio-buttons-group"
          >
            <FormControlLabel value="female" control={<Radio />} label="Female" />
            <FormControlLabel value="male" control={<Radio />} label="Male" />
            <FormControlLabel value="other" control={<Radio />} label="Other" />
          </RadioGroup>
        </FormControl>
      </section>
    </div>
  )
}

export default FilterSection