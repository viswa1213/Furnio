import Navbar from "../components/Navbar";
import CoverImg from "../components/coverImg";
import location from "../assets/location.png";
import phone from "../assets/phone.png";
import clock from "../assets/clock.png";
import Banner from "../components/Banner";
import Footer from "../components/Footer";
function Contact(){
    return(
        <>
        <section>
            <Navbar/>
            <CoverImg/>

            <div className="flex flex-col justify-center items-center pt-10">
                <div className="font-poppins text-[36px] font-semibold">Get In Touch With Us</div>
                <div className="font-poppins text-[16px] text-[#9F9F9F] w-[644px] h-[48px] flex justify-center items-center">For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!</div>
            </div>


           <div className="flex flex-row justify-around items-center">
             <div className="w-[393px] h-[537px] flex flex-col justify-center itmes-center gap-10">
               <div className="flex flex-row justify-center itmes-center gap-10"> <div>
                    <img src={location} alt="" />
                </div>
                <div className="flex flex-col justify-center itmes-center w-[212px]">
                    <div className="font-poppins font-medium text-[24px]">Address</div>
                    <div className="font-poppins">236 5th SE Avenue, New York NY10000, United States</div>
                </div></div>
                <div className="flex flex-row justify-center itmes-center gap-10">
                     <div>
                    <img src={phone} alt="" />
                </div>
                <div className="flex flex-col justify-center itmes-center w-[212px]">
                    <div className="font-poppins font-medium text-[24px]">Phone</div>
                    <div className="font-poppins">Mobile: +(84) 546-6789</div>
                     <div className="font-poppins">Mobile: +(84) 546-6789</div>
                </div>
                </div>
                <div className="flex flex-row justify-center itmes-center gap-10"> <div>
                    <img src={clock} alt="" />
                </div>
                <div className="flex flex-col justify-center itmes-center w-[212px]">
                    <div className="font-poppins font-medium text-[24px]">Working Time</div>
                    <div className="font-poppins">Monday-Friday: 9:00 - 22:00</div>
                    <div className="font-poppins">Saturday-Sunday: 9:00 - 21:00</div>

                </div></div>
            </div>


            <div className=" w-[635px] h-[923px] flex flex-col justify-center items-start gap-10">
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Your name</label>
                    <input placeholder="Abc" type="text" name="" id=""  className="w-[528px] h-[75px] border-1  pl-10 rounded-[10px]"/>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Email address</label>
                    <input placeholder="Abc@def.com" type="text" name="" id=""  className="w-[528px] h-[75px] border-1 pl-10 rounded-[10px]"/>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Subject</label>
                    <input placeholder="This is an optional" type="text" name="" id=""  className="w-[528px] h-[75px] border-1 pl-10 rounded-[10px]"/>
                </div>
                <div className="flex flex-col gap-3">
                    <label htmlFor="">Message</label>
                    <textarea placeholder="Hi! i’d like to ask about" type="text" name="" id=""  className="w-[528px] h-[120px] border-1 pl-6 pt-4 rounded-[10px]"/>
                </div>

                <button className="w-[237px] h-[55px] bg-[#B88E2F] text-white rounded-2xl">Submit</button>
            </div>
           </div>
           <Banner/>

                <Footer/>
        </section>
        </>
    )
}

export default Contact;