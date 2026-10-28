import Banner from "../components/Banner";
import CoverImg from "../components/CoverImg";
import Navbar from "../components/Navbar";
import ProductShowCaseCard from "../components/ProductShowCaseCard";
import Delete from "../assets/delete1.png";
import Footer from "../components/Footer";
function Cart(){
    return(
        <>
       <section>
        <Navbar/>
        <CoverImg/>
       </section>
       <section>
        <div className="flex flex-row gap-5 justify-around items-start p-10">
            <table className="border-separate border-spacing-x-13 border-spacing-y-5">
                <thead className="bg-[#F9F1E7]">
                    <tr className="">
                        <th colSpan={2} className="p-3 text-right">Product</th>
                        <th className="p-3 text-right">Price</th>
                        <th className="p-3 text-right">Quantity</th>
                        <th colSpan={2} className="text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody className="">
                    <tr>
                        <td><img className="w-[105px] h-[105px]" src="" alt="" /></td>
                        <td>Asgaard sofa</td>
                        <td>Rs. 250,000.00</td>
                        <td className="text-right"><button className="border-2 border-black/45 rounded-xl w-[32px] h-[32px]">1</button></td>
                        <td>Rs. 250,000.00</td>
                        <td><button><img src={Delete} alt="" /></button></td>
                    </tr>
                </tbody>
            </table>
            <div className="w-[393px] h-[390px] bg-[#F9F1E7] rounded-2xl flex flex-col justify-around items-center">
                <div className="text-[32px] font-poppins font-semibold">Cart Totals</div>
                <div className="flex flex-col justify-start gap-5">
                    <div className="flex flex-row gap-10 justify-start">
                    <div className="font-poppins font-medium">Subtotal</div>
                    <div>Rs. 250,000.00</div>
                </div>
                <div className="flex flex-row gap-10 justify-start">
                    <div className="font-poppins font-medium">Total</div>
                    <div className="text-[20px] text-[#B88E2F]">Rs. 250,000.00</div>
                </div>
                </div>
                <button className="w-[222px] h-[58.95px] border-2 rounded-2xl">Check Out</button>
            </div>
        </div>
       </section>


       <section>
        <Banner/>
        <Footer/>
       </section>
        </>
    )
}
export default Cart;