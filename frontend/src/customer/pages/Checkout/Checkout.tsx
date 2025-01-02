import { Box, Button, FormControlLabel, Modal, Radio, RadioGroup, Typography } from '@mui/material'
import React from 'react'
import AddressCard from './AddressCard'
import AddressForm from './AddressForm';
import PricingCard from '../Cart/PricingCard';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 500,
    bgcolor: 'background.paper',
    boxShadow: 24,
    p: 4,
};

const paymentGatewayList = [
    {
        value:"PAYPAL",
        image:"https://w7.pngwing.com/pngs/89/683/png-transparent-paypal-logo-brand-pay-payment-money-pp-commercial-shopping-buy.png",
        label:""
    },
    {
        value:"STRIPE",
        image:"https://vikwp.com/images/plugins/stripe.png",
        label:""
    }
]
    
const Checkout = () => {

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

  return (
    <>
        <div className='pt-10 px-5 sm:px-10 md:px-44 lg:px-60 min-h-screen'>
            <div className="space-y-5 lg:space-y-0 lg:grid grid-cols-3 lg:gap-9">
                <div className="col-span-2 space-y-5">

                    <div className="flex justify-between items-center">
                        <h1 className="font-semibold">Select Shipping Address</h1>
                        <Button onClick={handleOpen}>Add New Address</Button>
                    </div>

                    <div className="text-xs font-medium space-y-5">
                        <p>Saved Addresses</p>
                        <div className="space-y-3">
                            {[1,1,1].map((item) => <AddressCard />)}
                        </div>
                    </div>

                    <div className="py-4 px-5 rounded-md border">
                        <Button onClick={handleOpen}>Add New Address</Button>
                    </div>

                </div>

                <div>
                    <div className='border rounded-md'>
                        <div className="">
                            <RadioGroup row aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group" className='flex justify-between pr-0'>
                                {
                                    paymentGatewayList.map((item) => <FormControlLabel className='border w-[45%]' value={item.value} control={<Radio />} label= {
                                        <img src={item.image} alt={item.label} className={`${item.value=="stripe"?"w-14":""} object-cover`} />
                                    }/>) 
                                }
                            </RadioGroup>
                        </div>

                        <PricingCard />

                        <div className="p-5">
                            <Button fullWidth variant='contained' sx={{py:"11px"}}>Checkout</Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
            <AddressForm />
        </Box>
        </Modal>
    
    </>


  )
}

export default Checkout