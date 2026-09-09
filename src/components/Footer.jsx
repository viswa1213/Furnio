function Footer() {
  return (
    <>
    <div className="h-[2px] w-full bg-gray-300"></div>
      <div className="min-w-screen h-[505px] pl-[100px] pr-[100px] pt-[48px] pd-[38px]">
        <div className="w-[1240px] h-[419px] flex flex-col justify-between">
          <div className="w-[1113px] h-[312px] flex flex-row justify-between">
            <div className="flex flex-col items-start gap-[50px]">
              <div className="text-[24px] font-poppins font-bold ">Funiro.</div>
              <div className="text-[#9F9F9F] font-poppins text-[16px]">
                400 University Drive Suite 200 Coral <br /> Gables, <br />FL 33134 USA
              </div>
            </div>
            <div className="w-[710px] h-[312px] flex flex-row justify-between">
               <div className="w-[352px] h-[321px] grid grid-cols-2">
                 <div className="text-[#9F9F9F]">Links</div>
                 <div className="text-[#9F9F9F]">Help</div>
                <div className="text-[16px] font-poppins font-medium">Home</div>
                <div className="text-[16px] font-poppins font-medium">Payment Options</div>
                <div className="text-[16px] font-poppins font-medium">Shop</div>
                 <div className="text-[16px] font-poppins font-medium">Returns</div>
                <div className="text-[16px] font-poppins font-medium">About</div>
                <div className="text-[16px] font-poppins font-medium">Privacy Policies</div>
                <div className="text-[16px] font-poppins font-medium">Contact</div>
                <div className="text-[16px] font-poppins font-medium">Returns</div>
                <div className="text-[16px] font-poppins font-medium">Privacy Policies</div>
               </div>
               <div className="w-[286px] h-[101px] flex flex-col justify-between">
                <div className="text-[#9F9F9F]">Newsletter</div>
                <div className="flex flex-row">
                    <input className="border-none outline-none underline" type="text" name="" id="" placeholder="Enter Your Email Address"/>
                    <div className="underline">SUBSCRIBE</div>
                </div>
               </div>
            </div>
          </div>
           <div className="h-[2px] w-[1240px] bg-gray-300"></div>
           <div className="">2023 furino. All rights reverved</div>
        </div>

      </div>
    </>
  );
}
export default Footer;
