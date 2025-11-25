import Cart from "@/customers/components/Cart/Cart";
import Checkout from "@/customers/components/Checkout/Checkout";
import Footer from "@/customers/components/Footer/Footer";
import Navigation from "@/customers/components/Navigation/Navigation";
import Order from "@/customers/components/Order/Order";
import OrderDetails from "@/customers/components/Order/OrderDetails";
import Product from "@/customers/components/Product/Product";
import ProductDetails from "@/customers/components/ProductDetails/ProductDetails";
import HomePage from "@/customers/pages/HomePage/HomePage";
import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
type Props = {};
const CustomerRouters: React.FC<Props> = () => {
  return (

        <BrowserRouter>
      <div>
        <Navigation />
      </div>
      <Route>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/cart" element={<Cart />}></Route>
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product/>} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/chekout" element = {<Checkout/>} /> 
        <Route path="/account/order" element = {<Order/>} />
        <Route path="/account/order/:orderId" element = {<OrderDetails/>} /> 
        
      </Route>
      <div>
        <Footer />
      </div>
   </BrowserRouter>
  );
};

export default CustomerRouters;
