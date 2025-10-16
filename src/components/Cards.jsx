import React, { useEffect, useState } from "react";
import vehicle from "../assets/vehicle.png";
import win from "../assets/win.png";
import amount from "../assets/amount.png";
import bike from "../assets/bike.png";
import laptop from "../assets/laptop.png";
import Banner from "../assets/Banner.png";
import { useSelector, useDispatch } from "react-redux";
import { addToCart } from "./redux/cartSlice";
import { decrementTimers, resetTimer } from "../components/redux/timerSlice";

const Cards = () => {
  const cardData = [
    {
      id: 1,
      image: vehicle,
      title: "Fortuner 2.7 Ltr",
      price: 200,
    },
    {
      id: 2,
      image: amount,
      title: "Price Amount",
      price: 399,
    },
    {
      id: 3,
      image: bike,
      title: "Yamaha YBR 125",
      price: 766,
    },
    {
      id: 4,
      image: laptop,
      title: "HP EliteBook",
      price: 766,
    },
    {
      id: 5,
      image: vehicle,
      title: "Honda Civic 1.8",
      price: 992,
    },
    {
      id: 6,
      image: amount,
      title: "Price Amount",
      price: 399,
    },
  ];
  const timers = useSelector((state) => state.timer.timers);
  const dispatch = useDispatch();
  // const [timers, setTimers] = useState(cardData.map((item) => item.timeLeft));

  useEffect(() => {
    const interval = setInterval(() => {
      // setTimers((prev) => prev.map((t) => (t > 0 ? t - 1 : 0)));
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

  const combinedData = cardData.map((card) => {
    const timer = timers.find((t) => t.id === card.id);
    return { ...card, timeLeft: timer ? timer.timeLeft : 0 };
  });

  return (
    <>
      <div className="flex justify-start md:justify-between items-center text-3xl font-bold px-16 md:px-24 py-8">
        <h3 className="text-amber-50 hidden md:block">Featured</h3>
        <h3 className="text-fuchsia-500">See all</h3>
      </div>
      <div className="flex overflow-x-auto whitespace-nowrap mx-4 md:mx-16 py-4 gap-4 scrollbar-hide scroll-smooth">
        {combinedData.map((item, index) => (
          <div
            key={item.id}
            className="inline-block w-64 bg-white rounded-3xl flex-shrink-0"
          >
            <div className="flex justify-center items-center pt-6">
              <img src={item.image} alt={item.title} />
            </div>
            <div className="py-8 px-5">
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
      <div className="flex justify-center mx-8 md:mx-6 py-12">
        <img src={Banner} alt="" />
      </div>
    </>
  );
};

export default Cards;
