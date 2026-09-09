function HomeCard(){
    return(
        <>
         <div className="h-[344px] w-[541px] flex flex-col gap-[50px]">
                    <div className="flex flex-col gap-[10px]">
                      <div className="text[16px] font-semibold font-poppins">New Arrival</div>
                    <div className="text-[52px] font-bold text-[#B88E2F] leading-[65px]">Discover Our New Collection</div>
                    <div className="text-[18px] leading-[24px]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis.</div>
                    </div>
                    <button className=" bg-[#B88E2F] w-[222px] h-[74px] flex gap-[10px] pl-[72px] pr-[72px] pt-[25px] pb-[25px] text-[16px] text-[#FFFFFF] font-bold font-poppins">Buy Me</button>
                  </div>
        </>
    )
}

export default HomeCard;