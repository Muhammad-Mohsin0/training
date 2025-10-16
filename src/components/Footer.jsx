import React from "react";

const Footer = () => {
  return (
    <div className="flex flex-col items-center text-white space-y-4">
      <ul className="flex justify-between text-xs sm:text-base mx-1 sm:mx-0">
        <li>User Agreement | </li>
        <li className="sm:pl-2">Draw Terms & Condition | </li>
        <li className="sm:pl-2">Privacy Policy</li>
      </ul>
      <h2 className="flex flex-col items-center sm:block text-sm md:text-xl pb-12">
        BUY2GET - by <span className="font-bold">Creative Code Tech </span> ©
        2025 All Rights Reserved
      </h2>
    </div>
  );
};

export default Footer;
