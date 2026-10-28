import Banner from "../components/Banner";
import CoverImg from "../components/coverImg";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar"
function Checkout(){
    return(
        <>
        <section>
            <Navbar/>
            <CoverImg/>
        </section>

        <section className="pt-10">
            <div className="flex flex-row justify-center items-start gap-10">
                <div className="w-[608px] h-[1714px] flex flex-col p-10 flex gap-12">
                    <div className="text-[36px] font-poppins font-semibold">Billing Details</div>

                    <div className="flex flex-row gap-10">
                         <div className="flex flex-col gap-3">
                        <div>FirstName</div>
                        <input type="text" className="w-[211px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>
                    <div className="flex flex-col gap-3">
                        <div>FirstName</div>
                        <input type="text" className="w-[211px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>
                    </div>

                    <div className=" flex flex-col gap-3">
                        <div>Company Name (Optional)</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>

                    <div className=" flex flex-col gap-3">
                        <div>Country / Region</div>
                        <select name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl p-3 appearance-none">
                            <option value="">Select a Country</option>
                            <option value="India">India</option>
                            <option value="SriLanka">SriLanka</option>
                        </select>
                    </div>

                    <div className=" flex flex-col gap-3">
                        <div>Street address</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>

                    <div className=" flex flex-col gap-3">
                        <div>Town / City</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>

                     <div className=" flex flex-col gap-3">
                        <div>Province</div>
                        <select name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl p-3 appearance-none">
                            <option value="">Select a Country</option>
                            <option value="India">India</option>
                            <option value="SriLanka">SriLanka</option>
                        </select>
                    </div>

                    <div className=" flex flex-col gap-3">
                        <div>ZIP code</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>
                    <div className=" flex flex-col gap-3">
                        <div>Phone</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>
                    <div className=" flex flex-col gap-3">
                        <div>Email address</div>
                        <input type="text" name="" id="" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    </div>

                    
                    <input type="text" name="" id="" placeholder="Additional Information" className="w-[453px] h-[75px] border-1 rounded-2xl pl-5" />
                    
                </div>
                <div className="w-[608px] h-[709px] p-20 flex flex-col gap-5">
                    <div className="flex flex-row justify-between text-[24px] font-poppins font-bold">
                        <div>Product</div>
                        <div>Subtotal</div>
                    </div>
                    <div className="flex flex-row justify-between text-[16px]">
                        <div className="flex flex-row gap-5">
                            <div>Asgaard sofa</div>
                            <div>X</div>
                            <div>1</div>
                        </div>
                        <div>Rs. 250,000.00</div>
                    </div>
                     <div className="flex flex-row justify-between">
                        <div>SubTotal</div>
                        <div>Rs. 250,000.00</div>
                    </div>
                    <div className="flex flex-row justify-between">
                        <div>Total</div>
                        <div className="font-poppins text-[24px] text-[#B88E2F]">Rs. 250,000.00</div>
                    </div>
                    <div className="h-[2px] bg-gray-300"></div>
                    <div>Make your payment directly into our bank account. Please use your Order ID as the payment reference. Your order will not be shipped until the funds have cleared in our account.</div>
                    <label htmlFor="" className="flex gap-2 items-center">
                        <input type="radio" name="payment" />
                        Direct Bank Transfer
                    </label>
                    <label htmlFor="" className="flex gap-2 items-center">
                        <input type="radio" name="payment" id="" />
                        Cash On Delivery
                    </label>

                    <div>Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our privacy policy.</div>
                    <div className="flex justify-center items-center"> <button className="w-[318px] h-[64px] border-2 rounded-[15px]">Place Order</button></div>
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
export default Checkout;