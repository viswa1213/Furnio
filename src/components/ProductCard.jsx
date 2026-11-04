import { useState } from "react";
import ProductBadge from "./ProductBadge";
import Share from "../assets/gridicons_share.png";
import compare from "../assets/compare.png";
import heart from "../assets/Heart.png";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import product from "../Data/product.json";
function ProductCard({
  pImg,
  pBadgeContent,
  pBadgeType,
  pName,
  pSubContent,
  pAmount,
  pOrignalAmount,
  productId,
  isCartClicked,
  setIsCartClicked,
  cart,
  setCart
}) {
  const [isHover, setisHover] = useState(false);
  const navigate = useNavigate();

 function isCartClicked(){
   setIsCartClicked(true)
   
   const productInCart = cart.find((product) => Number(product.productId) == Number(productId))
   if(productInCart){
      setCart((prevcart) => prevcart.map((item) => Number(item.productId) === Number(productId) ? {...item,productQuantity:Number(item.productQuantity)+1} : item))
   }
   else{
    const cartItem = {
      "productImg" : pImg,
      "productId" :productId,
      "productName" : pName,
      "productAmount" : pOrignalAmount,
      "productQuantity" : 1,
    }
      setCart((prevcart) => [...prevcart,cartItem])
   }
 }
  return (
    <>
      <div
        className={`w-[285px] h-[456px] flex flex-col relative `}
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
      >
        <ProductBadge pContent={pBadgeContent} type={pBadgeType} />
        <img className="w-[285px] h-[301px]" src={pImg} alt="" />
        <div className=" w-[285px] h-[145px] flex flex-col p-[10px] items-start justify-center bg-[#F4F5F7] gap-[20px]">
          <div className="flex flex-col">
            <div className="text-[24px] font-poppins font-semibold">
              {pName}
            </div>
            <div className="text-[16px] leading-[150%] text-[#898989]">
              {pSubContent}
            </div>
          </div>

          <div className="flex flex-row justify-center gap-[10px]">
            <div className="text-[20px] font-poppins font-semibold leading-[150%]">
              {pAmount}
            </div>
            <div className="text-[16px] font-poppins leading-[150%] text-[#B0B0B0] line-through">
              {pOrignalAmount}
            </div>
          </div>
        </div>

        {isHover &&(
        <div className="w-[285px] h-[446px] flex flex-col justify-center items-center absolute inset-0 bg-black/50 gap-10 ">
          <button onClick={isCartClicked} className={`text-[#B88E2F] w-[202px] h-[48px] bg-white text-[16px] font-poppins font-semibold hover:cursor-grab ${isHover ? "opacity-100" : ""}`}>
            Add to Cart 
          </button>
          <div className=" flex flex-row gap-10">
            <div className="flex flex-row justify-center items-center gap-[5x]">
              <img src={Share} alt="" />
              <div className="text-[16px] text-white"> Share</div>
            </div>
            <div className=" flex flex-row justify-center items-cente gap-[5px]">
              <img src={compare} alt="" />
              <div className="text-[16px] text-white">Compare</div>
            </div>
            <button><div className="flex flex-row justify-center items-center gap-[5px]">
              <img src={heart} alt="" />
              <div className="text-[16px] text-white">Like</div>
            </div></button>
          </div>
          <Link to = {`/product/${productId}`}><button className="bg-white w-[80px] h-[50px] text-[20px] text-[#B88E2F] rounded-xl hover:cursor-pointer font-poppins">View</button></Link>
        </div>
      )}
      </div>
    </>
  );
}
export default ProductCard;
