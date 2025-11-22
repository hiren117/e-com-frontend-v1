import Grid from '@mui/material/Grid';
import React from 'react';
import AddressCard from '../AddressCard/AddressCard';
import { Button, TextField } from '@mui/material';
import Box from '@mui/material/Box';
type Props = {

};
const DelivaryAddressForm: React.FC<Props> = () => {
    const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        console.log('address');

        const formData = new FormData(e.currentTarget);
        const form_Data = {
            firstName: formData.get("firstName") as string,
            middleName: formData.get("middleName") as string,
            lastName: formData.get("lastName") as string,
            address: formData.get("address") as string,
            city: formData.get("city") as string,
            state: formData.get("state") as string,
            zip: formData.get("zip") as string,
            phoneNumber: formData.get("phoneNumber") as string
        };
        console.log("address", form_Data);
    }
    return (
        <div>
            <Grid className='' container spacing={4} >
                {/* Delivary Here */}
                <Grid xs={12} lg={5} className='border-gray-950 rounded-e-md shadow-md h-[30.5rem] overflow-y-scroll'>
                    <div className='p-5 py-7 border-b cursor-pointer'>
                        <AddressCard />
                        <Button size='large' variant='contained' sx={{ mt: 3, bgcolor: "#9155fd" }}>
                            Delivary Here
                        </Button>
                    </div>
                </Grid>
                {/*  */}
                <Grid className='' item xs={12} lg={7}>
                    <Box className='border-gray-950 rounded-s-md shadow-md p-5'>
                        <form onSubmit={handleSubmit}>
                            <Grid className='' container spacing={3}>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="firstName"
                                        name="firstName"
                                        label="Surname/First Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="middleName"
                                        name="middleName"
                                        label="Middle Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={4}>
                                    <TextField
                                        required
                                        id="lastName"
                                        name="lastName"
                                        label="Father's Name/Last Name"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        required
                                        id="address"
                                        name="address"
                                        label="Address"
                                        fullWidth
                                        autoComplete="address"
                                        multiline
                                        rows={4}
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="city"
                                        name="city"
                                        label="City"
                                        fullWidth
                                        autoComplete="given-nam"
                                    />
                                </Grid><Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="state"
                                        name="state"
                                        label="State"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>

                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="zip"
                                        name="zip"
                                        label="Zip/ PIN Code"
                                        fullWidth
                                        autoComplete="shipping postal-code"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        required
                                        id="phoneNumber"
                                        name="phoneNumber"
                                        label="Phone Number"
                                        fullWidth
                                        autoComplete="given-name"
                                    />
                                </Grid>
                                
                                <Grid className='text-left' item xs={12} sm={6}>
                                    <Button size='large'
                                        variant='contained'
                                        type='submit'
                                        sx={{ mt: 3, bgcolor: "#9155fd" }}>
                                        Delivary Here
                                    </Button>

                                </Grid>


                            </Grid>
                        </form>

                    </Box>
                </Grid>
            </Grid>
        </div>
    );
};

export default DelivaryAddressForm;