import React from "react";
import logo from "../assets/food-blogger-site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  return (
    <>
      <div className="navbar bg-transparent w-full z-20 mb-24 px-32 flex justify-between items-center max-md:p-6 max-sm:p-5 max-sm:mb-16">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <img src={logo} alt="Logo" />
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-bold tracking-widest uppercase cursor-pointer text-xs mx-5 text-gray-900 font-Montserrat space-x-6">
            <li className="text-[#BE7C68]">Home</li>
            <li className="hover:text-[#BE7C68]">About</li>
            <li className="hover:text-[#BE7C68]">Reviews</li>
            <li className="hover:text-[#BE7C68]">Videos</li>
            <li className="hover:text-[#BE7C68]">Contact</li>
          </ul>
        </div>
        {/* Navbar Center (Empty) */}
        <div className="navbar-center hidden lg:flex"></div>
        {/* Navbar End */}
        <div className="navbar-end flex items-center">
          <div className="text-white text-lg cursor-pointer hidden lg:flex items-center space-x-4">
            <FontAwesomeIcon icon={faYoutube} className="hover:opacity-80" />
            <FontAwesomeIcon icon={faInstagram} className="hover:opacity-80" />
            <FontAwesomeIcon icon={faFacebook} className="hover:opacity-75" />
            <button className="font-Montserrat border-2 text-xs m-3 px-8 py-3 font-bold border-white text-white hover:bg-white hover:text-gray-700 transition duration-150 ease-out hover:ease-in tracking-widest">
              LET'S TALK
            </button>
          </div>
          {/* Mobile Navbar Toggle */}
          <label
            htmlFor="navListSm"
            className="p-2 btn-ghost cursor-pointer lg:hidden bg-[#BE7C68] rounded-full"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#ffffff"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="icon icon-tabler icons-tabler-outline icon-tabler-menu-2"
            >
              <path stroke="none" d="M0 0h24v24H0z" fill="none" />
              <path d="M4 6l16 0" />
              <path d="M4 12l16 0" />
              <path d="M4 18l16 0" />
            </svg>
          </label>
          {/* Mobile Navbar Modal */}
          <input type="checkbox" id="navListSm" className="modal-toggle" />
          <div className="modal z-20">
            <div className="bg-white w-full h-screen flex flex-col items-center justify-center text-2xl tracking-widest cursor-pointer font-Montserrat">
              <p className="my-6 hover:text-[#BE7C68]">Home</p>
              <p className="my-6 hover:text-[#BE7C68]">About</p>
              <p className="my-6 hover:text-[#BE7C68]">Reviews</p>
              <p className="my-6 hover:text-[#BE7C68]">Videos</p>
              <p className="my-6 hover:text-[#BE7C68]">Contact</p>
              <div className="modal-action">
                <label
                  htmlFor="navListSm"
                  className="btn btn-sm btn-circle btn-ghost absolute right-10 top-8 text-xl"
                >
                  ✕
                </label>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

