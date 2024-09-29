import React from "react";
import { Link, useLocation } from 'react-router-dom';
import logo from "../assets/food-blogger-site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

export default function Navbar() {
  const location = useLocation();

  const isActive = (path) => location.pathname === path;

  return (
    <>
      <div className="navbar bg-transparent w-full z-20 mb-24 px-32 flex justify-between items-center max-md:p-6 max-sm:p-5 max-sm:mb-16">
        {/* Navbar Start */}
        <div className="navbar-start flex items-center">
          <img src={logo} alt="Logo" />
          <ul className="menu menu-horizontal px-1 hidden lg:flex font-bold tracking-widest uppercase cursor-pointer text-xs mx-5 text-gray-900 font-Montserrat space-x-6">
            <Link to={'/'}><li className={isActive('/') ? 'text-[#BE7C68]' : 'hover:text-[#BE7C68]'}>Home</li></Link>
            <Link to={'/about'}><li className={isActive('/about') ? 'text-[#BE7C68]' : 'hover:text-[#BE7C68]'}>About</li></Link>
            <Link to={'/contact'}><li className={isActive('/contact') ? 'text-[#BE7C68]' : 'hover:text-[#BE7C68]'}>Contact</li></Link>
          </ul>
        </div>

        {/* Navbar Center (Empty) */}
        <div className="navbar-center hidden lg:flex"></div>

        {/* Navbar End */}
        <div className={`navbar-end flex items-center ${isActive('/about') || isActive('/contact') ? 'text-[#BE7C68]' : 'text-white'}`}>
          <div className={`text-lg cursor-pointer hidden lg:flex items-center space-x-4`}>
            <FontAwesomeIcon icon={faYoutube} className="hover:opacity-80" />
            <FontAwesomeIcon icon={faInstagram} className="hover:opacity-80" />
            <FontAwesomeIcon icon={faFacebook} className="hover:opacity-75" />
            <button className={`font-Montserrat border-2 text-xs m-3 px-8 py-3 font-bold ${isActive('/about') || isActive('/contact') ? 'text-[#BE7C68] border-[#BE7C68] hover:bg-[#BE7C68] hover:text-white' : 'text-white hover:bg-white hover:text-gray-700'} transition duration-150 ease-out hover:ease-in tracking-widest`}>
              LET'S TALK
            </button>
          </div>
        </div>
      </div>
    </>
  );
}
