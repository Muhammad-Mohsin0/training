import ladycar from "../assets/ladycar.png";

const LandingPageOne = () => {
  return (
    <div className="grid justify-center space-y-10 md:space-y-18 pt-12">
      <h1 className="md:text-9xl text-6xl text-center leading-tight font-bold bg-gradient-to-l to-[#FFF83C] from-[#D428C3] bg-clip-text text-transparent">
        Ready To Get <br /> Lucky?
      </h1>
      <div className=" flex flex-col justify-end relative">
        <div className="w-80 h-64 md:w-200 md:h-145 flex justify-end">
          <img src={ladycar} alt="" />
        </div>

        <span className="hidden lg:block absolute top-4 left-3 w-56 px-6 py-3 text-white font-semibold p-4 rounded-4xl  bg-[#EB1FD01C] border-2 border-[#7C37A3]">
          Easy Lottery Purchase
        </span>
        <span className=" hidden lg:block absolute ml-8 top-14 -right-18 w-56 px-6 py-3 text-white font-semibold p-4 rounded-4xl  bg-[#EB1FD01C] border-2 border-[#7C37A3]">
          Live Draw Streaming
        </span>
        <span className=" hidden xl:block absolute ml-8 bottom-52 -right-40 w-56 px-6 py-3 text-white font-semibold p-4 rounded-4xl  bg-[#EB1FD01C] border-2 border-[#7C37A3]">
          Secure Wallet System
        </span>
        <span className="hidden lg:block absolute ml-8 bottom-40 -left-24 w-56 px-6 py-3 text-white font-semibold p-4 rounded-4xl  bg-[#EB1FD01C] border-2 border-[#7C37A3]">
          Instant Winnings
        </span>
        <h3 className="hidden xl:block absolute  bottom-20 -right-72 text-white text-4xl font-bold">
          One Ticket Could Make
          <span className="flex justify-end ">
            You a <span className="text-[#D428C3] pl-1"> Millionaire!</span>
          </span>
        </h3>
        <button className="my-2 mx-8 md:mx-0 md:absolute  text-lg inset-x-48 bottom-0 md:w-72 px- md:px-20 py-4  text-white font-semibold  rounded-4xl  bg-[#CB29B5] cursor-pointer">
          Download App
        </button>
        <button className="my-2 mx-8 md-mx-0 md:absolute  text-lg right-12 bottom-0 md:w-56 px-12 md:px-10 py-4  text-black font-semibold  rounded-4xl  bg-white cursor-pointer">
          WhatsApp Login
        </button>
      </div>
    </div>
  );
};

export default LandingPageOne;
