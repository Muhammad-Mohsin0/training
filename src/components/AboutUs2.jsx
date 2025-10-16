import about from "../assets/about.png";
import profile1 from "../assets/profile1.png";
import profile2 from "../assets/profile2.png";
import profile3 from "../assets/profile3.png";

const AboutUs2 = () => {
  return (
    <div className="grid grid-cols-2 m-24 py-12 ">
      <div>
        <img src={about} alt="" />
      </div>
      <div className="grid">
        <div className="">
          <h3 className="text-[#0EB7FF] bg-[#6969694D] font-semibold w-24 rounded-lg  text-center p-1">
            About Us
          </h3>
          <h1 className="text-start bg-gradient-to-t to-[#0EB7FF] from-[#F2D20E] uppercase bg-clip-text leading-tight text-6xl font-bold text-transparent">
            Driven by Passion, Trusted by Thousands.
          </h1>
        </div>
        <p className="text-[#C5C5C5] text-lg">
          Our curated collections span across a wide range of sports, fitness
          categories, and outdoor activities. We partner only with trusted
          brands and tested products to ensure durability, comfort, and
          performance. Whether you're chasing a personal record or just getting
          started, Trivo is here to help you every step of the way.
        </p>
        <div className="flex gap-16">
          <div>
            <h2 className="text-3xl font-semibold text-[#F5F5F4]">8 Years</h2>
            <h3 className="text-[#C5C5C5] text-xl ">Providing the best gear</h3>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#F5F5F4]">5000+</h2>
            <h3 className="text-[#C5C5C5] text-xl ">Products available</h3>
          </div>
          <div>
            <h2 className="text-3xl font-semibold text-[#F5F5F4]">200+</h2>
            <h3 className="text-[#C5C5C5] text-xl ">Local brands</h3>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutUs2;
