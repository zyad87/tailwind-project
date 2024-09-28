import React from "react";
import logo from "../assets/food-blogger-site-logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook } from "@fortawesome/free-brands-svg-icons";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <footer className="py-10">
      <div className="flex justify-around p-10 max-md:flex-col max-md:items-center max-sm:p-5">
        <img className="max-md:w-[10%] max-sm:w-[30%]" src={logo} alt="" />
        <ul className="menu menu-horizontal tracking-widest transition duration-150 ease-out hover:ease-in cursor-pointer max-md:my-10 justify-center font-Montserrat">
          <li className="m-4 hover:text-[#BE7C68]">Home</li>
          <li className="m-4 hover:text-[#BE7C68]">About</li>
          <li className="m-4 hover:text-[#BE7C68]">Reviews</li>
          <li className="m-4 hover:text-[#BE7C68]">Videos</li>
          <li className="m-4 hover:text-[#BE7C68]">Contact</li>
        </ul>
        <div className="text-[#BE7C68] cursor-pointer text-xl">
          <FontAwesomeIcon icon={faYoutube} className="hover:text-slate-700 mx-4"/>
          <FontAwesomeIcon icon={faInstagram} className="hover:text-slate-700 mx-4"/>
          <FontAwesomeIcon icon={faFacebook} className="hover:text-slate-700 mx-4"/>
        </div>
          </div>
          <div className="flex justify-between p-5 mx-32 text-sm text-gray-500 max-md:mx-5 max-sm:flex-col max-sm:mx-2 max-sm:items-center font-Montserrat">
              <p className="my-3">&copy; {new Date().getFullYear()} Food Blogger & Influencer</p>
              <p>Powered by Food Blogger & Influencer</p>
          </div>
    </footer>
  );
}
export default Footer;
