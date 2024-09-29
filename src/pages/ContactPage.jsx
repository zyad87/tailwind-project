import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import "../App.css";

function ContactPage() {
  return (
    <>
      <Navbar />
      <div className="w-full flex flex-col items-center my-20 px-6">
        <h1 className="text-6xl font-Fraunces font-bold text-[#131516] max-md:text-4xl max-sm:text-3xl mb-10">
          Contact Us
        </h1>
        <p className="text-lg text-center text-[#707c84] font-Montserrat max-md:text-md max-sm:text-sm mb-16">
          We'd love to hear from you! Whether you have a question about our content, services, or just want to say hi, feel free to reach out.
        </p>
        <div className="w-full max-w-3xl bg-white p-8 rounded-lg shadow-lg">
          <form className="flex flex-col space-y-6">
            <div className="flex flex-col">
              <label className="font-bold text-[#131516] mb-2">Name</label>
              <input
                type="text"
                placeholder="Your Name"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE7C68]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-[#131516] mb-2">Email</label>
              <input
                type="email"
                placeholder="Your Email"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE7C68]"
                required
              />
            </div>
            <div className="flex flex-col">
              <label className="font-bold text-[#131516] mb-2">Message</label>
              <textarea
                rows="5"
                placeholder="Your Message"
                className="p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#BE7C68]"
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="font-Montserrat text-white bg-[#BE7C68] px-6 py-3 rounded-lg hover:bg-[#D08D74] transition duration-200 ease-in-out"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </>
  );
}

export default ContactPage;
