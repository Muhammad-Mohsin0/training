import { CiLinkedin } from "react-icons/ci";
import { CiFacebook } from "react-icons/ci";
import { FaInstagram } from "react-icons/fa6";
import { ImWhatsapp } from "react-icons/im";

const Footer2 = () => {
  return (
    <>
      <div className="flex flex-col justify-center items-center ">
        <h1 className="bg-gradient-to-r to-[#0EB7FF] from-[#F2D20E] uppercase bg-clip-text leading-tight text-[200px] font-singleton text-transparent">
          BUY2GET
        </h1>
        <h2 className="text-white text-6xl font-singleton">
          JEET KA SCENE ON HAI!
        </h2>
      </div>
      <div className="flex flex-5 justify-around list-none text-lg py-20">
        <div className="text-[#C5C5C5]">
          <ul className="text-[#0EB7FF] font-semibold">Store</ul>
          <li>Categories</li>
          <li>New Arrival</li>
          <li>Best Seller</li>
          <li>Featured</li>
        </div>
        <div className="text-[#C5C5C5]">
          <ul className="text-[#0EB7FF] font-semibold">Categories</ul>
          <li>Headphones</li>
          <li>Speakers</li>
          <li>More</li>
        </div>
        <div className="text-[#C5C5C5]">
          <ul className="text-[#0EB7FF] font-semibold">Other</ul>
          <li>FAQ</li>
          <li>Blog</li>
          <li>Privacy Policy</li>
          <li>Terms of use</li>
        </div>
        <div className="">
          <h3 className="text-[#0EB7FF] font-semibold">
            Join our mailing list
          </h3>
          <div className="py-2">
            <input
              type="email"
              placeholder="Your Emial"
              className="bg-white px-6 py-2 rounded-4xl"
            />
            <button className="text-black text-lg bg-[#0EB7FF] px-6 py-2 rounded-4xl cursor-pointer mx-2">
              Explore items
            </button>
          </div>
          <h3 className="text-[#0EB7FF] font-semibold">Follow Us</h3>
          <div className="flex text-white gap-4 text-3xl py-2">
            <CiLinkedin />
            <CiFacebook />
            <FaInstagram />
            <ImWhatsapp />
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center py-4">
        <h1 className="text-xl text-white">
          ©2025 BUY2GET by{" "}
          <span className="font-semibold ">Creative Code Tech</span>
        </h1>
      </div>
    </>
  );
};

export default Footer2;
