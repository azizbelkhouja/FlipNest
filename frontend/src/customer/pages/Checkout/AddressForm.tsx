import { Box, Button, Grid2, TextField } from '@mui/material'
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
    <Box sx={{max:"auto"}}>
        <p className='text-xl font-bold text-center pb-5'>Contact Details</p>
        <form>
            <Grid2 container spacing={8}>
                
                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="name"
                    label="Full Name"
                    variant="outlined"
                    value={formik.values.name}
                    onChange={formik.handleChange}
                    error={formik.touched.name && Boolean(formik.errors.name)}
                    helperText={formik.touched.name && formik.errors.name}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="mobile"
                    label="Mobile Number"
                    variant="outlined"
                    value={formik.values.mobile}
                    onChange={formik.handleChange}
                    error={formik.touched.mobile && Boolean(formik.errors.mobile)}
                    helperText={formik.touched.mobile && formik.errors.mobile}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="pinCode"
                    label="Pin Code"
                    variant="outlined"
                    value={formik.values.pinCode}
                    onChange={formik.handleChange}
                    error={formik.touched.pinCode && Boolean(formik.errors.pinCode)}
                    helperText={formik.touched.pinCode && formik.errors.pinCode}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="address"
                    label="Address"
                    variant="outlined"
                    value={formik.values.address}
                    onChange={formik.handleChange}
                    error={formik.touched.address && Boolean(formik.errors.address)}
                    helperText={formik.touched.address && formik.errors.address}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="city"
                    label="City"
                    variant="outlined"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    error={formik.touched.city && Boolean(formik.errors.city)}
                    helperText={formik.touched.city && formik.errors.city}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="state"
                    label="State"
                    variant="outlined"
                    value={formik.values.state}
                    onChange={formik.handleChange}
                    error={formik.touched.state && Boolean(formik.errors.state)}
                    helperText={formik.touched.state && formik.errors.state}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <TextField
                    fullWidth
                    name="locality"
                    label="Locality"
                    variant="outlined"
                    value={formik.values.locality}
                    onChange={formik.handleChange}
                    error={formik.touched.locality && Boolean(formik.errors.locality)}
                    helperText={formik.touched.locality && formik.errors.locality}
                    />
                </Grid2>

                <Grid2 size={{xs:12}}>
                    <Button type="submit" variant="contained" color="primary" fullWidth>
                    Submit
                    </Button>
                </Grid2>
                
            </Grid2>
        </form>
    </Box>
  )
}

export default AddressForm