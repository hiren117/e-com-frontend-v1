import { Grid } from '@mui/material';
import React from 'react';
import Achivment from './Achivment';
import MonthlyOverview from './MonthlyOverview';
type Props = {

};
const Dashboard1:React.FC<Props> = () => {
  return (
    <div className='p-5'>
      <Grid container spacing={2} >
        <Grid item xs={12} md={4} >
          <Achivment/>
        </Grid>
        <Grid item xs={12} md={8} >
          <MonthlyOverview/>
        </Grid>

      </Grid>
    </div>
  );
};

export default Dashboard1;