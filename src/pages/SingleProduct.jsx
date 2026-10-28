import Navbar from "../components/Navbar";
import SingleProductComp from "../components/SingleProductComp";
import sofa1 from "../assets/sofa1.png";
import sofa2 from "../assets/sofa2.png";
import Footer from "../components/Footer";
import closeCart from "../assets/closeCart.png";
import CartPopUp from "../components/CartPopUp";
import { useState } from "react";

function Singleproduct() {

  const [isCartOpen , setCartOpen] = useState(false);
  return (
    <div className={`relative ${isCartOpen ? "bg-transparent" : ""}`}>
      <Navbar onCartClick={() => setCartOpen(true)}/>
      <div className="h-[140px] w-full bg-[#F9F1E7] flex items-center p-10 gap-[20px]">
        <div className="flex flex-row gap-[10px]">
          <div className="text-[16px] text-[#9F9F9F]">Home</div>
          <div>{">"}</div>
        </div>
        <div className="flex flex-row gap-[10px]">
          <div className="text-[16px] text-[#9F9F9F]">Shop</div>
          <div>{">"}</div>
        </div>
        <div className="flex flex-row gap-[10px] justify-center items-center">
          <div className="h-[20px] w-[3px] bg-[#9F9F9F]"></div>
          <div>Asgaard sofa</div>
        </div>
      </div>

      <section className="min-h-screen w-full flex flex-col justify-center items-center">
            <SingleProductComp/>
      </section>
      <div className="w-full h-[2px] bg-[#9F9F9F]"></div>

      <section className="min-h-screen w-full flex flex-col p-10 mt-5 gap-[70px]">
            <div className="text-[24px] font-poppins flex flex-row justify-center items-center gap-[20px]">
              <div className="font-medium text-black">Description</div>
            <div className="text-[#9F9F9F]">Additional Information</div>
            <div className="text-[#9F9F9F]">Reviews [5]</div>
            </div>

            <div className="text-[#9F9F9F] font-poppins text-[16px] pl-20 pr-20">Embodying the raw, wayward spirit of rock ‘n’ roll, the Kilburn portable active stereo speaker takes the unmistakable look and sound of Marshall, unplugs the chords, and takes the show on the road.</div>

            <div className="text-[#9F9F9F] font-poppins text-[16px] pl-20 pr-20">Weighing in under 7 pounds, the Kilburn is a lightweight piece of vintage styled engineering. Setting the bar as one of the loudest speakers in its class, the Kilburn is a compact, stout-hearted hero with a well-balanced audio which boasts a clear midrange and extended highs for a sound that is both articulate and pronounced. The analogue knobs allow you to fine tune the controls to your personal preferences while the guitar-influenced leather strap enables easy and stylish travel.</div>

            <div className="flex flex-row justify-center items-center gap-[20px]">
              <img src={sofa2} alt="" />
              <img src={sofa1} alt="" />
            </div>
      </section>
      <Footer/>
      { isCartOpen &&
      <div
    className="fixed inset-0  bg-black/50"
    onClick={() => setIsCartOpen(false)}
  >
      <CartPopUp onClickCloseCart={() => setCartOpen(false)}/>
        </div>}
    </div>
  );
}
export default Singleproduct;
