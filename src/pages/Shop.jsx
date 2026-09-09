import Navbar from "../components/Navbar"
import CoverImg from "../components/CoverImg";
import { Grid2X2, Rows3, SlidersHorizontal } from "lucide-react";
import fourDots from "../assets/fourDots.png";
import twoLines from "../assets/twoLines.png";
import FilterComp from "../components/FilterComp";
import ProductCard from "../components/ProductCard";
import Grifo from "../assets/Grifo.png";
import Syltherine from "../assets/Syltherine.png";
import Leviosa from "../assets/Leviosa.png";
import Lolito from "../assets/Lolito.png";
import Respira from "../assets/Respira.png";
import Muggo from "../assets/Muggo.png";
import Pingky from "../assets/Pingky.png";
import Potty from "../assets/Potty.png";
import trophy from "../assets/trophy.png";
import guarantee from "../assets/guarantee.png";
import shipping from "../assets/shipping.png";
import customersupport from "../assets/customer-support.png";
import Footer from "../components/Footer";
function Shop(){
    return(
        <>
        <Navbar/>
        <CoverImg/>
        <FilterComp/>
        <div className="grid grid-cols-4 place-items-center p-10 gap-[10px]">
             <ProductCard
            pBadgeContent={"30%"}
            pBadgeType={"discount"}
            pImg={Syltherine}
            pAmount={"Rp 2.500.000"}
            pContent={"Syltherine"}
            pOrignalAmount={"Rp 3.500.000"}
            pSubContent={"Stylish cafe chair"}
          />
          <ProductCard
            pBadgeContent={""}
            pBadgeType={""}
            pImg={Leviosa}
            pAmount={"Rp 2.500.000"}
            pContent={"Leviosa"}
            pOrignalAmount={""}
            pSubContent={"Stylish cafe chair"}
          />
          <ProductCard
            pBadgeContent={"50%"}
            pBadgeType={"discount"}
            pImg={Lolito}
            pAmount={"Rp 7.000.000"}
            pContent={"Lolito"}
            pOrignalAmount={"Rp 14.000.000"}
            pSubContent={"Luxury big sofa"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Respira}
            pAmount={"Rp 500.000"}
            pContent={"Respira"}
            pOrignalAmount={""}
            pSubContent={"Outdoor bar table and stool"}
          />

          <ProductCard
            pBadgeContent={""}
            pBadgeType={""}
            pImg={Grifo}
            pAmount={"Rp 1.500.000"}
            pContent={"Griffo"}
            pOrignalAmount={""}
            pSubContent={"Night lamp"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Muggo}
            pAmount={"Rp 150.000"}
            pContent={"Muggo"}
            pOrignalAmount={""}
            pSubContent={"Small mug"}
          />
          <ProductCard
            pBadgeContent={"50%"}
            pBadgeType={"discount"}
            pImg={Pingky}
            pAmount={"Rp 7.000.000"}
            pContent={"Pingky"}
            pOrignalAmount={"Rp 14.000.000"}
            pSubContent={"Cute bed set"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Potty}
            pAmount={"Rp 500.000"}
            pContent={"Potty"}
            pOrignalAmount={""}
            pSubContent={"Minimalist flower pot"}
          />
        <ProductCard
            pBadgeContent={"30%"}
            pBadgeType={"discount"}
            pImg={Syltherine}
            pAmount={"Rp 2.500.000"}
            pContent={"Syltherine"}
            pOrignalAmount={"Rp 3.500.000"}
            pSubContent={"Stylish cafe chair"}
          />
          <ProductCard
            pBadgeContent={""}
            pBadgeType={""}
            pImg={Leviosa}
            pAmount={"Rp 2.500.000"}
            pContent={"Leviosa"}
            pOrignalAmount={""}
            pSubContent={"Stylish cafe chair"}
          />
          <ProductCard
            pBadgeContent={"50%"}
            pBadgeType={"discount"}
            pImg={Lolito}
            pAmount={"Rp 7.000.000"}
            pContent={"Lolito"}
            pOrignalAmount={"Rp 14.000.000"}
            pSubContent={"Luxury big sofa"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Respira}
            pAmount={"Rp 500.000"}
            pContent={"Respira"}
            pOrignalAmount={""}
            pSubContent={"Outdoor bar table and stool"}
          />

          <ProductCard
            pBadgeContent={""}
            pBadgeType={""}
            pImg={Grifo}
            pAmount={"Rp 1.500.000"}
            pContent={"Griffo"}
            pOrignalAmount={""}
            pSubContent={"Night lamp"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Muggo}
            pAmount={"Rp 150.000"}
            pContent={"Muggo"}
            pOrignalAmount={""}
            pSubContent={"Small mug"}
          />
          <ProductCard
            pBadgeContent={"50%"}
            pBadgeType={"discount"}
            pImg={Pingky}
            pAmount={"Rp 7.000.000"}
            pContent={"Pingky"}
            pOrignalAmount={"Rp 14.000.000"}
            pSubContent={"Cute bed set"}
          />
          <ProductCard
            pBadgeContent={"New"}
            pBadgeType={"new"}
            pImg={Potty}
            pAmount={"Rp 500.000"}
            pContent={"Potty"}
            pOrignalAmount={""}
            pSubContent={"Minimalist flower pot"}
          />
        </div>
       <div className="flex flex-row justify-center items-center gap-[10px]">
         <div className="h-[60px] w-[60px] bg-[#B88E2F] rounded-2xl text-white flex justify-center items-center">1</div>
        <div className="h-[60px] w-[60px] bg-[#F9F1E7] rounded-2xl text-black flex justify-center items-center">2</div>
        <div className="h-[60px] w-[60px] bg-[#F9F1E7] rounded-2xl text-black flex justify-center items-center">3</div>
        <div className="h-[60px] w-[100px] bg-[#F9F1E7] rounded-2xl text-black flex justify-center items-center">Next</div>
       </div>


       <div className="h-[270px] w-full bg-[#FAF3EA] flex flex-row justify-center items-center gap-[40px] mt-10">
            <div className="flex flex-row items-center justify-center">
              <img src={trophy} alt="" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-[25px] font-poppins font-bold text-[#242424]">High Quality
                </div>
                <div className="text-[20px] font-poppins font-medium text-[#898989]"> crafted from top materials</div>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <img src={guarantee} alt="" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-[25px] font-poppins font-bold text-[#242424]">Warranty Protection
                </div>
                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Over 2 years</div>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <img src={shipping} alt="" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-[25px] font-poppins font-bold text-[#242424]">Free Shipping
                </div>
                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Order over 150 $</div>
              </div>
            </div>

            <div className="flex flex-row items-center">
              <img src={customersupport} alt="" />
              <div className="flex flex-col justify-center items-start">
                <div className="text-[25px] font-poppins font-bold text-[#242424]">24 / 7 Support
                </div>
                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Dedicated support</div>
              </div>
            </div>
       </div>
       
        <section>
              <Footer/>
           </section>
        </>
    )
}
export default Shop;