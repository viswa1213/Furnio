import logo from '../assets/logo.png';
import favorite from '../assets/favorites.png';
import search from '../assets/search.png';
import user from '../assets/user.png';
import cart from '../assets/cart.png';
import {Link} from "react-router-dom";
import { use } from 'react';
function Navbar(){
    return(
        <>
        <div className="h-[100px] w-[1440px] bg-amber-grey flex flex-row items-center justify-around">
            <div className="flex flex-row items-center">
                <img className='w-[50px] h-[32px] ' src={logo} alt="" />
                <div className="text-[34px] font-bold font-montserrat">Furnio</div>
            </div>

            <div className='flex flex-row gap-[75px] list-none'>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/shop">Shop</Link></li>
                <li>About</li>
                <li>Contact</li>
            </div>

            <div className='flex flex-row items-center gap-[50px]'>
                <img src={user} alt="" />
                <img src={search} alt="" />
                <img src={favorite} alt="" />
                <img src={cart} alt="" />
            </div>
        </div>
        </>
    )
}
export default Navbar;