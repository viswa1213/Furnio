import main1 from "../assets/main1.png";
import sub1 from "../assets/sub1.png";
import sub2 from "../assets/sub2.png";
import sub3 from "../assets/sub3.png";
import sub4 from "../assets/sub4.png";

import star from "../assets/star.png";
import twitter from "../assets/twitter.png";
import facebook from "../assets/facebook.png";
import linkedin from "../assets/linkedin1.png";
function SingleProductComp() {
  return (
    <>
      <div className="flex flex-row justify-around items-start gap-[100px]">
        <div className="w-[553px] h-[500px] flex flex-row items-start gap-[20px]">
          <div className=" flex flex-col items-start justify-center gap-[20px]">
            <img src={sub1} alt="" />
            <img src={sub2} alt="" />
            <img src={sub3} alt="" />
            <img src={sub4} alt="" />
          </div>
          <div className="w-[423px] h-[500px] bg-[#F9F1E7] rounded-3xl  flex justify-center items-center">
            <img src={main1} alt="" />
          </div>
        </div>

        <div className="h-[660px] w-[730px] flex flex-col justify-between">
          <div className="text-[42px] font-poppins">Asgaard sofa</div>
          <div className=" text-[24px] font-poppins text-[#9F9F9F]">
            Rs. 250,000.00
          </div>
          <div className="flex flex-row items-center gap-[30px]">
            <div className="flex flex-row items-center gap-[5px]">
              <img src={star} alt="" />
              <img src={star} alt="" />
              <img src={star} alt="" />
            </div>
            <div className="h-[20px] w-[2px] bg-[#9F9F9F]"></div>
            <div className="text-[#9F9F9F] text-[13px]">5 Customer Review</div>
          </div>
          <div className="w-[424px] flex items-start text-[13px] font-poppins">
            Setting the bar as one of the loudest speakers in its class, the
            Kilburn is a compact, stout-hearted hero with a well-balanced audio
            which boasts a clear midrange and extended highs for a sound.
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <div>Size</div>
            <div className="flex flex-row items-center gap-[10px] text-[13px] font-popins">
              <div className="h-[30px] w-[30px] rounded-[5px] bg-[#B88E2F] text-white flex justify-center items-center">
                L
              </div>
              <div className="h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-black flex justify-center items-center">
                XL
              </div>
              <div className="h-[30px] w-[30px] rounded-[5px] bg-[#F9F1E7] text-black flex justify-center items-center">
                XS
              </div>
            </div>
          </div>
          <div className="flex flex-col items-start gap-[10px]">
            <div>Color</div>
            <div className="flex flex-row items-center gap-[10px]">
              <div className="h-[30px] w-[30px] rounded-full bg-[#816DFA]"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-black"></div>
              <div className="h-[30px] w-[30px] rounded-full bg-[#B88E2F]"></div>
            </div>
          </div>

          <div className=" flex flex-row items-center gap-[10px]">
            <div className="w-[123px] h-[64px] border-1 rounded-2xl flex flex-row justify-around items-center">
              <button className="">-</button>
              <div>1</div>
              <button className="">+</button>
            </div>

            <div className="w-[215px] h-[64px] border-1 rounded-2xl flex justify-center items-center">
              {" "}
              Add To Cart
            </div>
            <div className="w-[215px] h-[64px] border-1 rounded-2xl flex justify-center items-center gap-[10px]">
              <button>+</button>
              <div>Compare</div>
            </div>
          </div>

          <div className="h-[1px] w-[605px] bg-[#9F9F9F]"></div>

          <div className="grid grid-cols-[100px_20px_1fr] gap-0 text-[#9F9F9F]">
            <div>SKU</div>
            <div>:</div>
            <div>SS001</div>

            <div>Category</div>
            <div>:</div>
            <div>Sofas</div>

            <div>Tags</div>
            <div>:</div>
            <div>Sofa, Chair, Home, Shop</div>

            <div>Share</div>
            <div>:</div>
            <div className="flex flex-row gap-[10px] items-center">
                <img src={twitter} alt="" />
                <img src={facebook} alt="" />
                <img src={linkedin} alt="" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default SingleProductComp;
