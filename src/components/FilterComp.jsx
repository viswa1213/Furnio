import { SlidersHorizontal } from "lucide-react";
import fourDots from "../assets/fourDots.png";
import twoLines from "../assets/twoLines.png";
function FilterComp({itemsPerPage,setItemsPerPage,startIndex,endIndex,totalProduct}){
    return(<>
    <div className="w-full h-[100px] bg-[#F9F1E7] flex flex-row justify-around items-center gap-[10px]">
            <div className="flex flex-row justify-center items-center gap-10">
                <div className=" flex flex-row gap-[5px]">
                <SlidersHorizontal/>
                <div>Filter</div>
            </div>

            <div className="flex flex-row justify-center items-center gap-[15px]">
                <img src={fourDots} alt="" />
                <img src={twoLines} alt="" />
                <div className="h-[20px] w-[2px] bg-[#9F9F9F]"></div>
                <div>Showing {startIndex}–{endIndex} of {totalProduct} results</div>
            </div>
            </div>

            <div className="flex flex-row justify-center items-center gap-[10px]">
                <div>Show</div>
                <input type="text" value={itemsPerPage} onChange={(e) => setItemsPerPage(Number(e.target.value))} className="h-[55px] w-[55px] bg-white flex justify-center items-center p-4"/>
                <div>Sort by</div>
                <div className="h-[55px] w-[188px] bg-white flex justify-start p-4 items-center text-[#9F9F9F]">Default</div>
            </div>
        </div>
    </>)
}
export default FilterComp;