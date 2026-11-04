import Banner from "../components/Banner";
import CoverImg from "../components/CoverImg";
import Navbar from "../components/Navbar";
import Delete from "../assets/delete1.png";
import Footer from "../components/Footer";
import minus from "../assets/minus.png";
import plus from "../assets/plus.png";
function Cart({cart,setCart}){

    const totalAmount = cart.reduce((total,item) => {
        return total + (Number(item.productAmount) * Number(item.productQuantity));
    },0);
    return(
        <>
       <section>
        <Navbar/>
        <CoverImg/>
       </section>
       <section>
        <div className="flex flex-row gap-5 justify-around items-start p-10">
            <table className="border-separate border-spacing-x-13 border-spacing-y-5">
                <thead className="">
                    <tr className="">
                        <th colSpan={2} className="p-3 text-right">Product</th>
                        <th className="p-3 text-right">Price</th>
                        <th className="p-3 text-center">Quantity</th>
                        <th colSpan={2} className="text-left">Subtotal</th>
                    </tr>
                </thead>
                <tbody className="">
                    {cart.map((item) => {
                         console.log("Image key:", item.productImg);
                        console.log("Image source:", item.productImg);

                    return(
                        <tr key={item.productId}>
                        <td><img className="w-[105px] h-[105px]" src={item.productImg}  alt="NOOOO" /></td>
                        <td>{item.productName}</td>
                        <td>Rs.{item.productAmount}</td>
                        <td className="text-center space-x-5 align-middle">
                           <div className="flex justify-center items-center gap-10">
                             <button className="cursor-pointer" onClick={() => {setCart((prevCart) => prevCart.map((p) => p.productId == item.productId ? {...p,productQuantity: Number(p.productQuantity)+1} : p ))}}><img src={plus} alt="" /></button>
                        <input value={item.productQuantity} style={{
        width: `${Math.max(String(item.productQuantity).length * 12 + 16, 30)}px`
    }} className="h-[30px] text-center  placeholder:text-center bg-white border-1" onChange={(e) => {setCart((prevCart) => prevCart.map((p) => p.productId == item.productId ? {...p,productQuantity: Number(e.target.value)} : p ))}} type="text" name="" id="" placeholder={item.productQuantity} />
                          <button className="cursor-pointer" onClick={() => {setCart((prevCart) => prevCart.map((p) => p.productId == item.productId ? {...p,productQuantity:Math.max(Number(p.productQuantity)-1,1)} : p ))}}><img src={minus} alt="" /></button>
                           </div>
                        </td>
                        <td>Rs.{Number(item.productAmount) * Number(item.productQuantity)}</td>
                        <td><button className="cursor-pointer" onClick={() => setCart((prevCart) => prevCart.filter((p) => p.productId != item.productId))}><img src={Delete} alt="" /></button></td>
                        </tr>
                    )})}
                </tbody>
            </table>
            <div className="w-[393px] h-[390px] bg-[#F9F1E7] rounded-2xl flex flex-col justify-around items-center">
                <div className="text-[32px] font-poppins font-semibold">Cart Totals</div>
                <div className="flex flex-col justify-start gap-5">
                    <div className="flex flex-row gap-10 justify-start">
                    <div className="font-poppins font-medium">Subtotal</div>
                    <div>Rs.{totalAmount}</div>
                </div>
                <div className="flex flex-row gap-10 justify-start">
                    <div className="font-poppins font-medium">Total</div>
                    <div className="text-[20px] text-[#B88E2F]">Rs.  {totalAmount}</div>
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