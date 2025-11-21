import './App.css'
import Navigation from '@/customers/components/Navigation/Navigation'
import HomePage from './customers/pages/HomePage/HomePage'
import Footer from '@/customers/components/Footer/Footer';
import Product from '@/customers/components/Product/Product';
import ProductDetails from './customers/components/ProductDetails/ProductDetails';
import Cart from './customers/components/Cart/Cart';

function App() {

  return (
    <>
      <div>
        <Navigation />
      </div>
      <div> 
        <Cart />
      </div>
      <div>
        <Footer />
      </div>



    </>
  )
}

export default App
