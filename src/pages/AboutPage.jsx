import React from 'react';
import Navbar from '../Components/Navbar';
import "../App.css";
// *imgs
import header from "../assets/headerImage.jpg";
import company1 from "../assets/company1.svg";
import company2 from "../assets/company2.svg";
import company3 from "../assets/company3.svg";
import company4 from "../assets/company4.svg";
import company5 from "../assets/company5.svg";
import Cimg from "../Components/Cimg";

function AboutPage() {
  return (
    <>
      <div id="main">
        <Navbar />
        <div className="w-[80vw] mx-auto my-20 flex flex-col items-center text-center">
          <h1 className="text-6xl font-Fraunces font-bold text-[#131516] max-md:text-5xl max-sm:text-3xl mb-10">
            About Us
          </h1>
          <p className="text-[#707c84] text-xl font-Montserrat max-md:text-lg max-sm:text-md leading-relaxed mb-16">
            Welcome to our food blogger website. Here, we share our passion for culinary arts, food reviews, and restaurant visits. 
            Our goal is to help food lovers find the best experiences and share insights into the world of food and hospitality.
          </p>
          <img className="w-[80%] max-md:w-[90%] mb-10" src={header} alt="About Us" />
        </div>

        <div className="w-full flex flex-col items-center bg-[#F3EFEE] py-10">
          <div className="w-[80vw] flex flex-col items-center my-10 max-md:w-[90vw]">
            <p className="text-6xl text-center font-Fraunces font-bold max-md:text-4xl max-sm:text-2xl text-[#131516]">
              Our Mission
            </p>
            <p className="w-[60vw] text-center text-lx tracking-wider	my-5 max-sm:text-sm font-Montserrat">
              Massa urna magnis dignissim id euismod porttitor vitae etiam
              viverra nunc at adipiscing sit morbi aliquet mauris porttitor
              nisi, senectus pharetra ac porttitor orci. Our aim is to provide genuine reviews, insights into the food industry, and share our experiences.
            </p>
          </div>

          <div className="w-[80vw] grid grid-cols-5 gap-10 my-10 max-md:w-[90vw] max-md:grid-cols-1 max-sm:my-5">
            <Cimg img={company1}></Cimg>
            <Cimg img={company2}></Cimg>
            <Cimg img={company3}></Cimg>
            <Cimg img={company4}></Cimg>
            <Cimg img={company5}></Cimg>
          </div>

          <div className="w-[80vw] flex flex-col items-center my-10">
            <h2 className="text-5xl font-bold max-md:text-4xl font-Fraunces max-sm:text-2xl text-[#131516] mb-5">
              Our Team
            </h2>
            <p className="text-[#707c84] text-[100%] font-Montserrat max-md:text-sm text-center">
              We are a team of passionate food enthusiasts, critics, and influencers dedicated to discovering and sharing the best culinary experiences. Whether it’s local restaurants or international cuisine, we strive to bring our readers authentic and unbiased reviews.
            </p>
          </div>
        </div>

        <div className="flex flex-col items-center bg-[#BE7C68] p-20 max-md:px-10">
          <p className="text-5xl font-Fraunces text-center text-white font-bold max-md:text-4xl max-sm:text-2xl">
            Join our journey <br />
            Explore the best in food with us.
          </p>
          <p className="text-lg text-center text-white my-5 max-md:text-sm tracking-wider font-Montserrat">
            Lorem dui tincidunt nunc viverra morbi et maecenas quam adipiscing integer 
            amet eget blandit phasellus est natoque blandit facilisi eleifend.
          </p>
          <button className="text-xs font-Montserrat px-5 py-3 font-bold border-2 bg-white text-[#BE7C68] hover:bg-[#BE7C68] border-white hover:text-white transition duration-150 hover:ease-in tracking-widest">
            CONTACT US
          </button>
        </div>

      </div>
    </>
  );
}

export default AboutPage;
