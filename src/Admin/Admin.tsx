import { useTheme } from '@mui/material/styles';
import { Box, CssBaseline, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, useMediaQuery } from '@mui/material';
import React from 'react';
import { Route, Routes, useNavigate } from 'react-router-dom';
import { Anchor, Inbox } from '@mui/icons-material';
import EmailIcon from '@mui/icons-material/Email';
import InboxIcon from '@mui/icons-material/Inbox'; 
import DashboardIcon from '@mui/icons-material/Dashboard';
import AccountCirlcleIcon from '@mui/icons-material/AccountCircle';
import Dashboard1 from './components/Dashboard1';
import ProductsTable1 from './components/ProductsTable1';
import CustomersTable1 from './components/CustomersTable1';
import OrdersTable1 from './components/OrdersTable1';
import CreateProductForm1 from './components/CreateProductForm1';

type Props = { 

};
const menu = [
  {name: "Dashboard" , path: "/admin",icon: <DashboardIcon />},
  {name: "Products" , path: "/admin/products",icon: <InboxIcon />},
  {name: "Customers" , path: "/admin/customers",icon: <EmailIcon />},
  {name: "Orders" , path: "/admin/orders",icon: <InboxIcon />},
  {name: "AddProduct" , path: "/admin/product/create",icon: <EmailIcon />},

]
const Admin:React.FC<Props> = () => {
  const theme = useTheme();
  const isLargeScreen = useMediaQuery(theme.breakpoints.up('lg')); // Adjust the breakpoint as needed
  const [sidebarvisible, setSidebarVisible] = React.useState(false);
  const navigate = useNavigate(); 

  const drawer = (
    <Box className="shadow-lg"
    sx={{
      overflow: "auto",
      display: "flex",
      flexDirection: "column",
      justifyContent: "space-between",
      height: "100%",
    }}
    >
      {/* {isLargeScreen && <Toolbar />} */}
      <List>
        {menu.map((item,index) =><ListItem key = {item.name} disablePadding onClick={()=> navigate(item.path)}>
          <ListItemButton>
            <ListItemIcon>
              {item.icon}
            </ListItemIcon>
            <ListItemText primary={item.name} />
          </ListItemButton>
        </ListItem>  )}
      </List>

      <List>
        {<ListItem  disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <AccountCirlcleIcon />
            </ListItemIcon>
            <ListItemText primary={"Account"} />
          </ListItemButton>
        </ListItem>  }
      </List>

    </Box>
      )


  return (
    <div> 
      <Box sx={{display: `${isLargeScreen} ? "flex" : "block"`}}>
        <CssBaseline />
        <Drawer
        variant='permanent'
        >
          {drawer}
        </Drawer>
        <Box>
            <Routes>
              <Route path = '/' element = {<Dashboard1 />} > </Route>
              <Route path = '/products' element={ <ProductsTable1/> } />
              <Route path = '/customers' element= {<CustomersTable1 />} />
              <Route path = '/orders' element= {<OrdersTable1/>} />
              <Route path = '/product/create' element= { <CreateProductForm1/> } />


            </Routes>

        </Box>
        

      </Box>
    </div>
    
  );
};

export default Admin;