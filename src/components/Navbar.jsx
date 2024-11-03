import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  logo,
  menu,
  close,
  AccountCircleOutlinedIcon,
  FavoriteBorderOutlinedIcon,
  ShoppingCartOutlinedIcon,
} from "../assets";

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const handleClick = () => setOpen(!open);
    const navigate = useNavigate();
    const cartItems = useSelector((state) => state.cart);
    const cartItemCount = cartItems.length;

    return (
        <div className="w-full h-[120px] z-20 bg-white fixed drop-shadow-lg">
        <div className="flex justify-between items-center w-full h-full md:max-w-[1240px] m-auto px-4">
            {/* Logo */}
            <div onClick={()=>navigate('/')} className="flex items-center">
            <img
                src={logo}
                alt="logo"
                className="opacity-60 w-auto h-[108px] xs:ml-10 sm:ml-10 ss:ml-10 md:ml-3 ml-3"
            />
            </div>

            {/* Icons Section */}
            <div className="hidden sm:flex items-center space-x-6">
            {/* Giriş Yap */}
            <div className="flex items-center space-x-1 cursor-pointer">
                <AccountCircleOutlinedIcon className="text-gray-500" />
                <span className="text-gray-600">Sign in</span>
            </div>

            {/* Favorilerim */}
            <div className="flex items-center space-x-1 cursor-pointer">
                <FavoriteBorderOutlinedIcon className="text-gray-500" />
                <span className="text-gray-600">My Favorites</span>
            </div>

            {/* Sepetim */}
            <div onClick={()=>navigate('/carts')} className="flex items-center space-x-1 cursor-pointer relative">
                <ShoppingCartOutlinedIcon className="text-gray-500" />
                <span className="text-gray-600">My Cart</span>
                <span className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full px-1 text-xs">{cartItemCount}</span>
            </div>
            </div>

            {/* Mobile Menu Icon */}
            <div className="sm:hidden cursor-pointer" onClick={handleClick}>
            <img
                src={!open ? menu : close}
                alt="menu"
                className="w-6 h-6 mr-4"
            />
            </div>
        </div>

        {/* Mobile Dropdown Menu */}
        <div
            className={`${
            open ? "flex flex-col justify-center items-center z-0 relative" : "hidden"
            } sm:hidden absolute bg-white w-full px-4 py-4 shadow-md`}
        >
            {/* Giriş Yap */}
            <div className="flex items-center space-x-1 py-2 cursor-pointer min-w-32">
            <AccountCircleOutlinedIcon className="text-gray-500" />
            <span className="text-gray-600">Sign in</span>
            </div>

            {/* Favorilerim */}
            <div className="flex items-center space-x-1 py-2 cursor-pointer min-w-32">
            <FavoriteBorderOutlinedIcon className="text-gray-500" />
            <span className="text-gray-600">My Favorites</span>
            </div>

            {/* Sepetim */}
            <div onClick={()=>navigate('/carts')} className="flex items-center space-x-1 py-2 cursor-pointer relative min-w-32">
            <ShoppingCartOutlinedIcon className="text-gray-500" />
            <span className="text-gray-600">My Cart</span>
            <span className="absolute -top-0 right-6 bg-red-500 text-white rounded-full px-1 text-xs">{cartItemCount}</span>
            </div>
        </div>
        </div>
    );
};

export default Navbar;
