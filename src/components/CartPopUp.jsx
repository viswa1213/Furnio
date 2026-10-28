
import sofa1 from "../assets/sofa1.png";
import closeCart from "../assets/closeCart.png";
function CartPopUp({onClickCloseCart}){
    return(
        <>
        <section>
        <div className="absolute top-0 right-0 w-[417px] h-[746px] bg-[#FFFFFF] flex flex-col justify-between rounded-b-2xl">
          <div className="flex flex-col gap-10 p-10">
            <div className="flex flex-row justify-between">
            <div>Shopping Cart</div>
            <button><img className="h-[25px] w-[25x]" src={closeCart} alt=""  onClick={onClickCloseCart}/></button>
          </div>

          <div className="h-[2px] bg-black w-[300px]"></div>

          <div className="flex flex-row justify-start items-center gap-10">
            <img className="h-[105px] w-[105px] rounded-2xl" src={sofa1} alt="" />
            <div className="flex flex-col gap-2">
              <div>Asgaard sofa</div>
              <div className="flex flex-row">
                <div>1</div>
                <div>X</div>
                <div>Rs. 250,000.00</div>
              </div>
            </div>
            <div className="h-[25px] w-[25px] flex justify-center items-center bg-gray-600 text-white rounded-full">X</div>
          </div>
          <div className="flex flex-row justify-start items-center gap-10">
            <img className="h-[105px] w-[105px] rounded-2xl" src={sofa1} alt="" />
            <div className="flex flex-col gap-2">
              <div>Asgaard sofa</div>
              <div className="flex flex-row">
                <div>1</div>
                <div>X</div>
                <div>Rs. 250,000.00</div>
              </div>
            </div>
            <div className="h-[25px] w-[25px] flex justify-center items-center bg-gray-600 text-white rounded-full">X</div>
          </div>
          </div>

          <div>
              <div className="flex flex-row justify-between items-cente pl-10 pr-10 pb-5">
                <div>Subtotal</div>
              <div>Rs. 520,000.00</div>
              </div>
              <div className="h-[2px] w-full bg-gray-500"></div>

              <div className="flex justify-center items-center gap-5 p-10">
                <button className="border-1 border-black rounded-4xl h-[30px] w-[87px]">Cart</button>
                <button className="border-1 border-black rounded-4xl h-[30px] w-[118px]">Checkout</button>
                <button className="border-1 border-black rounded-4xl h-[30px] w-[135px]">Comparison</button>
              </div>
          </div>
        </div>
      </section>
        </>
    )
}

export default CartPopUp;