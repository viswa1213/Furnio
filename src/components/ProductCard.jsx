import { useState } from "react";
import ProductBadge from "./ProductBadge";
import Share from "../assets/gridicons_share.png";
import compare from "../assets/compare.png";
import heart from "../assets/Heart.png";
import { useNavigate } from "react-router-dom";
function ProductCard({
  pImg,
  pBadgeContent,
  pBadgeType,
  pContent,
  pSubContent,
  pAmount,
  pOrignalAmount,
}) {
  const [isHover, setisHover] = useState(false);
  const navigate = useNavigate();
  return (
    <>
      <div
        className={`w-[285px] h-[456px] flex flex-col relative `}
        onMouseEnter={() => setisHover(true)}
        onMouseLeave={() => setisHover(false)}
        onClick={() => navigate("/singleProduct")}
      >
        <ProductBadge pContent={pBadgeContent} type={pBadgeType} />
        <img className="w-[285px] h-[301px]" src={pImg} alt="" />
        <div className=" w-[285px] h-[145px] flex flex-col p-[10px] items-start justify-center bg-[#F4F5F7] gap-[20px]">
          <div className="flex flex-col">
            <div className="text-[24px] font-poppins font-semibold">
              {pContent}
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
          <button className={`text-[#B88E2F] w-[202px] h-[48px] bg-white text-[16px] font-poppins font-semibold ${isHover ? "opacity-100" : ""}`}>
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
            <div className="flex flex-row justify-center items-center gap-[5px]">
              <img src={heart} alt="" />
              <div className="text-[16px] text-white">Like</div>
            </div>
          </div>
        </div>
      )}
      </div>
    </>
  );
}
export default ProductCard;
