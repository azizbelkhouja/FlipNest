import { Box, Grid2, TextField } from '@mui/material'
import { useFormik } from 'formik'
import React from 'react'

const AddressForm = () => {
    const formik = useFormik({
        initialValues: {
            name: '',
            mobile: '',
            pinCode: '',
            address: '',
            city: '',
            state: '',
            locality:""
        },
        validationSchema: {},
        onSubmit: (values) => {
            console.log(values)
        },
    })

  return (
    <Box sx={{minWidth:600, max:"auto"}}>
        <p className='text-xl font-bold text-center pb-5'>Contact Details</p>
        <form>
            <Grid2 container spacing={8}>
                <Grid2 size={{xs:12}}>
                    <TextField 
                        fullWidth
                        name='name'
                        label='Full Name'
                        variant='outlined'
                        value={formik.values.name}
                        onChange={formik.handleChange}
                        error={formik.touched.name && Boolean(formik.errors.name)}
                        helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid2>
            </Grid2>
        </form>
    </Box>
  )
}

export default AddressForm