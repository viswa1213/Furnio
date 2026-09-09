import Navbar from "../components/Navbar";
import homebg from "../assets/homebg.jpg";
import HomeCard from "../components/HomeCard";
import p1 from "../assets/p1.png";
import p2 from "../assets/p2.png";
import p3 from "../assets/p3.png";
import ProductShowCaseCard from "../components/ProductShowCaseCard";
import ProductCard from "../components/ProductCard";
import Grifo from "../assets/Grifo.png";
import Syltherine from "../assets/Syltherine.png";
import Leviosa from "../assets/Leviosa.png";
import Lolito from "../assets/Lolito.png";
import Respira from "../assets/Respira.png";
import Muggo from "../assets/Muggo.png";
import Pingky from "../assets/Pingky.png";
import Potty from "../assets/Potty.png";
import caurosel1 from "../assets/caurosel1.png";
import caurosel3 from "../assets/caurosel3.png";
import caurosel2 from "../assets/caurosel2.png";
import rightArrow from "../assets/Right.png";
import Caurosel from "../components/Caurosel";
import p1copy from "../assets/p1copy.png";
import p2copy from "../assets/p2copy.png";
import p3copy from "../assets/p3copy.png";
import p4copy from "../assets/p4.png";
import p5copy from "../assets/p5.png";
import p6copy from "../assets/p6.png";
import p7copy from "../assets/p7.png";
import p8copy from "../assets/p8.png";
import p9copy from "../assets/p9.png";
import Fotter from "../components/Footer";
import {Link} from "react-router-dom";
function Home() {

  const Images = {
    caurosel1,
    caurosel2,
    caurosel3
  }
  return (
    <>
      <div className="min-h-screen w-full flex flex-col">
        <Navbar />
        <div
          className=" flex-1 h-[500px] w-full bg-amber-200 bg-cover bg-center flex items-end justify-end p-30 pt-20"
          style={{ backgroundImage: `url(${homebg})` }}
        >
          <div className="w-[643px] h-[433px] rounded-[10px] bg-[#FFF3E3] flex items-center pl-[30px]">
            <HomeCard />
          </div>
        </div>
      </div>

      <div className="min-h-screen w-full pt-20 flex flex-col gap-[50px]  ">
        <div className="flex flex-col items-center">
          <div className="text-[32px] font-poppins font-bold">
            Browse The Range
          </div>
          <div className="text-[#666666]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </div>
        </div>

        <div className=" flex flex-row justify-around">
          <ProductShowCaseCard pImg={p1} pContent={"Bedroom"} />
          <ProductShowCaseCard pImg={p2} pContent={"Livivng"} />
          <ProductShowCaseCard pImg={p3} pContent={"Dining"} />
        </div>
      </div>

      <section className="min-h-screen w-full flex flex-col items-center gap-10 mb-20">
        <div className="text-[40px] font-bold font-poppins leading-[120px]">
          Our Products
        </div>
        <div className="grid grid-cols-4 gap-10">
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

        <button className="w-[245px] h-[48px] bg-white text-[#B88E2F] border-[#B88E2F] border-2 hover:cursor-grab">
          <Link to="/shop">Show More</Link>
        </button>
      </section>

      <section className="min-w-screen h-[670px] bg-[#FCF8F3] flex flex-row justify-center items-center gap-10">
        <div className="flex flex-col w-[442px] justify-center items-start gap-10">
          <div>
            <div className="text-[40px] font-poppins font-bold">
              50+ Beautiful rooms inspiration
            </div>
            <div className="text-[16px] font-poppins font-medium text-[#616161]">
              Our designer already made a lot of beautiful prototipe of rooms
              that inspire you
            </div>
          </div>
          <button className="w-[176px] h-[48px] bg-[#B88E2F] text-white">
            Explore More
          </button>
        </div>
        <Caurosel/>
      </section>

      <section className="min-h-screen w-full flex flex-col mt-20  items-center">
        <div className="flex flex-col items-center">
          <div className="text-[20px] font-poppins font-semibold">Share your setup with</div>
          <div className="text-[40px] font-bold font-poppins">#FuniroFurniture</div>
        </div>
        <div className="relative flex-1 w-full">

          <img src={p1copy} alt="" className="absolute left-0" />

          <img src={p2copy} alt="" className="absolute left-30 top-17 transition-all duration-300 hover:scale-110 hover:z-10" />
          <img src={p3copy} alt="" className="absolute left-0 bottom-0 transition-all duration-300 hover:scale-110 hover:z-10" />
           <img src={p4copy} alt="" className="absolute left-56 bottom-20 transition-all duration-300 hover:scale-110 hover:z-10" />
            <img src={p5copy} alt="" className="absolute left-150 bottom-50 transition-all duration-300 hover:scale-110 hover:z-10" />
            <img src={p6copy} alt="" className="absolute right-65 bottom-75 transition-all duration-300 hover:scale-110 hover:z-10" />
             <img src={p7copy} alt="" className="absolute right-92 bottom-10 transition-all duration-300 hover:scale-110 hover:z-10" />
              <img src={p8copy} alt="" className="absolute -right-5 bottom-75 transition-all duration-300 hover:scale-110 hover:z-10" />
               <img src={p9copy} alt="" className="absolute right-20 bottom-20 transition-all duration-300 hover:scale-110 hover:z-10" />
        </div>
      </section>

      <section className="mt-20" >
          <Fotter/>
      </section>
    </>
  );
}

export default Home;
