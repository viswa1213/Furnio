function ProductBadge({pContent,type}) {

    const style = {
        new : "bg-[#2EC1AC]",
        discount : "bg-[#E97171]"
    }
  return (
    <>
      <div className={`absolute right-5 top-5 w-[48px] h-[48px] rounded-full ${style[type]} flex justify-center items-center`}>
        <div className="text-white text-[16px] font-poppins font-medium">
          {pContent}
        </div>
      </div>
    </>
  );
}

export default ProductBadge;