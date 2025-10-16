import React from "react";
import Pst5 from "../assets/Pst5.png";

const Journey2 = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-2 justify-evenly items-center bg-[#251F1F] mx-24 rounded-2xl px-24">
        <div className="px-20">
          <img src={Pst5} alt="" />
        </div>
        <div className="text-white space-y-6">
          <h1 className="text-6xl font-bold">
            Your Journey Starts with the Right Gear.
          </h1>
          <p className="text-xl">
            Enjoy deals of up to 40% OFF this month on Trivo Official Site.
          </p>
          <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
            Shop Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default Journey2;
