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
import { Route, Routes } from "react-router-dom";
type Props = {};
const CustomerRouters: React.FC<Props> = () => {
  return (
    <>
      <div>
        <Navigation />
      </div>
      <Routes>

        <Route path="/" element={<HomePage />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/product/:productId" element={<ProductDetails />} />
        <Route path="/account/orders" element={<Order />} />
        <Route path="/account/orders/:orderId" element={<OrderDetails />} />
        {/*} 👇 This is the important dynamic route */}
        <Route path="/:levelOne/:levelTwo/:levelThree" element={<Product />} />

      </Routes>
      <div>
        <Footer />
      </div>
      </>
  );
};

export default CustomerRouters;
