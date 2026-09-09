import "./App.css";
import Home from "./pages/Home";
import Shop from "./pages/Shop";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ScrollToTop from "./components/ScroolToTop";
import Singleproduct from "./pages/SingleProduct";
function App() {
  return (
    <>
      <BrowserRouter>
       <ScrollToTop/>
        <Routes>
          <Route path="/" element={<Home/>}></Route>
          <Route path="/shop" element={<Shop/>}></Route>
          <Route path="/singleProduct" element={<Singleproduct/>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
