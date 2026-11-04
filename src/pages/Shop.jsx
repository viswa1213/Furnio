import Navbar from "../components/Navbar"
import CoverImg from "../components/CoverImg";
import FilterComp from "../components/FilterComp";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Product from "../Data/product.json";
import { useState } from "react";
import imgMap from "../Data/imageMap";
import { Link, useNavigate } from "react-router-dom";
import successIcon from "../assets/successIcon.png";
import closeIcon from "../assets/closeIcon.png";
function Shop({cart,setCart}){
  const [currentPage , setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(16);
  const startIndex = (currentPage - 1) * itemsPerPage;

  const totalPages = Math.ceil(Product.length / itemsPerPage)
  const visibleProduct = Product.slice(
    startIndex,
    startIndex + itemsPerPage
  )
  const startPage = Math.min(
    Math.max(1,currentPage - 1),
    Math.max(1, totalPages - 2)
  )
  const visibleButton = Array.from(
    {length : Math.min(3,totalPages)},
    (_,index) => startPage + index
  )
  const navigate = useNavigate();
  const [isCartClicked ,setIsCartClicked] = useState(false);
    return(
        <>
       <Navbar onCartClick={() => navigate("/cart")}/>
        <CoverImg/>
        <FilterComp itemsPerPage = {itemsPerPage} setItemsPerPage = {setItemsPerPage} startIndex = {startIndex+1} endIndex = {startIndex+itemsPerPage} totalProduct={Product.length}/>
        <div className="grid grid-cols-4 place-items-center p-10 gap-[10px]">
            {visibleProduct.map((product) => (
               <ProductCard
            pBadgeContent={product.productBadgeContent}
            pBadgeType={product.productBadgeType}
            pImg={imgMap[product.productImg]}
            pAmount={product.productAmount}
            pName={product.productName}
            pOrignalAmount={product.ProductOrignalAmount}
            pSubContent={product.productSubContent}
            productId = {product.productId}
            isCartClicked = {isCartClicked}
            setIsCartClicked = {setIsCartClicked}
            cart = {cart}
            setCart = {setCart}
          />
            ))}
        </div>
       <div className="flex flex-row justify-center items-center gap-[10px]">
        <button disabled={currentPage == 1} className={`h-[60px] w-[100px] bg-[#F9F1E7] rounded-2xl text-blac hover:cursor-grab ${currentPage == 1 ? "opacity-0 hover:cursor-alias" : ""}`} onClick={() =>setCurrentPage(currentPage - 1)}>Previous</button>
        {visibleButton.map((page) => (
          <button onClick={() => setCurrentPage(page)} key={page} className={`h-[60px] w-[60px] rounded-2xl hover:cursor-grab ${currentPage === page ? "bg-[#B88E2F] text-white" : "border-2 border-[#B88E2F] text-black"}`}>{page}</button>
        ))}
        <button disabled={currentPage === totalPages} onClick={() => setCurrentPage((page) => page+1)} className={`h-[60px] w-[100px] bg-[#F9F1E7] rounded-2xl text-black flex justify-center items-center hover:cursor-grab ${currentPage === totalPages ? "opacity-0 ": ""}`}>Next</button>
       </div> 


      <Banner/>
       
        <section>
              <Footer/>
           </section>

           {isCartClicked && (
            <div className= "fixed inset-0 flex items-center justify-center z-50">
              <div className="h-[130px] w-[500px] bg-white rounded-xl flex justify-center items-center relative">
                <div className="font-poppins font-bold text-[20px]">Items Added Successfully</div>
                <img className="h-[50px] w-[50px]" src={successIcon} alt="" />
                <button onClick={() => setIsCartClicked(false)}><img className="absolute h-[40px] w-[40px] right-0 top-0" src={closeIcon} alt="" /></button>
              </div>
            </div>
           )}
        </>
    )
}
export default Shop;