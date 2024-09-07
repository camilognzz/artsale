import React from "react";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";

const Footer = () => {
  return (
    <div>
      <div className="bg-slate-950 w-full flex md:flex-row flex-col justify-around items-start p-20 dark:bg-blue-950">
        <div className="p-5">
          <ul>
            <p className="text-slate-100 font-bold text-3xl pb-6">
              Art<span className="text-blue-600">Sale</span>
            </p>
            <div className="flex gap-6 pb-5">
              {/* Icons */}
              <FaInstagram className="text-slate-100 text-2xl cursor-pointer hover:text-pink-600" />
              <FaTwitter className="text-slate-100 text-2xl cursor-pointer hover:text-blue-600" />
              <FaLinkedin className="text-slate-100 text-2xl cursor-pointer hover:text-blue-600" />
              <FaYoutube className="text-slate-100 text-2xl cursor-pointer hover:text-red-600" />
            </div>
          </ul>
        </div>
        <div className="p-5">
          <ul>
            <p className="text-slate-100 font-bold text-2xl pb-4">Products</p>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Stocks
            </li>
            <li className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
              Stocks
            </li>
          </ul>
        </div>
        <div className="p-5">
          <p className="text-slate-100 font-bold text-2xl pb-4">Company</p>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
        </div>
        <div className="p-5">
          <p className="text-slate-100 font-bold text-2xl pb-4">Support</p>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
          <ul className="text-gray-500 text-md pb-2 font-semibold hover:text-blue-600 cursor pointer">
            About
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Footer;
