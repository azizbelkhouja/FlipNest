import { Button, Divider, FormControl, FormControlLabel, FormLabel, Radio, RadioGroup } from '@mui/material'
import React from 'react'
import { colors } from '../../data/Filter/color'

const FilterSection = () => {
  const [expendColor, setExpendColor] = useState(false);

  return (
    <div className='-z-50 space-y-5 bg-white'>
      <div className='flex items-center justify-between h-[40px] px-9 lg:border-r'>
        <p className="text-lg font-semibold">Filters</p>
        <Button size='small' className='text-primaryblue cursor-pointer font-semibold'>Clear All</Button>
      </div>
      <Divider/>
      <div className='px-9 space-y-6'>
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
            name="color"
          >
            {colors.slice(0, expendColor?colors.length:5).map((item) => <FormControlLabel value="color" control={<Radio />} label={
              <div className='flex items-center gap-3'>
                <p>{item.name}</p>
                <p 
                  style={{backgroundColor: item.hex}}
                  className={`h-5 w-5 rounded-full ${item.name === "White"?"border":""}`}
                >
                </p>
              </div>
            } />)}
            
          </RadioGroup>
        </FormControl>
        <div>
          <button>
            {expendColor ? 'Show Less' : `+${colors.length - 5} more`}
          </button>
        </div>
      </section>
      </div>
    </div>
  )
}

export default FilterSection