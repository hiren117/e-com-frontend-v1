import { AccountCircleOutlined, CurrencyRupee, ProductionQuantityLimitsRounded, TrendingUp } from '@mui/icons-material';
import { Avatar, Box, Card, CardContent, CardHeader, Grid, IconButton, Typography } from '@mui/material';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import React from 'react';
type Props = {

};

const salesData = [
  {
    stats: '117k',
    title: 'Sales',
    color: 'primary',
    icon: <TrendingUp sx={{fontSize: '1.5rem'  }} />
  },
  {
    stats: '117k',
    title: 'Customers',
    color: 'success',
    icon: <AccountCircleOutlined sx={{fontSize: '1.5rem'  }} />
  },
  {
    stats: '117k',
    title: 'Products',
    color: 'warning',
    icon: <ProductionQuantityLimitsRounded sx={{fontSize: '1.5rem'  }} />
  },
  {
    stats: '117k',
    title: 'Revenue',
    color: 'info',
    icon: <CurrencyRupee sx={{fontSize: '1.5rem'  }} />
  },
    
];

const renderStats = () => {
    return salesData.map((item,index) => (
        <Grid key = {index} item xs={12} sm={3}>
            <Box sx={{
                display: 'flex',
                alignItems: 'center'
            }}>
                <Avatar variant='rounded' sx ={{
                    mr:3,
                    width: 44,
                    height: 44,
                    boxShadow:3,
                    bgcolor: `${item.color}.main`,
                    color: 'white'
                }}>
                    {item.icon}

                </Avatar>
                <Box>
                   <Typography variant='h6' fontWeight={600} >{item.stats}</Typography>
                   <Typography variant='body2'>{item.title}</Typography>
                </Box> 

            </Box>
            
        </Grid>
    ))
}
const MonthlyOverview:React.FC<Props> = () => {
  return (
    <Card className='text-left' sx = {{bgcolor: '#242B2E', color: 'white' }} >
        <CardHeader title="Monthly Overview" 
        action = {
            <IconButton size='small'>
                <MoreVertIcon className='text-white' />

            </IconButton>
        } 
        subheader={
            <Typography variant='body2' color='text.secondary'>
                <Box color='white' component = "span" sx = {{fontWeight: 600}} >
                    Total 117% growth this month.
                </Box>
                
            </Typography>
        }
        titleTypographyProps={{
            sx:{
                mb:2.5, 
                lineHeight: '2rem !important',
                letterSpacing: '.15px !important'
            }
        }}
        />
        <CardContent sx = {{pt:theme=>`${theme.spacing(3)} !important`}}>
            <Grid container spacing={[5,0]}>
                {renderStats()}
            </Grid>
        </CardContent>

    </Card>
  );
};

export default MonthlyOverview;