import trophy from "../assets/trophy.png";
import guarantee from "../assets/guarantee.png";
import shipping from "../assets/shipping.png";
import customersupport from "../assets/customer-support.png";
function Banner(){
    return(
        <>
         <div className="h-[270px] w-full bg-[#FAF3EA] flex flex-row justify-center items-center gap-[40px] mt-10">
                            <div className="flex flex-row items-center justify-center gap-1">
                              <img src={trophy} alt="" />
                              <div className="flex flex-col justify-center items-start gap-1">
                                <div className="text-[25px] font-poppins font-bold text-[#242424]">High Quality
                                </div>
                                <div className="text-[20px] font-poppins font-medium text-[#898989]"> crafted from top materials</div>
                              </div>
                            </div>
                
                            <div className="flex flex-row items-center gap-1">
                              <img src={guarantee} alt="" />
                              <div className="flex flex-col justify-center items-start gap-1">
                                <div className="text-[25px] font-poppins font-bold text-[#242424]">Warranty Protection
                                </div>
                                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Over 2 years</div>
                              </div>
                            </div>
                
                            <div className="flex flex-row items-center gap-1">
                              <img src={shipping} alt="" />
                              <div className="flex flex-col justify-center items-start gap-1">
                                <div className="text-[25px] font-poppins font-bold text-[#242424]">Free Shipping
                                </div>
                                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Order over 150 $</div>
                              </div>
                            </div>
                
                            <div className="flex flex-row items-center gap-1">
                              <img src={customersupport} alt="" />
                              <div className="flex flex-col justify-center items-start gap-1">
                                <div className="text-[25px] font-poppins font-bold text-[#242424]">24 / 7 Support
                                </div>
                                <div className="text-[20px] font-poppins font-medium text-[#898989]"> Dedicated support</div>
                              </div>
                            </div>
                       </div>
        </>
    )
}

export default Banner;