import { Step, StepLabel, Stepper } from '@mui/material';
import React from 'react';
type Props = {
    activeStep: number //which type should i use and why ?
};
const steps = ["Placed", "Order Confirmed", "Shipped", "Out of Delivary", "Delivared"]
const OrderTraker: React.FC<Props> = ({ activeStep }) => {
    return (
        <div className='w-full '>
            <Stepper activeStep={activeStep-1} alternativeLabel>
                {steps.map((label, index) => <Step key={index}>
                    <StepLabel sx={{ color: "#9155fd", fontSize: "44px" }}>
                        {label}
                    </StepLabel>
                </Step>)}

            </Stepper>

        </div>
    );
};

export default OrderTraker;