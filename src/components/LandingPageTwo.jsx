import headphone1 from "../assets/headphone1.png";
import headphone2 from "../assets/headphone2.png";
import headphone3 from "../assets/headphone3.png";
import headphone4 from "../assets/headphone4.png";
import miniHP1 from "../assets/miniHP1.png";
import miniHP2 from "../assets/miniHP2.png";
import miniHP3 from "../assets/miniHP3.png";
import miniHP4 from "../assets/miniHP4.png";
import GalaxyBuds from "../assets/Galaxy Buds.png";
import Headphones from "../assets/Headphones.png";
import Speakers from "../assets/Speakers.png";
import Buds from "../assets/Buds.png";
import { useState } from "react";

const LandingPageTwo = () => {
  const [selected, setSelected] = useState(0);

  const miniImages = [miniHP1, miniHP2, miniHP3, miniHP4];
  const mainImages = [headphone1, headphone2, headphone3, headphone4];
  const collections = [
    { id: 1, image: Headphones, title: "Headphones" },
    { id: 2, image: Speakers, title: "Speakers" },
    { id: 3, image: Buds, title: "Buds" },
  ];
  return (
    <>
      <div className=" flex flex-col justify-center items-center text-center mt-[-2rem] relative">
        <h1 className=" text-[#C2EDFF] uppercase mt-[3rem] text-[50px] sm:text-[80px] md:text-[100px]  lg:text-[270px] font-playanton font-bold leading-none ">
          headphone
        </h1>
        <img
          src={mainImages[selected]}
          alt="Main"
          className="absolute top-20 md:mr-16 lg:top-2  transition-opacity duration-[2000ms] ease-in-out opacity-100 w-[250px] sm:w-[320px] md:w-[400px] lg:w-[834px]"
          key={selected}
        />
      </div>
      <div className="text-white ml-16 mt-20 w-[18%] hidden lg:block">
        <h1 className="text-3xl font-semibold ">Next Level Games</h1>
        <p className="text-lg font-light my-4  text-[#C5C5C5]">
          Get ready to train smarter, play harder, and perform stronger with
          premium gear made for every sport.
        </p>
        <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
          Explore items
        </button>
      </div>

      <div className="flex flex-col lg:flex-row justify-evenly lg:justify-between my-18 mx-16 mt-56 lg:mt-0">
        <div className="flex items-end gap-4 z-10">
          {miniImages.map((img, index) => (
            <img
              key={index}
              src={img}
              alt={`mini headphone ${index + 1}`}
              onClick={() => setSelected(index)}
              className={`rounded-2xl cursor-pointer border-2 transition-all duration-200 ${
                selected === index
                  ? "border-[#C5C5C5] scale-105"
                  : "border-transparent"
              }`}
            />
          ))}
        </div>
        <div className="text-white flex justify-around bg-[#6969694D] w-[415px] h-[216px] rounded-2xl border-[0.5px] border-[#C5C5C5]">
          <div className="grid grid-cols-1 content-around">
            <div>
              <h2 className="text-2xl font-semibold text-[#F5F5F4]">
                Galaxy Buds
              </h2>
              <h3 className="text-2xl font-light text-[#C5C5C5]">
                Popular Item
              </h3>
            </div>
            <h2 className="text-xl font-semibold text-[#F5F5F4]">$125</h2>
          </div>
          <div className="mt-4">
            <img src={GalaxyBuds} alt="" className=" rounded-4xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-center space-x-6 py-16">
        {collections.map((items) => (
          <div className="text-white flex justify-around bg-[#251F1F] w-[424px] h-[289px] rounded-2xl">
            <div className="flex flex-col justify-around space-y-16">
              <div>
                <h2 className="text-3xl font-semibold text-[#F5F5F4]">
                  {items.title} <br />
                  Collection
                </h2>
              </div>
              <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
                Explore items
              </button>
            </div>
            <div className=" mt-4">
              <img
                src={items.image}
                alt={items.title}
                className=" rounded-4xl"
              />
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default LandingPageTwo;
