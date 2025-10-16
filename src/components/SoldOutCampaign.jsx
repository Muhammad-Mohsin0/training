import React from "react";

import vehicle from "../assets/vehicle.png";
import win from "../assets/Win.png";
import amount from "../assets/amount.png";
import bike from "../assets/bike.png";
import laptop from "../assets/laptop.png";
import airpods from "../assets/airpods.png";
import speaker from "../assets/speaker.png";
import thinkpad from "../assets/thinkpad.png";
import prize from "../assets/prize.png";
import headphone from "../assets/headphone.png";
import GoldCoin from "../assets/Gold Coin.png";
import money from "../assets/money.png";
import glasses from "../assets/glasses.png";
import iphone from "../assets/iphone.png";

const SoldOutCampaign = () => {
  const cardData = [
    { id: 1, image: vehicle, title: "Fortuner 2.7 Ltr", price: 200 },
    { id: 2, image: amount, title: "Price Amount", price: 399 },
    { id: 3, image: bike, title: "Yamaha YBR 125", price: 766 },
    { id: 4, image: laptop, title: "HP EliteBook", price: 766 },
    { id: 5, image: vehicle, title: "Honda Civic 1.8", price: 992 },
    { id: 6, image: amount, title: "Price Amount", price: 399 },
    { id: 7, image: airpods, title: "JayBirds AirPods", price: 822 },
    { id: 8, image: speaker, title: "JBL BT Speaker", price: 222 },
    { id: 9, image: thinkpad, title: "ThinkPad T550", price: 910 },
    { id: 10, image: prize, title: "Pkr 1.5 Million", price: 321 },
    { id: 11, image: headphone, title: "JBL HeadPhone", price: 422 },
    { id: 12, image: GoldCoin, title: "1 Gold Coin", price: 738 },
  ];

  const winnersData = [
    {
      id: 1,
      image: money,
      title: "Fortuner 2.7 Ltr",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 2,
      image: glasses,
      title: "Price Amount",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 3,
      image: vehicle,
      title: "Yamaha YBR 125",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 4,
      image: headphone,
      title: "HP EliteBook",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 5,
      image: iphone,
      title: "Honda Civic 1.8",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 6,
      image: bike,
      title: "Honda Civic 1.8",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
    {
      id: 5,
      image: airpods,
      title: "Honda Civic 1.8",
      price: `123,232`,
      ticket: `Ticket No: wv-00471-1008783132`,
      announced: `Announced On: 02:42 PM , 15 May,2025`,
    },
  ];
  return (
    <>
      <div className="flex justify-end">
        <div className="w-[86%] bg-gradient-to-tl from-[#F83ACF] to-[#B143E8] rounded-l-3xl">
          <h1 className="text-5xl text-white font-bold px-8 py-10 font-sans">
            Sold Out Campaigns
          </h1>
          <div className="flex overflow-x-auto whitespace-nowrap pb-28 py-4 gap-4 scrollbar-hide scroll-smooth">
            {cardData.map((item) => (
              <div
                key={item.id}
                className="inline-block w-64 bg-white rounded-3xl flex-shrink-0"
              >
                <div className="flex justify-center items-center pt-6">
                  <div className="w-60 h-40 flex justify-center items-center ">
                    <img
                      src={item.image}
                      alt={item.title}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </div>
                <div className="py-8 px-5">
                  <img src={win} alt="win" />
                  <h2 className="text-2xl font-bold">{item.title}</h2>
                  <hr className="border-4 border-[#FFCA18] rounded-4xl shadow-[0_2px_10px_0px_#8E8E8E]" />
                  <span className="text-xs font-bold">
                    1350 Sold Out of 1350
                  </span>
                </div>
                <div className="px-2">
                  <h3 className=" bg-yellow-400 rounded-4xl pl-3 text-sm font-bold flex items-center justify-between">
                    <div className="flex flex-col">
                      <span>Buy Pkr{item.price}</span>
                      <span className="text-[8px] font-semibold">
                        WinVault Shopping Card
                      </span>
                    </div>

                    <button className="bg-[#8E8E8E] text-white  p-4 px-6  rounded-4xl font-semibold cursor-pointer">
                      Add to cart
                    </button>
                  </h3>
                  <p className="px-4 py-1 text-xs font-semibold text-[#FE2222]">
                    Closing in
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <div className=" flex justify-end items-center">
        <h1 className="w-[86%] text-white text-5xl font-bold py-10">Winners</h1>
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap mx-4 md:mx-16 py-4 gap-4 scrollbar-hide scroll-smooth">
        {winnersData.map((item) => (
          <div
            key={item.id}
            className="inline-block w-70 h-65 bg-white rounded-3xl flex-shrink-0"
          >
            <div className="flex justify-center items-center pt-4">
              <div className="w-60 h-30 flex justify-center items-center bg-[#B360E240] rounded-2xl p-2">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="flex flex-col items-center py-  ">
              <h2 className="text-3xl font-extrabold text-gradient-to-tl text-[#f33cd1]">
                Congrats!
              </h2>
              <span className="text-sm font-bold pt-1">{item.title}</span>
              <span className="text-sm font-bold pb-1">
                Pkr {item.price} Cash
              </span>
              <span className="text-xs font-semibold pt-1">{item.ticket}</span>
              <span className="text-xs font-semibold pb-1">
                {item.announced}
              </span>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default SoldOutCampaign;
