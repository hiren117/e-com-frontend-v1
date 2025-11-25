import './App.css'
import Navigation from '@/customers/components/Navigation/Navigation'
import HomePage from './customers/pages/HomePage/HomePage'
import Footer from '@/customers/components/Footer/Footer'
import Product from '@/customers/components/Product/Product'
import ProductDetails from './customers/components/ProductDetails/ProductDetails'
import Cart from './customers/components/Cart/Cart'
import Checkout from './customers/components/Checkout/Checkout'
import Order from './customers/components/Order/Order'
import OrderDetails from './customers/components/Order/OrderDetails'
import { Routes, Route } from 'react-router-dom'

function App() {
  return (
    <>
      {/* Navbar always visible */}
      <Navigation />

      {/* All routes here */}
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/orders" element={<Order />} />
        <Route path="/orders/:orderId" element={<OrderDetails />} />

        {/* 👇 This is the important dynamic route */}
        <Route
          path="/:levelOne/:levelTwo/:levelThree"
          element={<Product />}
        />
      </Routes>

      {/* Footer always visible */}
      <Footer />
    </>
  )
}

export default App
