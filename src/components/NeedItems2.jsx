import React from "react";
import JBLHeadphone from "../assets/JBLHeadphone.png";
import JBLSpeaker from "../assets/JBLSpeaker.png";
import Applewatch from "../assets/Applewatch.png";
import ASUSMouse from "../assets/ASUSMouse.png";
import JBLHeart from "../assets/JBLHeart.png";

const NeedItems = () => {
  const products = [
    {
      img: JBLHeadphone,
      name: "JBL BT Headphones",
      category: "Headphone",
      price: "$85",
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
      price: "$85",
      isNew: true,
    },
    {
      img: ASUSMouse,
      name: "ASUS Rog Spatha Republic Mouse",
      category: "Accessories/Mouse",
      price: "$85",
      isNew: false,
    },
  ];

  return (
    <>
      <div className="flex justify-between items-center  my-8 mx-24">
        <h1 className="bg-gradient-to-l to-[#0EB7FF] from-[#F2D20E] uppercase bg-clip-text leading-tight text-center text-6xl font-bold text-transparent">
          EveryThing You Need
        </h1>
        <div>
          <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
            See All items
          </button>
        </div>
      </div>
      <div className="flex flex-col items-center lg:grid grid-flow-col grid-rows-2 gap-6 justify-center mb-24">
        <div className="text-white w-[424px] bg-[#251F1F] rounded-2xl row-span-2 list-none space-y-2 pl-8 py-4 font-semibold text-2xl">
          <ul className="text-[#0EB7FF] text-2xl font-bold pb-4">Categories</ul>
          <li className="underline">Microphones</li>
          <li>Power Banks</li>
          <li>Projector /Screen</li>
          <li>Wired Hand free</li>
          <li>Tripod & Laptop Stands</li>
          <li>Smart Watch</li>
          <li>Bluetooth Hand free</li>
          <li>Bluetooth Headphones</li>
          <li>Bluetooth Speakers</li>
          <ul className="text-[#0EB7FF] text-2xl font-bold pb-4">
            Gaming Category
          </ul>
          <li className="underline">Connectors</li>
          <li>Gaming Accessories</li>
          <li>HDMI Wi-Fi Dongle</li>
          <li>KeyBoard, Mouse & Pad</li>
          <li>Mobile Accessories</li>
          <li>Shirts/Tops</li>
          <li>Shorts/Bottoms</li>
          <li>Skirts</li>
          <li>Sports Bra</li>
          <h3 className="text-[#0EB7FF] text-2xl font-bold">
            See other categories...
          </h3>
        </div>
        {products.map((item, index) => (
          <div key={index} className=" w-[424px]">
            <div className="w-full flex items-center h-[345px] bg-[#251F1F] rounded-2xl relative">
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
    </>
  );
};

export default NeedItems;
