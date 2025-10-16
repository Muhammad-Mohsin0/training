import { useState } from "react";
import buy2get from "../assets/buy2get.png";
import ecommerce from "../assets/e-commerce.png";
import { BsBasket3 } from "react-icons/bs";
import { FaRegUser } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const cartCount = useSelector((state) => state.cart.cartItems.length);
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const HomeEcommerce = () => {
    navigate("/ecommerce");
  };

  const HomeLottery = () => {
    navigate("/");
  };

  return (
    <nav class="flex justify-evenly items-center gap-42 box-content pt-8 relative">
      <img
        src={buy2get}
        className="h-12 cursor-pointer"
        onClick={HomeLottery}
      />
      <button
        className="text-3xl text-white md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      <div className=" hidden md:flex justify-center gap-4 items-center text-2xl text-white">
        <h3
          className="font-medium text-yellow-300 cursor-pointer"
          onClick={HomeLottery}
        >
          Home
        </h3>
        <h3 className="cursor-pointer">Tickets</h3>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-5 text-white">
        <BsBasket3 className="pt-2 text-4xl cursor-pointer" />
        <span className="text-white text-sm font-semibold">{cartCount}</span>
        <FaRegUser className="pt-2 text-4xl cursor-pointer" />
        <img
          src={ecommerce}
          alt=""
          className="text-5xl cursor-pointer"
          onClick={HomeEcommerce}
        />
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#462041fb] text-white flex flex-col items-start gap-5 py-5 px-2 md:hidden z-50">
          <h3 className="font-medium text-yellow-300 cursor-pointer">Home</h3>
          <h3 className="cursor-pointer">Tickets</h3>
          <div className="flex flex-col justify-end space-y-1 text-white">
            <BsBasket3 className="pt-2 text-3xl cursor-pointer" />
            <span className="text-white text-sm font-semibold">
              {cartCount}
            </span>
            <FaRegUser className="pt-2 text-3xl cursor-pointer" />
            <img
              src={ecommerce}
              alt="ecommerce"
              className="h-8 cursor-pointer"
              onClick={HomeEcommerce}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
