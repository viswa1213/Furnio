import logo from "../assets/logo.png";
import cover from "../assets/cover1.png";
function CoverImg(){
    return(
        <>
        <div className="relative h-[316px] w-full flex justify-center items-center object-fill">
            <img src={cover} alt="" className="w-full" />
            <div className="absolute flex flex-col justify-center items-center">
                <img src={logo} alt="" />
                <div className="text-[48px] font-poppins font-medium">Shop</div>
                <div className="flex flex-row gap-5 justify-center items-center">
                    <div>Home</div>
                    <div>{">"}</div>
                    <div>Shop</div>
                </div>
            </div>
        </div>
        </>
    )
}
export default CoverImg;