import React from "react";
import women1 from "../assets/1.png";
import women2 from "../assets/2.png";
import women3 from "../assets/3.png";
import women4 from "../assets/4.png";
import women5 from "../assets/5.png";
import women6 from "../assets/6.png";
import heart from "../assets/heart.png";

const EcommerceCollection = () => {
  const Ecommerce = [
    {
      id: 1,
      image: women1,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -2000.0`,
    },
    {
      id: 2,
      image: women2,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -3990.0`,
    },
    {
      id: 3,
      image: women3,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -7660.0`,
    },
    {
      id: 4,
      image: women4,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -7660.0`,
    },
    {
      id: 5,
      image: women5,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -9920.0`,
    },
    {
      id: 6,
      image: women6,
      title: "Women Overcoat",
      color: "-Red Colour",
      price: `PKR -3990.0`,
    },
  ];

  const rpeated = [...Ecommerce, ...Ecommerce];
  return (
    <>
      <div className="flex justify-start py-16 overflow-hidden ">
        <div className="w-[86%] py-4 bg-gradient-to-tl to-[#FFD400] from-[#DF39D4] rounded-r-3xl relative ">
          <h1 className="text-5xl text-white font-bold px-8 py-8 font-sans">
            Explore the latest E-commerce Collection
          </h1>
          <div className="relative w-full overflow-hidden">
            <div className=" animate-scroll-left h-115">
              {rpeated.map((item) => (
                <div
                  key={item.id}
                  className=" w-60 h-[300px] bg-white rounded-4xl relative flex flex-col justify-between items-center shrink-0 "
                >
                  <img
                    src={heart}
                    alt=""
                    className=" absolute top-2 right-3 w-10"
                  />

                  <div className="flex justify-center items-center pt-6">
                    <div className="w-60 h-69 flex justify-center items-center ">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </div>
                  <div className="flex flex-col items-center py-6 text-white text-2xl">
                    <span>{item.title}</span>
                    <span>{item.color}</span>
                    <span className="font-bold">{item.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EcommerceCollection;
