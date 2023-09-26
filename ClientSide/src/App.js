import "./App.css";
import { useState, useEffect } from "react";
import PrivacyPolicies from "./components/pages/static/PrivacyPolicies";
import Layout from "./components/layout/Layout";
import { Route, Routes } from "react-router-dom";
import Home from "./components/pages/home/Home";
import Login from "./components/Auth/Login";
import Cart from "./components/pages/cart/Cart";
import Contact from "./components/pages/contact/Contact";
import Register from "./components/Auth/Register";
import Shop from "./components/pages/shop/Shop";
import Profile from "./components/pages/profile/Profile";
import ForgetPass from "./components/Auth/ForgetPass";
import Address from "./components/pages/address/Address";
import ExchangeRefund from "./components/pages/static/ExchangeRefund";
import ShippingPolicy from "./components/pages/static/ShippingPolicy";
import SizeChart from "./components/pages/static/SizeChart";
import TermsOfServices from "./components/pages/static/TermsOfServices";
import ProductsList from "./components/Products/ProductsList/ProductsList";
import ProductDetails from "./components/Products/ProductDetails";
import NotFound from "./components/pages/NotFound";
import Admin from "./components/Admin/Admin";
import EditForm from "./components/Admin/EditForm";
import AddForm from "./components/Admin/AddForm";
import ViewOrders from "./components/Admin/ViewOrders";
import ProductDisplay from "./components/pages/cart/ProductDisplay";
import Message from "./components/pages/cart/Message";
import Success from "./components/pages/cart/Success";
import Cancel from "./components/pages/cart/Cancel";
import Search from "./components/Products/Search";
function App() {
  const isAdmin = localStorage.getItem("role") === "admin";
  
  const [message, setMessage] = useState("");
  useEffect(() => {
    // Check to see if this is a redirect back from Checkout
    const query = new URLSearchParams(window.location.search);

    if (query.get("success")) {
      setMessage("Order placed! You will receive an email confirmation.");
    }

    if (query.get("error")) {
      setMessage(
        "Order canceled -- continue to shop around and checkout when you're ready."
      );
    }
  }, []);
  console.log(message);

  return (
    <Layout>
      <Routes>
        <Route path="/checkout">
          <Route index element={<ProductDisplay />} />
        </Route>

        <Route path="/search" element={<Search />} />
        <Route path="/orders/success" element={<Success />} />
        <Route path="/orders/cancel" element={<Message message={message} />} />
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route path="/cart" element={<Cart />} />
        <Route path="/profile" element={<Profile />} />

        <Route path="/contact" element={<Contact />} />
        <Route path="/products" element={<ProductsList />} />
        <Route path="/forget" element={<ForgetPass />} />
        <Route path="/address" element={<Address />} />
        <Route path="/refund" element={<ExchangeRefund />} />
        <Route path="/privacyPolicy" element={<PrivacyPolicies />} />
        <Route path="/shipping" element={<ShippingPolicy />} />
        <Route path="/sizeChart" element={<SizeChart />} />
        <Route path="/termsOfServices" element={<TermsOfServices />} />
        <Route path="/Admin" element={isAdmin ? <Admin /> : <NotFound />} />
        <Route path="/adminEdit" element={<EditForm />} />
        <Route path="/adminAdd" element={<AddForm />} />
        <Route path="/allOrders" element={<ViewOrders />} />
        <Route path="/products">
          <Route index element={<ProductsList />} />
          <Route path="details/:id" element={<ProductDetails />} />
        </Route>
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Layout>
  );
}

export default App;
