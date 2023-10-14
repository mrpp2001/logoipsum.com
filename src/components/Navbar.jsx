import React from "react";
import logo from "../assets/logo.png";
import { BiChevronDown } from "react-icons/bi";

const Navbar = () => {
  return (
    <>
      <nav className="relative flex justify-between mx-[128px]">
          <img
            className=" w-[138px] h-[67px] absolute left-0 top-1 my-2 mr-[32px]"
            src={logo}
            alt="logo"
          />
        <div className="flex ml-[170px] mt-[11px]">
            <div className="flex ">
              <p className=" text-black text-lg font-bold py-[16px] px-[16px]">
                Solutions
              </p>
              <BiChevronDown className=" w-[24px] h-[24px] my-[18px]" />
            </div>

            <div className="flex ">
              <p className=" text-black text-lg font-bold py-[16px] px-[16px]">
                Features
              </p>
              <BiChevronDown className=" w-[24px] h-[24px] my-[18px]" />
            </div>

            <div className="flex ">
              <p className=" text-black text-lg font-bold py-[16px] px-[16px]">Blogs</p>
            </div>

            <div className="flex ">
              <p className=" text-black text-lg font-bold py-[16px] px-[16px]">About</p>
              <BiChevronDown className=" w-[24px] h-[24px] my-[18px]" />
            </div>
          </div>

          <div className="my-4 flex gap-[16px]">
            <button className="w-[110px] px-[20px] py-[10px] text-sky-600 border-2 border-sky-600 rounded-xl hover:bg-sky-600 hover:text-white font-bold">Login</button>
            <button className="w-[110px] px-[20px] py-[10px] bg-sky-600 text-white rounded-xl hover:text-sky-600 hover:bg-white hover:border-2 hover:border-sky-600 font-bold ">Register</button>
          </div>
      </nav>
    </>
  );
};

export default Navbar;
