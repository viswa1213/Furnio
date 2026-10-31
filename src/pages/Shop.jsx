import Navbar from "../components/Navbar"
import CoverImg from "../components/CoverImg";
import FilterComp from "../components/FilterComp";
import ProductCard from "../components/ProductCard";
import Footer from "../components/Footer";
import Banner from "../components/Banner";
import Product from "../Data/product.json";
import { useState } from "react";
import imgMap from "../Data/imageMap";
import { Link } from "react-router-dom";
function Shop(){
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
    return(
        <>
        <Navbar/>
        <CoverImg/>
        <FilterComp itemsPerPage = {itemsPerPage} setItemsPerPage = {setItemsPerPage} startIndex = {startIndex} endIndex = {startIndex+itemsPerPage} totalProduct={Product.length}/>
        <div className="grid grid-cols-4 place-items-center p-10 gap-[10px]">
            {visibleProduct.map((product) => (
               <Link to={`/product/${product.productId}`}>
               <ProductCard
            pBadgeContent={product.productBadgeContent}
            pBadgeType={product.productBadgeType}
            pImg={imgMap[product.productImg]}
            pAmount={product.productAmount}
            pName={product.productName}
            pOrignalAmount={product.ProductOrignalAmount}
            pSubContent={product.productSubContent}
          />
               </Link>
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
        </>
    )
}
export default Shop;