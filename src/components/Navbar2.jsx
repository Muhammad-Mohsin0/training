import React, { useState } from "react";
import buy2get2 from "../assets/buy2get2.png";
import lottery from "../assets/lottery.png";
import { IoMdSearch } from "react-icons/io";
import { RiShoppingBag4Line } from "react-icons/ri";
import { FaRegUser } from "react-icons/fa";
import { FaAngleDown } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";
import { TfiWorld } from "react-icons/tfi";
import { TiArrowSortedDown } from "react-icons/ti";
import { useNavigate } from "react-router-dom";

const Navbar2 = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const HomeEcommerce = () => {
    navigate("/ecommerce");
  };

  const HomeLottery = () => {
    navigate("/");
  };

  return (
    <nav className="flex justify-evenly items-center space-x-24 mx-12 box-content pt-8">
      <img
        src={buy2get2}
        className="h-12 cursor-pointer"
        onClick={HomeEcommerce}
      />
      <button
        className="text-3xl text-white md:hidden cursor-pointer"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? <IoClose /> : <GiHamburgerMenu />}
      </button>

      <div className="hidden md:flex justify-center gap-4 items-center bg-[#6969694D] border-1 px-4 py-2 rounded-lg border-[#0EB7FF] text-xl text-white">
        <h3
          className="font-semibold text-[#0EB7FF] cursor-pointer"
          onClick={HomeEcommerce}
        >
          Home
        </h3>
        <h3 className="cursor-pointer">Headphones</h3>
        <h3 className="cursor-pointer">Speaker</h3>

        <h3 className="cursor-pointer flex items-center ">
          More <FaAngleDown className="ml-1 text-base" />
        </h3>
      </div>
      <div className="hidden md:flex justify-center items-center space-x-5 text-white">
        <div className="bg-[#6969694D] flex justify-center items-center  px-4 py-2 rounded-3xl">
          <IoMdSearch className="mx-1 text-2xl" />
          <input
            type="text"
            placeholder="Search"
            className="text-xl outline-0"
          />
        </div>
        <RiShoppingBag4Line className="bg-[#6969694D] text-3xl p-2 rounded-4xl h-10 w-11    " />
        <FaRegUser className="bg-[#6969694D] text-3xl p-2 rounded-4xl h-10 w-11" />
        <h2 className="cursor-pointer flex items-center bg-[#6969694D] text-lg h-10 w-20 rounded-lg">
          <TfiWorld className="ml-1 text-xl" />
          EN
          <TiArrowSortedDown className="ml-1 " />
        </h2>

        <img
          src={lottery}
          alt=""
          className="text-5xl cursor-pointer mb-10"
          onClick={HomeLottery}
        />
      </div>

      {isOpen && (
        <div className="absolute top-20 left-0 w-full bg-[#080808] text-white flex flex-col items-start gap-5 py-5 px-2 md:hidden z-50">
          <h3 className="font-medium text-[#0EB7FF] cursor-pointer">Home</h3>
          <h3 className="cursor-pointer">Headphone</h3>
          <h3 className="cursor-pointer">Speaker</h3>
          <div className="flex flex-col justify-end space-y-1 text-white">
            <RiShoppingBag4Line className="pt-2 text-3xl cursor-pointer" />

            <FaRegUser className="pt-2 text-3xl cursor-pointer" />
            <img
              src={lottery}
              alt=""
              className="text-5xl cursor-pointer mb-10"
              onClick={HomeLottery}
            />
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar2;
