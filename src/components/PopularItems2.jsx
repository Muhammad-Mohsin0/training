import React, { useRef } from "react";
import Applewatch from "../assets/Applewatch.png";
import ASUSMouse from "../assets/ASUSMouse.png";
import JBLHeadphone from "../assets/JBLHeadphone.png";
import JBLSpeaker from "../assets/JBLSpeaker.png";
import JBLHeart from "../assets/JBLHeart.png";
import NorthRiverWhite from "../assets/North River White.png";
import ROGGamingKeyboard from "../assets/ROG Gaming Keyboard.png";
import { GoArrowLeft } from "react-icons/go";
import { GoArrowRight } from "react-icons/go";

const PopularItems2 = () => {
  const scrollRef = useRef(null);

  const products = [
    {
      img: JBLHeadphone,
      name: "JBL BT Headphones",
      category: "Headphone",
      price: "$815",
      isNew: false,
    },
    {
      img: Applewatch,
      name: "Apple Watch Series 3",
      category: "Watches",
      price: "$85",
      isNew: true,
    },
    {
      img: JBLSpeaker,
      name: "JBL BT Speaker",
      category: "Accessories/Speakers",
      price: "$15",
      isNew: true,
    },
    {
      img: ASUSMouse,
      name: "ASUS Rog Spatha Mouse",
      category: "Accessories/Mouse",
      price: "$85",
      isNew: false,
    },
    {
      img: NorthRiverWhite,
      name: "North River White",
      category: "Accessories/Mouse",
      price: "$45",
      isNew: false,
    },
    {
      img: Applewatch,
      name: "Apple Watch Series 3",
      category: "Watches",
      price: "$85",
      isNew: true,
    },
    {
      img: JBLSpeaker,
      name: "JBL BT Speaker",
      category: "Accessories/Speakers",
      price: "$15",
      isNew: true,
    },
    {
      img: ASUSMouse,
      name: "ASUS Rog Spatha Mouse",
      category: "Accessories/Mouse",
      price: "$85",
      isNew: false,
    },
    {
      img: NorthRiverWhite,
      name: "North River White",
      category: "Accessories/Mouse",
      price: "$45",
      isNew: false,
    },
    {
      img: ROGGamingKeyboard,
      name: "ROG Gaming Keyboard",
      category: "Accessories",
      price: "$119",
      isNew: true,
    },
  ];
  // Move one card on each arrow click
  const handleScroll = (direction) => {
    const container = scrollRef.current;
    if (!container) return;

    const cardWidth = 324 + 24; // card width + gap (gap = 6 * 4 = 24px)
    const scrollAmount =
      direction === "left"
        ? container.scrollLeft - cardWidth
        : container.scrollLeft + cardWidth;

    container.scrollTo({
      left: scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <>
      <div className="flex justify-between items-center mx-24 ">
        <h1 className="bg-gradient-to-l to-[#0EB7FF] from-[#F2D20E] uppercase bg-clip-text leading-tight text-6xl  font-bold text-transparent">
          Popular Items
        </h1>
        <div className="flex justify-center items-center gap-4">
          <GoArrowLeft
            onClick={() => handleScroll("left")}
            className="text-white bg-[#0EB7FF4D] hover:bg-[#0EB7FF] hover:text-black rounded-4xl w-[50px] h-[50px] p-3"
          />
          <GoArrowRight
            onClick={() => handleScroll("right")}
            className="text-white bg-[#0EB7FF4D] hover:bg-[#0EB7FF] hover:text-black rounded-4xl w-[50px] h-[50px] p-3"
          />
        </div>
      </div>
      <div
        ref={scrollRef}
        className="w-full flex overflow-x-auto scrollbar-hide scroll-smooth py-16 "
      >
        <div className="flex flex-nowrap gap-6 px-8 mx-16">
          {products.map((item, index) => (
            <div key={index} className=" w-[324px] flex-shrink-0">
              <div className="w-full flex justify-center items-end h-[480px] bg-[#251F1F] rounded-2xl relative pb-12">
                {item.isNew && (
                  <h2 className="absolute text-xl font-extrabold font-sans top-6 left-6 bg-white px-4 rounded-lg text-[#f33cd1]">
                    New
                  </h2>
                )}
                <img src={item.img} alt="" className="" />
                <img src={JBLHeart} alt="" className="absolute top-6 right-6" />
              </div>
              <div className="text-[#F5F5F4] flex flex-col gap-1 pt-4">
                <h1 className="text-xl font-bold">{item.name}</h1>
                <h3 className="text-[#C5C5C5] text-lg">{item.category}</h3>
                <span className="text-xl font-bold">{item.price}</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default PopularItems2;
