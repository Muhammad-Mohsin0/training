import React, { useEffect, useState } from "react";
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
import BannerChance from "../assets/BannerChance.png";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { decrementTimers, resetTimer } from "../components/redux/timerSlice";

const SelectedCard = () => {
  const timers = useSelector((state) => state.timer.timers);
  const dispatch = useDispatch();

  const activeCampaigns = [
    { id: 1, image: vehicle, title: "Fortuner 2.7 Ltr", price: 200 },
    { id: 2, image: amount, title: "Price Amount", price: 399 },
    { id: 3, image: bike, title: "Yamaha YBR 125", price: 766 },
    { id: 4, image: laptop, title: "HP EliteBook", price: 766 },
    { id: 5, image: vehicle, title: "Honda Civic 1.8", price: 992 },
    { id: 6, image: airpods, title: "JayBirds AirPods", price: 822 },
    { id: 7, image: speaker, title: "JBL BT Speaker", price: 222 },
    { id: 8, image: thinkpad, title: "ThinkPad T550", price: 910 },
  ];

  const luckyDip = [
    { id: 1, image: prize, title: "Pkr 1.5 Million", price: 321 },
    { id: 2, image: headphone, title: "JBL HeadPhone", price: 422 },
    { id: 3, image: GoldCoin, title: "1 Gold Coin", price: 738 },
    { id: 4, image: airpods, title: "AirPods Max", price: 812 },
    { id: 5, image: speaker, title: "JBL Go 3", price: 255 },
    { id: 6, image: laptop, title: "Dell Latitude", price: 890 },
    { id: 7, image: vehicle, title: "Suzuki Alto 660cc", price: 975 },
    { id: 8, image: bike, title: "Honda CG 125", price: 680 },
  ];
  const treasure = [
    { id: 1, image: vehicle, title: "Toyota Revo", price: 1200 },
    { id: 2, image: amount, title: "Cash Prize", price: 500 },
    { id: 3, image: prize, title: "2 Million Jackpot", price: 1500 },
    { id: 4, image: thinkpad, title: "Lenovo ThinkPad X1", price: 950 },
    { id: 5, image: airpods, title: "Apple AirPods Pro", price: 799 },
    { id: 6, image: speaker, title: "Sony Portable Speaker", price: 444 },
    { id: 7, image: GoldCoin, title: "5 Gold Coins", price: 999 },
    { id: 8, image: headphone, title: "Beats Headphone", price: 560 },
  ];

  const [selectedTab, setSelectedTab] = useState("active");
  const displayData =
    selectedTab === "active"
      ? activeCampaigns
      : selectedTab === "lucky"
      ? luckyDip
      : treasure;

  useEffect(() => {
    const interval = setInterval(() => {
      dispatch(decrementTimers());
    }, 1000);

    return () => clearInterval(interval);
  }, [dispatch]);

  const formatTime = (seconds) => {
    const hours = String(Math.floor(seconds / 3600)).padStart(2, "0");
    const minutes = String(Math.floor((seconds % 3600) / 60)).padStart(2, "0");
    const secs = String(seconds % 60).padStart(2, "0");
    return `${hours} : ${minutes} : ${secs}`;
  };

  const combinedData = displayData.map((card) => {
    const timer = timers.find((t) => t.id === card.id);
    return { ...card, timeLeft: timer ? timer.timeLeft : 0 };
  });

  return (
    <>
      <div className="flex justify-center">
        <div className="flex md:gap-8 mx-8 md:mx-0 text-xs sm:text-sm md:text-xl font-normal sm:font-medium text-amber-50 bg-gray-800 px-1 sm:px-3 py-2 sm:py-4 rounded-full">
          <h2
            onClick={() => setSelectedTab("active")}
            className={` py-1 sm:py-2 px-2 rounded-full cursor-pointer ${
              selectedTab === "active" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Active Campaigns
          </h2>
          <h2
            onClick={() => setSelectedTab("lucky")}
            className={` py-1 sm:py-2 px-2  rounded-full cursor-pointer ${
              selectedTab === "lucky" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Lucky Dip
          </h2>
          <h2
            onClick={() => setSelectedTab("treasure")}
            className={` py-1 sm:py-2 px-2  rounded-full cursor-pointer ${
              selectedTab === "treasure" ? "bg-gray-600" : "hover:bg-gray-700"
            }`}
          >
            Treasure
          </h2>
        </div>
      </div>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 justify-center mx-16 md:mx-36 lg:mx-42 py-12 gap-12 ">
        {combinedData.map((item) => (
          <div key={item.id} className=" w-64 bg-white rounded-3xl ">
            <div className="flex justify-center items-center pt-6">
              <div className="w-60 h-40 flex justify-center items-center ">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-contain"
                />
              </div>
            </div>
            <div className="py-4 px-5">
              <img src={win} alt="win" />
              <h2 className="text-2xl font-bold">{item.title}</h2>
            </div>
            <div className="px-2">
              <h3 className=" bg-yellow-400 rounded-4xl pl-3 text-sm font-bold flex items-center justify-between">
                <div className="flex flex-col">
                  <span>Buy Pkr{item.price}</span>
                  <span className="text-[8px] font-semibold">
                    WinVault Shopping Card
                  </span>
                </div>

                <button
                  className="bg-[#b360e2] text-white  p-4 px-6  rounded-4xl font-semibold cursor-pointer"
                  onClick={() => dispatch(addToCart(item))}
                >
                  Add to cart
                </button>
              </h3>
              <p className="px-4 py-1 text-xs font-semibold text-[#FE2222]">
                Closing in
                <span className="text-black  pl-1">
                  {formatTime(item.timeLeft)}
                </span>
              </p>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-center items-center mx-10 md:mx-6 pb-12">
        <img src={BannerChance} alt="" />
      </div>
    </>
  );
};

export default SelectedCard;
