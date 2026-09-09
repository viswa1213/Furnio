

function ProductShowCaseCard({pImg,pContent}) {
  return (
    <>
      <div className="flex flex-col items-center gap-[20px] overflow-hidden transition-all duration-300 hover:scale-120 hover:z-10">
        <img className="w-[381px] h-[480px]" src={pImg} alt="" />
        <div className="text-[24px] font-poppins font-semibold">{pContent}</div>
      </div>
    </>
  );
}

export default ProductShowCaseCard;