import FeatureLaptop from "../assets/FeatureLaptop.png";
import FeatureCamera from "../assets/FeatureCamera.png";
import FeatureMic from "../assets/FeatureMic.png";

const FeaturedItems2 = () => {
  const FeaturedItems = [
    {
      img: FeatureLaptop,
      name: "Xiaomi Mi Laptop 512gb",
      descrption: "Collaboration between Zuva and The 89 Club for this spring.",
    },
    {
      img: FeatureCamera,
      name: "Sony Alpha Camera",
      descrption:
        "Dice special edition, designed by Clara Nayez. Out May 20th.",
    },
    {
      img: FeatureMic,
      name: "THK Mic With Stand",
      descrption:
        "Collaboration between The Dots and Sun Society for outdoor collection.",
    },
  ];
  return (
    <>
      <div className="flex justify-between items-center my-8 mx-24">
        <h1 className="bg-gradient-to-l to-[#0EB7FF] from-[#F2D20E] uppercase bg-clip-text leading-tight text-center text-6xl font-bold text-transparent">
          Featured
        </h1>
        <div>
          <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
            See All Featured
          </button>
        </div>
      </div>
      <div className="grid grid-flow-col grid-rows-2 gap-6 justify-center mx-24 py-12">
        {FeaturedItems.slice(0, 2).map((item, index) => (
          <div
            key={index}
            className="col-span-2 flex h-[290px] bg-[#251F1F] rounded-xl"
          >
            <div className="flex flex-col justify-between items-start py-4 pl-8">
              <div>
                <h2 className="text-3xl font-semibold text-[#F5F5F4]">
                  {item.name}
                </h2>
                <h3 className="text-[#C5C5C5] text-xl ">{item.descrption}</h3>
              </div>
              <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer">
                Shop Now
              </button>
            </div>
            <div className="w-[350px] flex justify-center items-center">
              <img src={item.img} alt={item.name} className="" />
            </div>
          </div>
        ))}
        <div className="row-span-2 w-[535px] bg-[#251F1F] rounded-xl flex flex-col justify-evenly">
          <div className="">
            <div className="flex justify-center">
              <img
                src={FeaturedItems[2].img}
                alt={FeaturedItems[2].name}
                className="rounded-2xl object-contain"
              />
            </div>
            <div className="pl-8 py-8">
              <h2 className="text-3xl font-semibold text-[#F5F5F4]">
                {FeaturedItems[2].name}
              </h2>
              <h3 className="text-[#C5C5C5] text-lg">
                {FeaturedItems[2].descrption}
              </h3>
            </div>

            <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer ml-8">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default FeaturedItems2;
