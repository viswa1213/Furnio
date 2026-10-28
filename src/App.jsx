import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";
import Singleproduct from "./pages/SingleProduct";
import Contact  from "./pages/Contact";
import Checkout from "./pages/Checkout";
import Cart from "./pages/Cart";
function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/contact" element={<Contact/>}></Route>
          <Route path="/cart" element={<Cart/>}></Route>
          <Route path="/checkout" element={<Checkout/>}></Route>
          <Route path="/singleProduct" element={<Singleproduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
