import Navbar from "../components/Navbar";
import SingleProductComp from "../components/SingleProductComp";
function Singleproduct() {
  return (
    <>
      <Navbar />
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
    </>
  );
}
export default Singleproduct;
