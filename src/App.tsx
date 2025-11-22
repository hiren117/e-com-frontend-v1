import './App.css'
import Navigation from '@/customers/components/Navigation/Navigation'
import HomePage from './customers/pages/HomePage/HomePage'
import Footer from '@/customers/components/Footer/Footer';
import Product from '@/customers/components/Product/Product';
import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';
import { Check } from '@mui/icons-material';
import Checkout from './customers/components/Checkout/Checkout';
import Order from './customers/components/Order/Order';
import OrderDetails from './customers/components/Order/OrderDetails';

function App() {

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div> 
        {/* <Cart /> */}
        {/* <ProductDetails /> */}
        {/* <Product /> */}
        {/* <HomePage /> */} 
        {/* <Footer /> */}
        {/* <Checkout /> */}
        {/* <Order  /> */}
        <OrderDetails/>
      </div>
      <div>
        <Footer />
      </div>



    </>
  )
}

export default App
