import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";
import Singleproduct from "./pages/SingleProduct";
import Contact  from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
import { Analytics } from "@vercel/analytics/react"
import { useState } from "react";
function App() {

  const [cart,setCart] = useState([]);
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home cart={cart} setCart= {setCart}/>}></Route>
          <Route path="/shop" element={<Shop cart={cart} setCart= {setCart}/>}></Route>
          <Route path="/product/:id" element={<Singleproduct/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart cart={cart} setCart={setCart}/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
        </Routes>
      </BrowserRouter>
      <Analytics/>
    </>
  );
}

export default App;
