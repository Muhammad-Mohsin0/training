import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa6";

const Card = () => {
  return (
    <>
      <div class="flex justify-center gap-12  bg-black ">
        <div class="w-100  bg-white  rounded-xl p-4 mt-32 mb-44">
          <div class="bg-gradient-to-tr from-green-400 to-blue-500 text-white text-center rounded-xl -mt-18 mb-16 shadow-2xl/40">
            <h1 class="text-4xl font-bold pt-8">John Xavier</h1>
            <p class="text-lg font-normal pt-4">Graphic designer</p>
            <div class="flex justify-center gap-2 mt-4 pb-6">
              <FaXTwitter class="text-3xl bg-transparent p-1 cursor-pointer " />
              <FaFacebookF class="text-3xl  bg-transparent p-1 cursor-pointer" />
              <FaLinkedinIn class="text-3xl  bg-transparent p-1 cursor-pointer" />
            </div>
          </div>
          <p class="pb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
        <div class="w-100  bg-white  rounded-xl p-4 mt-32 mb-44">
          <div class="bg-gradient-to-tr from-green-400 to-blue-500 text-white text-center rounded-xl -mt-18 mb-16 shadow-2xl/40">
            <h1 class="text-4xl font-bold pt-8">Maria Moron</h1>
            <p class="text-lg font-normal pt-4">Project manager</p>
            <div class="flex justify-center gap-2 mt-4 pb-6">
              <FaXTwitter class="text-3xl bg-transparent p-1 cursor-pointer " />
              <FaFacebookF class="text-3xl  bg-transparent p-1 cursor-pointer" />
              <FaLinkedinIn class="text-3xl  bg-transparent p-1 cursor-pointer" />
            </div>
          </div>
          <p class="pb-12">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
        <div class="w-100  bg-white  rounded-xl p-4 mt-32 mb-44">
          <div class="bg-gradient-to-tr from-green-400 to-blue-500 text-white text-center rounded-xl -mt-18 mb-16 shadow-2xl/40">
            <h1 class="text-4xl font-bold pt-8">Kally Joul</h1>
            <p class="text-lg font-normal pt-4">Mern developer</p>
            <div class="flex justify-center gap-2 mt-4 pb-6 ">
              <FaXTwitter class="text-3xl bg-transparent p-1 cursor-pointer " />
              <FaFacebookF class="text-3xl  bg-transparent p-1 cursor-pointer" />
              <FaLinkedinIn class="text-3xl  bg-transparent p-1 cursor-pointer" />
            </div>
          </div>
          <p class="pb-12 ">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages
          </p>
        </div>
      </div>
    </>
  );
};

export default Card;
